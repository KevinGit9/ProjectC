namespace viscon_backend.Models;

public class Company {
    public Guid Id { get; set; }
    public string Name { get; set; }
    public List<User> Employees { get; set; }
}