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

    [HttpGet ("{userId}")]
    public ActionResult<List<CompanyMachine>> GetMyMachines(Guid userId) {
        var user = _database.Users.Find(userId);
        if (user == null) return NotFound();
        var company = _database.Companies.FirstOrDefault(x => x.Id == user.CompanyId);
        if (company == null) return NotFound();
        return company.CompanyMachines;
    }

    [HttpPost]
    public async Task<ActionResult<List<CompanyMachine>>> AddCompanyMachine(CompanyMachineDTO cMachineRequest) {
        //Change Name to IDs
        CompanyMachine cMachine = new CompanyMachine();
        cMachine.Name = cMachineRequest.Name;
        cMachine.Machine = _database.Machines.FirstOrDefault(x => x.Name == cMachineRequest.Name)!;
        if (cMachine.Machine == null) return NotFound();
        cMachine.MachineId = cMachine.Machine.Id;
        cMachine.Company = _database.Companies.FirstOrDefault(x => x.Name == cMachineRequest.CompanyName)!;
        if (cMachine.Company == null) return NotFound();
        cMachine.CompanyId = cMachine.Company.Id;

        _database.CompanyMachines.Add(cMachine);
        await _database.SaveChangesAsync();
        return Ok(await _database.CompanyMachines.ToListAsync());
    }
}