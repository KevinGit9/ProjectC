namespace viscon_backend.Models;

public class Company {
    public Guid Id { get; set; }
    public string Name { get; set; } = null!;
    public List<User> Employees { get; set; } = null!;
    public List<CompanyMachine> CompanyMachines { get; set; } = null!;
}