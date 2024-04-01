using Microsoft.OpenApi.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Sqlite;
using ivory.orca.Data;

var builder = WebApplication.CreateBuilder(args);
 
builder.Services.AddControllers();
builder.Services.AddDbContext<StoreContext>(options => 
{
    options.UseSqlite("Data Source=../store.db", 
    m => m.MigrationsAssembly("ivory.orca.Api"));
} );

builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "Ivory.Orca.API", Version = "v1"});
});

var app = builder.Build(); 

app.UseSwagger();
app.UseSwaggerUI(c => 
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "Ivory Orca API v1");

});

app.MapControllers();

app.Run();
