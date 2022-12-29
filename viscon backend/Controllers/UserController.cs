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

    [HttpGet]
    public ActionResult<List<User>> Get() {
        return _database.Users.ToList();
    }
}