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

    [HttpGet("{userInput}")]
    public ActionResult<List<User>> GetUserByInput(string userInput) {
        
        return _database.Users.Where(x => x.FirstName.Contains(userInput) || x.LastName.Contains(userInput)).ToList();

    }
}


