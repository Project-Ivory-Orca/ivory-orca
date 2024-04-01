using Microsoft.EntityFrameworkCore;
using ivory.orca.Domain.Catalog;
using System.Data.Common;

namespace ivory.orca.Data;

public static class DbInitilizer
{
    public static void Initialize(ModelBuilder builder)
    {
        builder.Entity<Item>().HasData(
            new Item(1, "Item 1", "Description 1", "Brand 1", 100.00m),
            new Item(2, "Item 2", "Description 2", "Brand 2", 200.00m), 
            new Item(3, "Item 3", "Description 3", "Brand 3", 300.00m), 
            new Item(4, "Item 4", "Description 4", "Brand 4", 400.00m), 
            new Item(5, "Item 5", "Description 5", "Brand 5", 500.00m)
           
          
        );
    }
}