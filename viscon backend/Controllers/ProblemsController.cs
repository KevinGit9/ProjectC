using Microsoft.AspNetCore.Mvc;
using viscon_backend.DTOs;
using viscon_backend.Models;

namespace viscon_backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProblemsController : ControllerBase {
    private readonly Database _database;
    public ProblemsController(Database database) =>
        _database = database;

    [HttpGet]
    public ActionResult<List<Problem>> Get() {
        return _database.Problems.ToList();
    }

    //Function that takes a machineId, returns all common Problems of the machine.
    [HttpGet ("{machineId}")]
    public ActionResult<List<Problem>> GetProblemsFromMachine(Guid machineId) {
        //if (machineId == null) return BadRequest("No machine Id recieved.");
        var machine = _database.Machines.Find(machineId);
        if (machine == null) return NotFound("Machine does not exist.");
        return _database.Problems.Where(x => x.MachineId == machine.Id).ToList();
    }
    
    //Function that takes a machineId and type, returns a filtered list of common Problems of the machine.
    [HttpGet ("{machineId}/{type}")]
    public ActionResult<List<Problem>> FilterProblemsByType(Guid machineId, string type) {   
        //if (machineId == null) return BadRequest("No machine Id recieved.");
        var machine = _database.Machines.Find(machineId);
        if (machine == null) return NotFound("Machine does not exist.");
        var problems = _database.Problems.Where(x => (x.MachineId == machine.Id) && (x.Type == type)).ToList();
        if (problems == null) return BadRequest();
        return problems;
    }

    [HttpPost]
    public async Task<IActionResult> AddProblem(ProblemDTO problemRequest) {
        Problem problem = new Problem();
        problem.Description = problemRequest.Description;
        problem.Type = problemRequest.Type;
        problem.Solutions = problemRequest.Solutions;

        Machine machine = _database.Machines.FirstOrDefault(x => x.Name == problemRequest.MachineName)!;
        if (machine == null) return NotFound("Machine not found.");
        problem.MachineId = machine.Id;

        if (problem == null) return BadRequest();
        await _database.Problems.AddAsync(problem);
        await _database.SaveChangesAsync();
        
        return Ok(problem);
    }
}