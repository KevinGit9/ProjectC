using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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

    //Function that takes a companyMachineId, returns the Machine type of the Company Machine.
    [HttpGet ("{companyMachineId}")]
    public ActionResult<Machine> GetMachineFromMachineId(Guid companyMachineId) {
        var companyMachine = _database.CompanyMachines.FirstOrDefault(x => x.Id == companyMachineId);
        if (companyMachine == null) return NotFound("This Company Machine does not exist.");
        var machine = _database.Machines.FirstOrDefault(x => x.Id == companyMachine.MachineId);
        if (machine == null) return NotFound("This Machine does not exist.");
        return machine;
    }

    [HttpPost]
    public async Task<ActionResult<List<Machine>>> AddMachine(MachineDTO machineRequest) {
        Machine machine = new Machine();
        machine.Name = machineRequest.Name;

        _database.Machines.Add(machine);
        await _database.SaveChangesAsync();
        return Ok(await _database.Machines.ToListAsync());
    }
}