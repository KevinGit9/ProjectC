using Microsoft.AspNetCore.Authorization;
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

    [HttpGet, Authorize(Roles = "admin")]
    public ActionResult<List<Company>> Get() {
        return _database.Companies.OrderBy(x => x.Name).ToList();
    }

    //Function that takes a companyId and returns the corresponding Company.
    [HttpGet ("{companyId}"), Authorize(Roles = "admin, key user, user")]
    public ActionResult<List<Company>> GetCompanyFromId(Guid companyId) {
        var company = _database.Companies.FirstOrDefault(x => x.Id == companyId);
        if (company == null) return NotFound("Company does not exist.");
        return Ok(company);
    }

    [HttpPost, Authorize(Roles = "admin")]
    public async Task<ActionResult<List<Company>>> AddCompany(CompanyDTO companyRequest) {
        if (_database.Companies.Any(x => x.Name == companyRequest.Name)) return BadRequest("Company already exists.");

        Company company = new Company();
        company.Name = companyRequest.Name;
        _database.Companies.Add(company);
        
        var software = _database.Machines.FirstOrDefault(x => x.Name == "Software Issue");
        var noMachine = _database.Machines.FirstOrDefault(x => x.Name == "No Machine");
        if (software == null || noMachine == null) return BadRequest("Software or No Machine does not yet exist in the Machine database.");
        CompanyMachine companySoftware = new CompanyMachine() {Name = software.Name, MachineId = software.Id, CompanyId = company.Id};
        CompanyMachine companyNoMachine = new CompanyMachine() {Name = noMachine.Name, MachineId = noMachine.Id, CompanyId = company.Id};
        _database.CompanyMachines.Add(companySoftware);
        _database.CompanyMachines.Add(companyNoMachine);
        
        await _database.SaveChangesAsync();
        return Ok(await _database.Companies.ToListAsync());
    }

    [HttpDelete("{companyId}"), Authorize(Roles = "admin")]
    public async Task<ActionResult<User>> DeleteCompanyMachine(Guid companyId) {
        var company = _database.Companies.FirstOrDefault(x => x.Id == companyId);
        if (company == null) return BadRequest("User does not exist.");
        
        _database.Companies.Remove(company);
        await _database.SaveChangesAsync();

        return Ok(company);
    }
}