namespace viscon_backend.Models;

public class Problem {
    public string Description { get; set; } = null!;
    public string Type { get; set; } = null!; // Used to filter Problems
    public List<string> Solutions { get; set; } = null!;
    public Machine Machine { get; set; } = null!;
    public Guid MachineId { get; set; }
}