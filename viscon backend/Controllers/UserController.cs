using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using viscon_backend.DTOs;
using viscon_backend.Models;

namespace viscon_backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class Usercontroller : ControllerBase {
    private readonly Database _database;
    public Usercontroller(Database database) =>
        _database = database;

    [HttpGet, Authorize(Roles = "admin")]
    public ActionResult<List<User>> Get() {
        return _database.Users.ToList();
    }

    [HttpGet("{userInput}"), Authorize(Roles = "admin")]
    public ActionResult<List<User>> GetUserByInput(string userInput) {
        
        return _database.Users.Where(x => x.FirstName.Contains(userInput) || x.LastName.Contains(userInput)).ToList();

    }

    [HttpDelete("{userId}"), Authorize(Roles = "admin")]
    public async Task<ActionResult<User>> DeleteUser(Guid userId) {
        var user = _database.Users.FirstOrDefault(x => x.Id == userId);
        if (user == null) return BadRequest("User does not exist.");
        
        _database.Users.Remove(user);
        await _database.SaveChangesAsync();

        return Ok(user);
    }
}


