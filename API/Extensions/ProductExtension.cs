using DataAccess.Repositories;
using Microsoft.AspNetCore.Builder;
using System.Net.WebSockets;
using Shared.Entities;
using Shared.Interfaces;

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

    private static async Task<IResult> GetAllProductsAsync(IProductRepository repo)
    {
        var prod = await repo.GetAllProductsAsync();
        return Results.Ok(prod);
    }

    private static async Task<IResult> GetProductByIdAsync(IProductRepository repo, int id)
    {
        var prod = await repo.GetProductByIdAsync(id);
        return Results.Ok(prod);
    }

    private static async Task<IResult> GetProductByCategoryAsync(IProductRepository repo, string category)
    {
        var prod = await repo.GetProductByCategoryAsync(category);
        return Results.Ok(prod);
    }

    private static async Task<IResult> GetProductByCuisineAsync(IProductRepository repo, string cuisine)
    {
        var prod = await repo.GetProductByCuisineAsync(cuisine);
        return Results.Ok(cuisine);
    }

    private static async Task<IResult> AddProductAsync(IProductRepository repo, Product newProd)
    {
      
        var exisitngProd = await repo.GetProductByIdAsync(newProd.Id);
        if(exisitngProd is not null)
        {
            return Results.BadRequest($"Product with id {exisitngProd} already exists");
        }

        await repo.AddProductAsync(newProd);
        return Results.Ok();
    }

    private static async Task<IResult> UpdateProductAsync(IProductRepository repo, int id, Product updatedProd)
    {
        var exisitngProd = await repo.GetProductByIdAsync(updatedProd.Id);
        if(exisitngProd is not null)
        {
            return Results.BadRequest($"Product with id {exisitngProd} already exists");
        }

        await repo.UpdateProductAsync(exisitngProd.Id, updatedProd);
        return Results.Ok();
    }

    private static async Task<IResult> DeleteProductAsync(IProductRepository repo, int id)
    {
        await repo.DeleteProductAsync(id);
        return Results.Ok();
    }
}