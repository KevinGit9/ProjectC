namespace viscon_backend.Models;

public class Ticket {
    public Guid Id { get; set; }
    public DateTime Time { get; set; }
    public User User { get; set; } = null!;
    public Guid UserId { get; set; }
    public CompanyMachine CompanyMachine { get; set; } = null!;
    public Guid CompanyMachineId { get; set; }
    public User? ClaimedBy { get; set; }
    public Guid AdminId { get; set; }
    public string? Problem { get; set; } 
    public bool Completed = false;
}