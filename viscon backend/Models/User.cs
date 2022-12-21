namespace viscon_backend.Models {

    public class User {
        public Guid Id { get; set; }
        public string FirstName { get; set; } = null!;
        public string LastName { get; set; } = null!;
        public Company Company { get; set; } = null!;
        public Guid CompanyId { get; set; }
        public List<Ticket>? Tickets { get; set; } 
        public string Type { get; set; } = null!; //Admin, Key User, User
        public List<Ticket>? ClaimedTickets { get; set; }
        
    }
}