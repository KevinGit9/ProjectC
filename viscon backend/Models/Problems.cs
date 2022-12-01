namespace viscon_backend.Models;

public class Problems {
    public string Description { get; set; }
    public List<string> Solutions { get; set; }
    public Machine Machine { get; set; }
}