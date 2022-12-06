namespace viscon_backend.Models;

public class Machine {
    public Guid Id { get; set; }
    public string Name { get; set; } = null!;
    public List<Problem> Problems { get; set; } = null!;
    public List<Ticket> Tickets { get; set;} = null!;
    public Company Company { get; set; } = null!;
    public Guid CompanyId { get; set; }
}