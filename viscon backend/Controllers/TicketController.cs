using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using viscon_backend.DTOs;
using viscon_backend.Models;

namespace viscon_backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TicketController : ControllerBase {
    private readonly Database _database;
    public TicketController(Database database) =>
        _database = database;

    [HttpGet]
    public ActionResult<List<Ticket>> Get() {
        return _database.Tickets.ToList();
    }

    //Function that uses an adminId to find all Tickets claimed by the Admin.
    [HttpGet ("{adminId}")]
    public ActionResult<List<Ticket>> GetTicketsByAdmin(Guid adminId) {
        var admin = _database.Users.FirstOrDefault(x => x.Id == adminId);
        if (admin == null) return NotFound("Admin not found.");

        return _database.Tickets.Where(x => x.AdminId == admin.Id).ToList();
    }
    
    //Function used to create a Ticket.
    [HttpPost]
    public async Task<ActionResult<List<Ticket>>> AddTicket(TicketDTO ticketRequest) {
        Ticket ticket = new Ticket();
        var user = _database.Users.FirstOrDefault(x => x.Id == ticketRequest.UserId);
        if (user == null) return NotFound("User does not exist.");
        ticket.UserId = user.Id;

        var machine = _database.CompanyMachines.FirstOrDefault(x => x.Id == ticketRequest.MachineId);
        if (machine == null) return NotFound("Machine not found.");
        ticket.CompanyMachineId = machine.Id;

        ticket.Fields = ticketRequest.Fields;

        _database.Tickets.Add(ticket);
        await _database.SaveChangesAsync();
        return Ok(await _database.Tickets.ToListAsync());
    }

    //Test function to create a Ticket that has been claimed by an Admin.
    [HttpPost ("{adminId}")]
    public async Task<ActionResult<List<Ticket>>> AddTicket(TicketDTO ticketRequest, Guid adminId) {
        Ticket ticket = new Ticket();
        var user = _database.Users.FirstOrDefault(x => x.Id == ticketRequest.UserId);
        if (user == null) return NotFound("User does not exist.");
        ticket.UserId = user.Id;

        var machine = _database.CompanyMachines.FirstOrDefault(x => x.Id == ticketRequest.MachineId);
        if (machine == null) return NotFound("Machine not found.");
        ticket.CompanyMachineId = machine.Id;

        var admin = _database.Users.FirstOrDefault(x => x.Id == adminId);
        if (admin == null) return NotFound("Admin not found.");
        ticket.AdminId = admin.Id;

        ticket.Fields = ticketRequest.Fields;

        _database.Tickets.Add(ticket);
        await _database.SaveChangesAsync();
        return Ok(await _database.Tickets.ToListAsync());
    }



}   