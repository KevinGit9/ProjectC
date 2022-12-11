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

    [HttpPost]
    public async Task<ActionResult<List<Machine>>> AddMachines(MachineDTO machineRequest) {
        Machine machine = new Machine();
        machine.Name = machineRequest.Name;

        _database.Machines.Add(machine);
        await _database.SaveChangesAsync();
        return Ok(await _database.Machines.ToListAsync());
    }
}