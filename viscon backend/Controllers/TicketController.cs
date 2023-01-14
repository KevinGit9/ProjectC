using System.Globalization;
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


    //Function that uses an adminId to find all Tickets claimed by the Admin.
    [HttpGet ("{adminId}")]
    public ActionResult<List<Ticket>> GetTicketsByAdmin(Guid adminId) {
        var admin = _database.Users.FirstOrDefault(x => x.Id == adminId);
        if (admin == null) return NotFound("Admin does not exist.");
        return _database.Tickets.Where(x => (x.AdminId == admin.Id) && (x.Completed == false)).ToList();
    }

    //Function that returns all Unclaimed Tickets.
    [HttpGet ("unclaimed")]
    public ActionResult<List<Ticket>> GetUnclaimedTickets() {
        return _database.Tickets.Where(x => (x.AdminId == null) && (x.Completed == false)).ToList();
    }

    //Function that returns all Closed Tickets.
    [HttpGet ("closed")]
    public ActionResult<List<Ticket>> GetClosedTickets() {
        return _database.Tickets.Where(x => x.Completed == true).ToList();
    }

    //Function that uses an ticketId to find the corresponding Ticket.
    [HttpGet ("ticketInfo{ticketId}")]
    public ActionResult<Ticket> GetTicketInfo(Guid ticketId) {
        var ticket = _database.Tickets.FirstOrDefault(x => x.Id == ticketId);
        if (ticket == null) return NotFound("Ticket does not exist.");
        return Ok(ticket);
    }

    //Function used to create a Ticket.
    [HttpPost]
    public async Task<ActionResult<List<Ticket>>> AddTicket(TicketDTO ticketRequest) {
        Ticket ticket = new Ticket();
        var user = _database.Users.FirstOrDefault(x => x.Id == ticketRequest.UserId);
        if (user == null) return NotFound("User does not exist.");
        ticket.UserId = user.Id;

        var machine = _database.CompanyMachines.FirstOrDefault(x => x.Id == ticketRequest.MachineId);
        if (machine == null) return NotFound("Machine does not exist.");
        ticket.CompanyMachineId = machine.Id;

        ticket.Fields = ticketRequest.Fields;
        ticket.Date = DateTime.Now.ToString("MM/dd/yyyy HH:mm");
        ticket.Completed = false;
        
        _database.Tickets.Add(ticket);
        await _database.SaveChangesAsync();
        return Ok(ticket);
    }

    //Function that uses a ticketId and adminId to assign the Ticket to the Admin.
    [HttpPut ("{ticketId}/{adminId}")]
    public async Task<ActionResult<Ticket>> ClaimTicket(Guid ticketId, Guid adminId) {
        var ticket = await _database.Tickets.FirstOrDefaultAsync(x => x.Id == ticketId);
        if (ticket == null) return NotFound("Ticket does not exist.");
        ticket.AdminId = adminId;

        await _database.SaveChangesAsync();
        return Ok(ticket);
    }

    //Function that uses a ticketId and updates it's completion state to 'true'.
    [HttpPut ("{ticketId}")]
    public async Task<ActionResult<Ticket>> CloseTicket(Guid ticketId) {
        var ticket = await _database.Tickets.FirstOrDefaultAsync(x => x.Id == ticketId);
        if (ticket == null) return NotFound("Ticket does not exist.");
        ticket.Completed = true;

        await _database.SaveChangesAsync();
        return Ok(ticket);
    }

}   