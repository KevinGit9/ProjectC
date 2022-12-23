namespace viscon_backend.DTOs;

public class TicketDTO {
    public Guid UserId {get; set; }
    public Guid MachineId { get; set; }
    public string[] Fields { get; set; } = null!;
}