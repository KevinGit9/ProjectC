namespace viscon_backend.Models;

public class Problem {
    public Guid Id { get; set; }
    public string? Description { get; set; }
    public string? Type { get; set; } // Used to filter Problems
    public List<string>? Solutions { get; set; }
    public Machine? Machine { get; set; }
    public Guid MachineId { get; set; }
}