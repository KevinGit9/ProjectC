using Microsoft.EntityFrameworkCore;

namespace viscon_backend;

class MyContext : DbContext {

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) {
        optionsBuilder.UseNpgsql()
    }
}