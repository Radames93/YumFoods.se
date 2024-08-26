using DataAccess.Entities;
using DataAccess.Repositories;
using Microsoft.AspNetCore.Builder;

namespace API.Extensions;

public static class ProductExtension
{
    public static IEndpointRouteBuilder MapProductEndpoints(this IEndpointRouteBuilder app)
    {
        var group = app.MapGroup("/products");

        group.MapGet("/", GetAllProductsAsync);
        group.MapGet("/{id}", GetProductByIdAsync);
        group.MapGet("/category", GetProductByCategoryAsync); //category
        group.MapGet("/cuisine", GetProductByCuisineAsync); //cuisine
        
        group.MapPost("/", AddProductAsync);

        group.MapPut("/", UpdateProductAsync);

        group.MapDelete("/{id}", DeleteProductAsync);
        return app;
    }

    private static Task<List<Product>> GetAllProductsAsync(ProductRepository repo)
    {
        return repo.GetAllProductsAsync();
    }

    private static async Task GetProductByIdAsync(HttpContext context)
    {
        throw new NotImplementedException();
    }

    private static async Task GetProductByCategoryAsync(HttpContext context)
    {
        throw new NotImplementedException();
    }

    private static async Task GetProductByCuisineAsync(HttpContext context)
    {
        throw new NotImplementedException();
    }

    private static async Task AddProductAsync(HttpContext context)
    {
        throw new NotImplementedException();
    }

    private static async Task UpdateProductAsync(HttpContext context)
    {
        throw new NotImplementedException();
    }

    private static async Task DeleteProductAsync(HttpContext context)
    {
        throw new NotImplementedException();
    }
}