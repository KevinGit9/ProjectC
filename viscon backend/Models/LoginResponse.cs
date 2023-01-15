namespace viscon_backend.Models;

public class LoginResponse {
    public User User { get; set; } = null!;
    public string Jwt { get; set; } = string.Empty;
}