namespace viscon_backend.DTOs;

public class ProblemDTO {
    public string Description { get; set; } = string.Empty;
    public string Type { get; set; } = string.Empty;
    public string MachineName { get; set; } = string.Empty;
    public List<string>? Solutions { get; set; }
}