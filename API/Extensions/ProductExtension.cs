using DataAccess.Entities;
using DataAccess.Repositories;
using Microsoft.AspNetCore.Builder;
using System.Net.WebSockets;

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

    private static async Task<IResult> GetAllProductsAsync(ProductRepository repo)
    {
        var prod = await repo.GetAllProductsAsync();
        return Results.Ok(prod);
    }

    private static async Task<IResult> GetProductByIdAsync(ProductRepository repo, int id)
    {
        var prod = await repo.GetProductByIdAsync(id);
        return Results.Ok(prod);
    }

    private static async Task<IResult> GetProductByCategoryAsync(ProductRepository repo, string category)
    {
        var prod = await repo.GetProductByCategoryAsync(category);
        return Results.Ok(prod);
    }

    private static async Task<IResult> GetProductByCuisineAsync(ProductRepository repo, string cuisine)
    {
        var prod = await repo.GetProductByCuisineAsync(cuisine);
        return Results.Ok(cuisine);
    }

    private static async Task<IResult> AddProductAsync(ProductRepository repo, Product newProd)
    {
      
        var exisitngProd = await repo.GetProductByIdAsync(newProd.Id);
        if(exisitngProd is not null)
        {
            return Results.BadRequest($"Product with id {exisitngProd} already exists");
        }

        await repo.AddProductAsync(newProd);
        return Results.Ok();
    }

    private static async Task<IResult> UpdateProductAsync(ProductRepository repo, int id, Product updatedProd)
    {
        var exisitngProd = await repo.GetProductByIdAsync(updatedProd.Id);
        if(exisitngProd is not null)
        {
            return Results.BadRequest($"Product with id {exisitngProd} already exists");
        }

        await repo.UpdateProductAsync(exisitngProd.Id, updatedProd);
        return Results.Ok();
    }

    private static async Task<IResult> DeleteProductAsync(ProductRepository repo, int id)
    {
        await repo.DeleteProductAsync(id);
        return Results.Ok();
    }
}