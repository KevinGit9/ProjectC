namespace viscon_backend.Models;

public class Ticket {
    public Guid Id { get; set; }
    public User User { get; set; }
    public Machine Machine { get; set; }
    public User? ClaimedBy { get; set; }
    public string Problem { get; set; }
}