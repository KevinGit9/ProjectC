namespace viscon_backend.Models;

public class CompanyMachine {
    public Guid Id { get; set; }
    public string Name { get; set; } = null!;
    public Machine Machine { get; set; } = null!;
    public Guid MachineId { get; set; }
    public Company Company { get; set; } = null!;
    public Guid CompanyId { get; set; }
    public List<Ticket> Tickets { get; set;} = null!;
}