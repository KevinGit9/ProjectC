/*
Add packages IF using Visual Studio Code:

dotnet add package Microsoft.EntityFrameworkCore.Design
dotnet add package Npgsql.EntityFrameworkCore.PostgreSQ
dotnet tool install --global dotnet-ef 
*/

using Microsoft.EntityFrameworkCore;
using viscon_backend.Models;

namespace viscon_backend;

public class Database : DbContext {
    public DbSet<User> Users { get; set; } = null!;
    public DbSet<Machine> Machines { get; set; } = null!;
    public DbSet<Company> Companies { get; set; } = null!;
    public DbSet<CompanyMachine> CompanyMachines { get; set; } = null!;
    public DbSet<Problem> Problems { get; set; } = null!;
    public DbSet<Ticket> Tickets { get; set; } = null!;
    
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) {
        optionsBuilder.UseNpgsql("Host = localhost:5432; Username = postgres; Password = 666; Database = Viscon Support");
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder) {
        modelBuilder.Entity<User>()
            .HasOne(x => x.Company)
            .WithMany(x => x.Employees)
            .HasForeignKey(x => x.CompanyId);

        modelBuilder.Entity<Machine>()
            .HasMany(x => x.Problems)
            .WithOne(x => x.Machine)
            .HasForeignKey(x => x.MachineId);
        modelBuilder.Entity<CompanyMachine>()
            .HasOne(x => x.Company)
            .WithMany(x => x.CompanyMachines)
            .HasForeignKey(x => x.CompanyId);

        modelBuilder.Entity<Ticket>()
            .HasOne(x => x.User)
            .WithMany(x => x.Tickets)
            .HasForeignKey(x => x.UserId);
        modelBuilder.Entity<Ticket>()
            .HasOne(x => x.CompanyMachine)
            .WithMany(x => x.Tickets)
            .HasForeignKey(x => x.CompanyMachineId);
        modelBuilder.Entity<Ticket>()
            .HasOne(x => x.ClaimedBy)
            .WithMany(x => x.ClaimedTickets)
            .HasForeignKey(x => x.AdminId);
    }
}