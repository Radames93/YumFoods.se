using Shared.Entities;
using Shared.Interfaces;

namespace API.Extensions;

public static class ProductExtension
{
    /// <summary>
    /// Maps the API endpoints for Product operations.
    /// Routes for fetching, adding, updating, retrieving orders by different parameters. 
    /// </summary>
    public static IEndpointRouteBuilder MapProductEndpoints(this IEndpointRouteBuilder app)
    {
        var group = app.MapGroup("/products");

        group.MapGet("/", GetAllProductsAsync);
        group.MapGet("/{id}", GetProductByIdAsync);
        group.MapGet("/title/{title}", GetProductByNameAsync);
        group.MapGet("/category/{category}", GetProductByCategoryAsync); //category
        group.MapGet("/cuisine/{cuisine}", GetProductByCuisineAsync); //cuisine
        group.MapGet("/diet/{diet}", GetProductsByDietAsync);
        
        group.MapPost("/", AddProductAsync);

        group.MapPut("/{id}", UpdateProductAsync);

        group.MapDelete("/{id}", DeleteProductAsync);
        return app;
    }

    /// <summary>
    /// Get Products by its diet from the database
    /// </summary>
    /// <param name="repo">An instance of class ProductRepository that provides methods for interacting with object in the database. </param>
    /// <param name="diet">string Diet of the object in the database</param>
    /// <returns>A success code when the object with the parameter is fetched. </returns>
    private static async Task<IResult> GetProductsByDietAsync(IProductRepository<Product> repo, string diet)
    {
        var prod = await repo.GetProductsByDietAsync(diet);
        return Results.Ok(prod);
    }

    /// <summary>
    /// Get Products by its Title/Name from the database
    /// </summary>
    /// <param name="repo">An instance of class ProductRepository that provides methods for interacting with object in the database. </param>
    /// <param name="title">string Title/name of the object from the database</param>
    /// <returns>A success code when the object with the parameter is fetched. </returns>
    private static async Task<IResult> GetProductByNameAsync(IProductRepository<Product> repo, string title)
    {
        var prod = await repo.GetProductByNameAsync(title);
        return Results.Ok(prod);
    }

    /// <summary>
    /// Get all the Products that is in the database
    /// </summary>
    /// <param name="repo">An instance of class ProductRepository that provides methods for interacting with products in the database. </param>
    /// <returns>A success code when the objects are successfully fetched. </returns>
    private static async Task<IResult> GetAllProductsAsync(IProductRepository<Product> repo)
    {
        var prod = await repo.GetAllProductsAsync();
        return Results.Ok(prod);
    }

    /// <summary>
    /// Get Products by its ID number from the database
    /// </summary>
    /// <param name="repo">An instance of class ProductRepository that provides methods for interacting with object in the database. </param>
    /// <param name="id">int ID of the object from the database</param>
    /// <returns>A success code when the object with the parameter is fetched. </returns>
    private static async Task<IResult> GetProductByIdAsync(IProductRepository<Product> repo, int id)
    {
        var prod = await repo.GetProductByIdAsync(id);
        return Results.Ok(prod);
    }

    /// <summary>
    /// Get Products by its category from the database
    /// </summary>
    /// <param name="repo">An instance of class ProductRepository that provides methods for interacting with object in the database. </param>
    /// <param name="category">string Category of the object from the database</param>
    /// <returns>A success code when the object with the parameter is fetched. </returns>
    private static async Task<IResult> GetProductByCategoryAsync(IProductRepository<Product> repo, string category)
    {
        var prod = await repo.GetProductByCategoryAsync(category);
        return Results.Ok(prod);
    }

    /// <summary>
    /// Get Products by type Cuisine from the database
    /// </summary>
    /// <param name="repo">An instance of class ProductRepository that provides methods for interacting with object in the database. </param>
    /// <param name="cuisine">string cuisine of the object from the database</param>
    /// <returns>A success code when the object with the parameter is fetched. </returns>
    private static async Task<IResult> GetProductByCuisineAsync(IProductRepository<Product> repo, string cuisine)
    {
        var prod = await repo.GetProductByCuisineAsync(cuisine);
        return Results.Ok(prod);
    }

    /// <summary>
    /// Create a new Product to the database. Validates that the new product does not already exist. 
    /// </summary>
    /// <param name="repo">An instance of class ProductRepository that provides methods for interacting with object in the database. </param>
    /// <param name="newProd">Object to be added to the database. </param>
    /// <returns>Bad request if object added already exist or a success code if the object was added to the database successfully.</returns>
    private static async Task<IResult> AddProductAsync(IProductRepository<Product> repo, Product newProd)
    {
      
        var existingProd = await repo.GetProductByIdAsync(newProd.Id);
        if(existingProd is not null)
        {
            return Results.BadRequest($"Product with product number {existingProd.Id} already exist");
        }

        await repo.AddProductAsync(newProd);
        return Results.Ok();
    }

    /// <summary>
    /// Update a Product from the database. Validates that the product exists. 
    /// </summary>
    /// <param name="repo">An instance of class ProductRepository that provides methods for interacting with object in the database. </param>
    /// <param name="id">int of object to be found in the database. </param>
    /// <param name="updatedProd">Object to be updated to the database. </param>
    /// <returns>Bad request if object does not already exist or a success code if the object was updated to the database successfully.</returns>
    private static async Task<IResult> UpdateProductAsync(IProductRepository<Product> repo, int id, Product updatedProd)
    {
        var existingProd = await repo.GetProductByIdAsync(id);
        if(existingProd is null)
        {
            return Results.BadRequest($"Product with product number {id} does not exist");
        }

        await repo.UpdateProductAsync(id, updatedProd);
        return Results.Ok();
    }

    /// <summary>
    /// Deletes a product from the database
    /// </summary>
    /// <param name="repo">An instance of class ProductRepository that provides methods for interacting with objects in the database. </param>
    /// <param name="id">Object with id number to be deleted </param>
    /// <returns>Success code if the object was deleted from the database successfully.</returns>
    private static async Task<IResult> DeleteProductAsync(IProductRepository<Product> repo, int id)
    {
        await repo.DeleteProductAsync(id);
        return Results.Ok();
    }
}