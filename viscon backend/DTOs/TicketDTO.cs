namespace viscon_backend.DTOs;

public class TicketDTO {
    public string User {get; set; } = string.Empty;
    public Guid MachineId { get; set; }
    public string[] Fields { get; set; } = null!;
}