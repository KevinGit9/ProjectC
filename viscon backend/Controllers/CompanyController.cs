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
        List<Company> companies = _database.Companies.ToList();
        foreach (Company c in companies) {
            c.CompanyMachines = _database.CompanyMachines.Where(x => x.CompanyId == c.Id).ToList();
        }
        return companies;
    }

    [HttpPost]
    public async Task<ActionResult<List<Company>>> AddCompany(CompanyDTO companyRequest) {
        Company company = new Company();
        company.Name = companyRequest.Name;

        _database.Companies.Add(company);
        await _database.SaveChangesAsync();
        
        return Ok(await _database.Companies.ToListAsync());
    }
}