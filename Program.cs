var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

app.UseStaticFiles(); // Serve static files from the "wwwroot" directory
app.UseRouting();
app.UseEndpoints(endpoints =>
{
    endpoints.MapFallbackToFile("index.html"); // Serve "index.html" for any unmatched request
});

app.Run();

