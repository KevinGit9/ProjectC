using System.Globalization;
using Microsoft.AspNetCore.Authorization;
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


    //Function that returns all Tickets in the database.
    [HttpGet, Authorize(Roles = "admin")]
    public ActionResult<List<Ticket>> Get() {
        return _database.Tickets.ToList();
    }

    //Function that uses an adminId to find all Tickets claimed by the Admin.
    [HttpGet ("{adminId}"), Authorize(Roles = "admin")]
    public ActionResult<List<Ticket>> GetTicketsByAdmin(Guid adminId) {
        var admin = _database.Users.FirstOrDefault(x => x.Id == adminId);
        if (admin == null) return NotFound("Admin does not exist.");
        return _database.Tickets.Where(x => (x.AdminId == admin.Id) && (x.Completed == false)).ToList();
    }

    //Function that uses an userId to find all Tickets created by the User that have not been Completed.
    [HttpGet ("useropen{userId}"), Authorize(Roles = "admin, key user, user")]
    public ActionResult<List<Ticket>> GetUserTickets(Guid userId) {
        var user = _database.Users.FirstOrDefault(x => x.Id == userId);
        if (user == null) return NotFound("User does not exist.");
        return _database.Tickets.Where(x => (x.UserId == userId) && (x.Completed == false)).ToList();
    }

    //Function that uses an userId to find all Tickets created by the User that have not been Completed.
    [HttpGet ("userclosed{userId}"), Authorize(Roles = "admin, key user, user")]
    public ActionResult<List<Ticket>> GetClosedUserTickets(Guid userId) {
        var user = _database.Users.FirstOrDefault(x => x.Id == userId);
        if (user == null) return NotFound("User does not exist.");
        return _database.Tickets.Where(x => (x.UserId == userId) && (x.Completed == true)).ToList();
    }

    //Function that returns all Unclaimed Tickets.
    [HttpGet ("unclaimed"), Authorize(Roles = "admin")]
    public ActionResult<List<Ticket>> GetUnclaimedTickets() {
        return _database.Tickets.Where(x => (x.AdminId == null) && (x.Completed == false)).ToList();
    }

    //Function that returns all Closed Tickets.
    [HttpGet ("closed"), Authorize(Roles = "admin")]
    public ActionResult<List<Ticket>> GetClosedTickets() {
        return _database.Tickets.Where(x => x.Completed == true).ToList();
    }

    //Function that uses an ticketId to find the corresponding Ticket.
    [HttpGet ("ticketInfo{ticketId}"), Authorize(Roles = "admin, key user, user")]
    public ActionResult<Ticket> GetTicketInfo(Guid ticketId) {
        var ticket = _database.Tickets.FirstOrDefault(x => x.Id == ticketId);
        if (ticket == null) return NotFound("Ticket does not exist.");
        return Ok(ticket);
    }

    //Function used to create a Ticket.
    [HttpPost, Authorize(Roles = "admin, key user")]
    public async Task<ActionResult<List<Ticket>>> AddTicket(TicketDTO ticketRequest) {
        Ticket ticket = new Ticket();
        var user = _database.Users.FirstOrDefault(x => x.Id == ticketRequest.UserId);
        if (user == null) return NotFound("User does not exist.");
        ticket.UserId = user.Id;

        var machine = _database.CompanyMachines.FirstOrDefault(x => x.Id == ticketRequest.MachineId);
        if (machine == null) return NotFound("Machine does not exist.");
        ticket.CompanyMachineId = machine.Id;

        ticket.Fields = ticketRequest.Fields;
        ticket.Date = DateTime.Now.ToString("dd/MM/yyyy HH:mm");
        ticket.Completed = false;
        
        _database.Tickets.Add(ticket);
        await _database.SaveChangesAsync();
        return Ok(ticket);
    }

    //Function that uses a ticketId and adminId to assign the Ticket to the Admin.
    [HttpPut ("{ticketId}/{adminId}"), Authorize(Roles = "admin")]
    public async Task<ActionResult<Ticket>> ClaimTicket(Guid ticketId, Guid adminId) {
        var ticket = await _database.Tickets.FirstOrDefaultAsync(x => x.Id == ticketId);
        if (ticket == null) return NotFound("Ticket does not exist.");
        ticket.AdminId = adminId;

        await _database.SaveChangesAsync();
        return Ok(ticket);
    }

    //Function that uses a ticketId and updates it's completion state to 'true'.
    [HttpPut ("{ticketId}"), Authorize(Roles = "admin")]
    public async Task<ActionResult<Ticket>> CloseTicket(Guid ticketId) {
        var ticket = await _database.Tickets.FirstOrDefaultAsync(x => x.Id == ticketId);
        if (ticket == null) return NotFound("Ticket does not exist.");
        ticket.Completed = true;

        await _database.SaveChangesAsync();
        return Ok(ticket);
    }

    //Function that uses a ticketId and adds a reply to the Reply field.
    [HttpPut ("reply{ticketId}/{reply}"), Authorize(Roles = "admin")]
    public async Task<ActionResult<Ticket>> ReplyToTicket(Guid ticketId, string reply) {
        var ticket = await _database.Tickets.FirstOrDefaultAsync(x => x.Id == ticketId);
        if (ticket == null) return NotFound("Ticket does not exist.");
        ticket.Reply = reply;

        await _database.SaveChangesAsync();
        return Ok(ticket);
    }

}   