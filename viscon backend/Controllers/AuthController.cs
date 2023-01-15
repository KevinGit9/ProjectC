/*TODO: 
Create and assign a web token to an user when they log in.
*/

using System.Security.Claims;
using System.Security.Cryptography;
using System.IdentityModel.Tokens;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using viscon_backend;
using viscon_backend.DTOs;
using viscon_backend.Models;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase {
    private readonly Database _database;
    private readonly IConfiguration _configuration;
    public AuthController(IConfiguration configuration, Database database) {
        _database = database;
        _configuration = configuration;
    }

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
    [HttpPost("login")]
    public async Task<ActionResult<User>> Login(LoginDTO loginRequest) {
        var user = _database.Users.FirstOrDefault(x => x.Email == loginRequest.Email);
        if (user == null) return BadRequest("Email does not exist.");
        if (!VerifyPasswordHash(loginRequest.Password, user.PasswordHash, user.PasswordSalt)) return BadRequest("Wrong password.");

        string token = CreateToken(user);

        var loginResponse = new LoginResponse();
        loginResponse.User = user;
        loginResponse.Jwt = token;

        return Ok(loginResponse); 
    }

    private string CreateToken(User user) {
        List<Claim> claims = new List<Claim> {
            new Claim(ClaimTypes.Email, user.Email),
            new Claim(ClaimTypes.Role, user.Role)
        };

        var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(_configuration.GetSection("AppSettings:Token").Value));
        var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

        var token = new JwtSecurityToken(
            claims: claims,
            expires: DateTime.Now.AddDays(1),
            signingCredentials: credentials
        );

        var jwt = new JwtSecurityTokenHandler().WriteToken(token);

        return jwt;
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