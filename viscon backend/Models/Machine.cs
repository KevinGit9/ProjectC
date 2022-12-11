namespace viscon_backend.Models;

public class Machine {
    public Guid Id { get; set; }
    public string Name { get; set; } = null!;
    public List<Problem>? Problems { get; set; }
    public List<CompanyMachine> CompanyMachines { get; set; } = null!;
}