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
    public async Task<ActionResult<List<Company>>> AddCompany(CompanyDTO companyRequest) {
        if (_database.Companies.Any(x => x.Name == companyRequest.Name)) return BadRequest("Company already exists.");

        Company company = new Company();
        company.Name = companyRequest.Name;
        _database.Companies.Add(company);
        
        var software = _database.Machines.FirstOrDefault(x => x.Name == "Software Issue"); if (software == null) return (BadRequest());
        var noMachine = _database.Machines.FirstOrDefault(x => x.Name == "No Machine"); if (noMachine == null) return (BadRequest());
        CompanyMachine companySoftware = new CompanyMachine() {Name = software.Name, MachineId = software.Id, CompanyId = company.Id};
        CompanyMachine companyNoMachine = new CompanyMachine() {Name = noMachine.Name, MachineId = noMachine.Id, CompanyId = company.Id};
        _database.CompanyMachines.Add(companySoftware);
        _database.CompanyMachines.Add(companyNoMachine);
        
        await _database.SaveChangesAsync();
        return Ok(await _database.Companies.ToListAsync());
    }
}