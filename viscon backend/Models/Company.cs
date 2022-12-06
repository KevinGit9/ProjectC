namespace viscon_backend.Models;

public class Company {
    public Guid Id { get; set; }
    public string Name { get; set; } = null!;
    public List<User> Employees { get; set; } = null!;
    public List<Machine> Machines { get; set; } = null!;
}