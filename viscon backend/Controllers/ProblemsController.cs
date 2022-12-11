using Microsoft.AspNetCore.Mvc;
using viscon_backend.DTOs;
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
        return _database.Problems.ToList();
    }

    [HttpGet ("{machineId}")]
    public ActionResult<List<Problem>> GetProblemsFromMachine(Guid machineId) {
        //if (machineId == null) return BadRequest("No machine Id recieved.");
        var machine = _database.Machines.Find(machineId);
        if (machine == null) return NotFound();
        return machine.Problems;
    }
    /*
    [HttpGet ("{machineId}/{type}")]
    public ActionResult<List<Problem>> FilterProblemsByType(Guid machineId, string type) {   
        //if (machineId == null) return BadRequest("No machine Id recieved.");
        var machine = _database.Machines.Find(machineId);
        if (machine == null) return NotFound();
        return machine.Problems!.Where(x => x.Type == type).ToList();
    }*/

    [HttpPost]
    public async Task<IActionResult> AddProblem(ProblemDTO problemRequest) {
        Problem problem = new Problem();
        problem.Description = problemRequest.Description;
        problem.Type = problemRequest.Type;
        problem.Solutions = problemRequest.Solutions;

        if (problem == null) return BadRequest();
        await _database.Problems.AddAsync(problem);
        await _database.SaveChangesAsync();
        
        return Ok(problem);
    }
}