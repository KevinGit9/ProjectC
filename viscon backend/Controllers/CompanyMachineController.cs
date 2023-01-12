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

    //Function that uses an ticketId to find the corresponding Ticket.
    [HttpGet ("companyMachineInfo{companyMachineId}")]
    public ActionResult<Ticket> GetTicketInfo(Guid companyMachineId) {
        var compMachine = _database.CompanyMachines.FirstOrDefault(x => x.Id == companyMachineId);
        if (compMachine == null) return NotFound("Machine does not exist.");
        return Ok(compMachine);
    }

    [HttpPost]
    public async Task<ActionResult<List<CompanyMachine>>> AddCompanyMachine(CompanyMachineDTO companyMachineRequest) {
        //Commented lines are used for the final product (Uses Id's instead of names to identify objects).

        CompanyMachine companyMachine = new CompanyMachine();
        //companyMachine.Name = cMachineRequest.MachineName;
        companyMachine.Name = companyMachineRequest.Name;

        //var machine = _database.Machines.FirstOrDefault(x => x.Id == cMachineRequest.MachineId)!;
        var machine = _database.Machines.FirstOrDefault(x => x.Name == companyMachineRequest.MachineName)!;
        if (machine == null) return NotFound("Machine does not exist.");
        companyMachine.MachineId = machine.Id;

        //var company = _database.Companies.FirstOrDefault(x => x.Id == cMachineRequest.CompanyId)!;
        var company = _database.Companies.FirstOrDefault(x => x.Name == companyMachineRequest.CompanyName)!;
        if (company == null) return NotFound("Company does not exist.");
        companyMachine.CompanyId = company.Id;

        _database.CompanyMachines.Add(companyMachine);
        await _database.SaveChangesAsync();
        return Ok(await _database.CompanyMachines.ToListAsync());
    }
}