using Microsoft.AspNetCore.Mvc;
using viscon_backend.Models;

namespace viscon_backend.Controllers;

[ApiController]
[Route("[controller]")]
public class ProblemsController : ControllerBase {
    private readonly Database _database;
    public ProblemsController(Database database) =>
        _database = database;

    [HttpGet]
    public ActionResult<List<Problem>> Get() {
        var problems = new List<Problem> 
        {
            new Problem {Description = "test", Type = "error message", Solutions = {"none", "hi", "test"}, Machine = new Machine(), MachineId = Guid.NewGuid()}
        };
        return problems;
    }

    [HttpGet]
    [Route ("{machineId}")]
    public ActionResult<List<Problem>> GetProblemsFromMachine(Guid machineId) {
        //if (machineId == null) return BadRequest("No machine Id recieved.");
        var machine = _database.Machines.Find(machineId);
        if (machine == null) return NotFound();
        return machine.Problems;
    }

    [HttpGet]
    [Route ("{machineId, type}")]
    public ActionResult<List<Problem>> FilterProblemsByType(Guid machineId, string type) {   
        //if (machineId == null) return BadRequest("No machine Id recieved.");
        var machine = _database.Machines.Find(machineId);
        if (machine == null) return NotFound();
        return machine.Problems.Where(x => x.Type == type).ToList();
    }

    [HttpPost]
    public async Task<IActionResult> AddProblem() {
        var problem = new Problem {
            Id = Guid.NewGuid(),
            Description = ""
        };
        if (problem == null) return BadRequest();
        await _database.Problems.AddAsync(problem);
        await _database.SaveChangesAsync();
        return Ok(problem);
    }
}