using Microsoft.EntityFrameworkCore;
using ivory.orca.Domain.Catalog;

namespace ivory.orca.Data;

public class StoreContext : DbContext
{
    public StoreContext(DbContextOptions<StoreContext> options) : base(options)
    {
    }

    public DbSet<Item> Items { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);
        DbInitilizer.Initialize(builder);
    }
}