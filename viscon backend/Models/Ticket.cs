namespace viscon_backend.Models;

public class Ticket {
    public Guid Id { get; set; }
    public DateTime Time { get; set; }
    public User User { get; set; } = null!;
    public Guid UserId { get; set; }
    public Machine Machine { get; set; } = null!;
    public Guid MachineId { get; set; }
    public User? ClaimedBy { get; set; }
    public Guid AdminId { get; set; }
    public string? Problem { get; set; } 
}