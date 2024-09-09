 using Microsoft.AspNetCore.Cors.Infrastructure;
using Shared.DTOs;
using Shared.Interfaces;
using IHostingEnvironment = Microsoft.AspNetCore.Hosting.IHostingEnvironment;

var builder = WebApplication.CreateBuilder(args);

var app = builder.Build();



//app.Run(async (context) =>
//{
//    context.Response.ContentType = "text/html";
//    await context.Response.SendFileAsync(Path.Combine(WebRootPath, "index.html"));
//});


app.UseHttpsRedirection();
app.UseDefaultFiles();
app.UseStaticFiles();



app.Run();
