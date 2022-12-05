namespace viscon_backend.Models;

public class Machine {
    public Guid Id { get; set; }
    public string Name { get; set; }
    public List<Problems> Problems { get; set; }
    public List<Ticket> Tickets { get; set;}
    public Company Company { get; set; }
    public Guid CompanyId { get; set; }
}