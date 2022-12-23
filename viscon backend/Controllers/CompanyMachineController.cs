using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using viscon_backend.DTOs;
using viscon_backend.Models;

namespace viscon_backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CompanyMachineController : ControllerBase {
    private readonly Database _database;
    public CompanyMachineController(Database database) =>
        _database = database;

    [HttpGet]
    public ActionResult<List<CompanyMachine>> Get() {
        return _database.CompanyMachines.ToList();
    }

    //Function that takes an userId, returns a list of Machines of the Company that the User is part of.
    [HttpGet ("{userId}")]
    public ActionResult<List<CompanyMachine>> GetMyMachines(Guid userId) {
        var user = _database.Users.Find(userId);
        if (user == null) return NotFound("User does not exist.");
        var company = _database.Companies.FirstOrDefault(x => x.Id == user.CompanyId);
        if (company == null) return NotFound("User is not part of a company or company does not exist.");
        return _database.CompanyMachines.Where(x => x.CompanyId == company.Id).ToList();
    }

    [HttpPost]
    public async Task<ActionResult<List<CompanyMachine>>> AddCompanyMachine(CompanyMachineDTO cMachineRequest) {
        //Change Name to IDs
        CompanyMachine cMachine = new CompanyMachine();
        cMachine.Name = cMachineRequest.Name;

        var machine = _database.Machines.FirstOrDefault(x => x.Name == cMachineRequest.Name)!;
        if (machine == null) return NotFound("Machine does not exist.");
        cMachine.MachineId = machine.Id;

        var company = _database.Companies.FirstOrDefault(x => x.Name == cMachineRequest.CompanyName)!;
        if (company == null) return NotFound("Company does not exist.");
        cMachine.CompanyId = company.Id;

        _database.CompanyMachines.Add(cMachine);
        await _database.SaveChangesAsync();
        return Ok(await _database.CompanyMachines.ToListAsync());
    }
}