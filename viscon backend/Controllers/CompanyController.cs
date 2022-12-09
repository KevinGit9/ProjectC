using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using viscon_backend.DTOs;
using viscon_backend.Models;

namespace viscon_backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CompanyController : ControllerBase {
    private readonly Database _database;
    public CompanyController(Database database) =>
        _database = database;

    [HttpGet]
    public ActionResult<List<Company>> Get() {
        return _database.Companies.ToList();
    }

    [HttpPost]
    public async Task<ActionResult<List<Company>>> AddCompany(CompanyDTO company) {
        Company comp = new Company();
        comp.Id = Guid.NewGuid();
        comp.Name = company.Name;
        _database.Companies.Add(comp);
        await _database.SaveChangesAsync();
        return Ok(await _database.Companies.ToListAsync());
    }
}