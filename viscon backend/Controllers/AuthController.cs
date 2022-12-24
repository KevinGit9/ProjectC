/*TODO: 
Create and assign a web token to an user when they log in.
*/

using System.Security.Cryptography;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using viscon_backend;
using viscon_backend.DTOs;
using viscon_backend.Models;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase {
    private readonly Database _database;
    public AuthController(Database database) =>
        _database = database;

    //Function used to register an User. First checks if there is already an account registered with the Email that was entered.
    //Calls the CreatePasswordHash method to convert the Password of the User into bytes.
    [HttpPost("register")]
    public async Task<ActionResult<User>> RegisterUser(UserDTO userRequest) {
        var checkIfExists = _database.Users.FirstOrDefault(x => x.Email == userRequest.Email);
        if (checkIfExists != null) return BadRequest("An account with this email already exists.");

        CreatePasswordHash(userRequest.Password, out byte[] passwordHash, out byte[] passwordSalt);
        User user = new User();
        user.FirstName = userRequest.FirstName;
        user.LastName = userRequest.LastName;
        user.Email = userRequest.Email;
        user.PasswordHash = passwordHash;
        user.PasswordSalt = passwordSalt;
        user.Role = userRequest.Role;

        var company = _database.Companies.FirstOrDefault(x => x.Name == userRequest.CompanyName);
        if (company == null) return NotFound("Company does not exist.");
        user.CompanyId = company.Id;

        _database.Users.Add(user);
        await _database.SaveChangesAsync();
        return Ok(await _database.Users.ToListAsync());
    }

    //Function used to login. Checks if the Email exists in the database, if it does, continue.
    //Checks if the Password the user has typed in is the same as the password that has been stored in the database.
    //NOTE: This only works if the email is unique for every user.
    [HttpPost("login")]
    public async Task<ActionResult<User>> Login(LoginDTO loginRequest) {
        var user = _database.Users.FirstOrDefault(x => x.Email == loginRequest.Email);
        if (user == null) return BadRequest("Email does not exist.");
        if (!VerifyPasswordHash(loginRequest.Password, user.PasswordHash, user.PasswordSalt)) return BadRequest("Wrong password.");
        return Ok(user); //TODO: Create JSON Web Token.
    }

    //Function that converts the Password of the User into a passwordHash and passwordSalt.
    private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt) {
        using(var hmac = new HMACSHA512()) {
            passwordSalt = hmac.Key;
            passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
        }
    }

    //Function creates a new hash with the password + passwordSalt and compares that to the stored passwordHash of the user to check if they're the same.
    //If they are the same return True, else False.
    private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt) {
        using(var hmac = new HMACSHA512(passwordSalt)) {
            var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            return computedHash.SequenceEqual(passwordHash);
        }
    }
}