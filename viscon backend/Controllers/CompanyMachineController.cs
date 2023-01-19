using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using viscon_backend.DTOs;
using viscon_backend.Models;

namespace viscon_backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CompanyMachineController : ControllerBase
{
    private readonly Database _database;
    public CompanyMachineController(Database database) =>
        _database = database;


    [HttpGet, Authorize(Roles = "admin")]
    public ActionResult<List<CompanyMachine>> Get()
    {
        return _database.CompanyMachines.Where(x => (x.Name != "Software Issue") && (x.Name != "No Machine")).OrderBy(x => x.CompanyId).ThenBy(x => x.MachineId).ToList();
    }

    //Function that takes an userId, returns a list of Machines of the Company that the User is part of.
    [HttpGet("{userId}"), Authorize(Roles = "admin, key user, user")]
    public ActionResult<List<CompanyMachine>> GetMyMachines(Guid userId)
    {
        var user = _database.Users.Find(userId);
        if (user == null) return NotFound("User does not exist.");
        var company = _database.Companies.FirstOrDefault(x => x.Id == user.CompanyId);
        if (company == null) return NotFound("User is not part of a company or company does not exist.");
        return _database.CompanyMachines.Where(x => x.CompanyId == company.Id).ToList();
    }

    //Function that uses an companyMachineId to find the corresponding Company Machine.
    [HttpGet("companyMachineInfo{companyMachineId}"), Authorize(Roles = "admin, key user, user")]
    public ActionResult<CompanyMachine> GetCompanyMachineInfo(Guid companyMachineId)
    {
        var compMachine = _database.CompanyMachines.FirstOrDefault(x => x.Id == companyMachineId);
        if (compMachine == null) return NotFound("Machine does not exist.");
        return Ok(compMachine);
    }

    [HttpPost, Authorize(Roles = "admin")]
    public async Task<ActionResult<List<CompanyMachine>>> AddCompanyMachine(CompanyMachineDTO companyMachineRequest)
    {
        CompanyMachine companyMachine = new CompanyMachine();
        companyMachine.Name = companyMachineRequest.Name;

        var machine = _database.Machines.FirstOrDefault(x => x.Name == companyMachineRequest.MachineName)!;
        if (machine == null) return NotFound("Machine does not exist.");
        companyMachine.MachineId = machine.Id;

        var company = _database.Companies.FirstOrDefault(x => x.Name == companyMachineRequest.CompanyName)!;
        if (company == null) return NotFound("Company does not exist.");
        companyMachine.CompanyId = company.Id;

        _database.CompanyMachines.Add(companyMachine);
        await _database.SaveChangesAsync();
        return Ok(await _database.CompanyMachines.ToListAsync());
    }

    [HttpDelete("{companyMachineId}"), Authorize(Roles = "admin")]
    public async Task<ActionResult<User>> DeleteCompanyMachine(Guid companyMachineId) {
        var companyMachine = _database.CompanyMachines.FirstOrDefault(x => x.Id == companyMachineId);
        if (companyMachine == null) return BadRequest("User does not exist.");
        
        _database.CompanyMachines.Remove(companyMachine);
        await _database.SaveChangesAsync();

        return Ok(companyMachine);
    }
}

