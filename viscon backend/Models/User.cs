namespace viscon_backend.Models {

    public class User {
        public Guid Id { get; set; }
        public string? Name { get; set; } 
        public string? LastName { get; set; }
        public Company? Company { get; set; }
        public Guid CompanyId { get; set; }
        public List<Ticket>? Tickets { get; set; } 
        public string? Type { get; set; } //Admin, Key User, User
        public List<Ticket>? ClaimedTickets { get; set; }
        
    }
}