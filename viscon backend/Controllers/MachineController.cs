using Microsoft.AspNetCore.Mvc;
using viscon_backend.DTOs;
using viscon_backend.Models;

namespace viscon_backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class MachineController : ControllerBase {
    private readonly Database _database;
    public MachineController(Database database) =>
        _database = database;

    [HttpGet]
    public ActionResult<List<Machine>> Get() {
        return _database.Machines.ToList();
    }

    [HttpGet ("{userId}")]
    public ActionResult<List<Machine>> GetMyMachines(Guid userId) {
        var user = _database.Users.Find(userId);
        if (user == null) return NotFound();
        var company = _database.Companies.FirstOrDefault(x => x.Id == user.CompanyId);
        if (company == null) return NotFound();
        return company.Machines;
    }

    [HttpPost]
    public async Task<IActionResult> AddMachines(MachineDTO machineRequest) {
        Machine machine = new Machine();

        //machine.Id = Guid.NewGuid();
        machine.Name = machineRequest.Name;
        machine.Company = _database.Companies.FirstOrDefault(x => x.Name == machineRequest.CompanyName);
        if (machine.Company == null) return NotFound();
        machine.CompanyId = machine.Company.Id;

        _database.Machines.Add(machine);
        await _database.SaveChangesAsync();

        return Ok();
    }
}