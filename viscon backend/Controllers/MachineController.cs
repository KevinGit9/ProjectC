using Microsoft.AspNetCore.Mvc;
using viscon_backend.Models;

namespace viscon_backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class MachineController : ControllerBase {
    private readonly Database _database;
    public MachineController(Database database) =>
        _database = database;

    [HttpGet ("{userId}")]
    public ActionResult<List<Machine>> GetMyMachines(Guid userId) {
        var user = _database.Users.Find(userId);
        if (user == null) return NotFound();
        var company = _database.Companies.FirstOrDefault(x => x.Id == user.CompanyId);
        if (company == null) return NotFound();
        return company.Machines;
    }

    [HttpPost]
    public async Task<IActionResult> AddMachines() {
        for (int i = 0; i < 5; i++) {
            var machine = new Machine();
            machine.Id = Guid.NewGuid();
            machine.Name = Console.ReadLine();
            await _database.Machines.AddAsync(machine);
        }
        await _database.SaveChangesAsync();
        return Ok();
    }
}