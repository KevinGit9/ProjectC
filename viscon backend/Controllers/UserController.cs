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

    [HttpPost]
    public async Task<ActionResult<List<Machine>>> AddUser(UserDTO userRequest) {
        User user = new User();
        user.FirstName = userRequest.FirstName;
        user.LastName = userRequest.LastName;
        user.Role = userRequest.Role;

        var company = _database.Companies.FirstOrDefault(x => x.Name == userRequest.CompanyName);
        if (company == null) return NotFound("Company does not exist.");
        user.CompanyId = company.Id;

        _database.Users.Add(user);
        await _database.SaveChangesAsync();
        return Ok(await _database.Users.ToListAsync());
    }
}