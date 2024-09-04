using Microsoft.AspNetCore.Cors.Infrastructure;
using Shared.DTOs;
using Shared.Interfaces;
using IHostingEnvironment = Microsoft.AspNetCore.Hosting.IHostingEnvironment;

var builder = WebApplication.CreateBuilder(args);



//builder.Services.AddScoped<IProductRepository<ProductDTO>>();
//builder.Services.AddScoped<IOrderDetailRepository<OrderDetailDTO>>();
//builder.Services.AddScoped<IOrderRepository<OrderDTO>>();
//builder.Services.AddScoped<IPaymentService>();
//builder.Services.AddScoped<ICartService>();

var app = builder.Build();

//app.MapGet("/", () => "Hello World!");
void Configure(IApplicationBuilder app, IHostingEnvironment env)
{
    if (env.IsDevelopment())
    {
        app.UseDeveloperExceptionPage();
    }

    app.UseStaticFiles(); // Detta g�r att din frontend blir �tkomlig via webbl�saren.

    app.Run(async (context) =>
    {
        context.Response.ContentType = "text/html";
        await context.Response.SendFileAsync(Path.Combine(env.WebRootPath, "index.html"));
    });
}

app.UseHttpsRedirection();
app.UseDefaultFiles();
app.UseStaticFiles();


app.Run();
