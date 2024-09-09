using Microsoft.EntityFrameworkCore;
using Shared.Entities;
using Shared.Interfaces;

namespace DataAccess.Repositories;

public class ProductRepository(YumFoodsDb context) : IProductRepository<Product> 
{

    /// <summary>
    /// Gives a list of all products.
    /// </summary>
    /// <returns>A list of all the products from the database.</returns>
    public async Task<List<Product>> GetAllProductsAsync()
    {
        return await context.Product.ToListAsync();
    }

    /// <summary>
    /// Gives a specific product with the matching id.
    /// </summary>
    /// <param name="id">The id of the product</param>
    /// <returns>The list of products from the database.</returns>
    public async Task<Product?> GetProductByIdAsync(int id)
    {
        return await context.Product.FindAsync(id);
    }

    /// <summary>
    /// Gives a list of all products with a specific category.
    /// </summary>
    /// <param name="category">The name of the category.</param>
    /// <returns>A list of products with the given category from the database.</returns>
    public async Task<List<Product?>> GetProductByCategoryAsync(string category)
    {
        return await context.Product
            .Where(p => p.Category == category)
            .ToListAsync();
        //return await context.Product.FirstOrDefaultAsync(p => p.Category == category);
    }

    /// <summary>
    /// Gives a list of all products with a specific cuisine.
    /// </summary>
    /// <param name="cuisine">The name of the cuisine.</param>
    /// <returns>A list of products with the given cuisine from the database.</returns>
    public async Task<List<Product?>> GetProductByCuisineAsync(string cuisine)
    {
        return await context.Product
            .Where(p => p.Cuisine == cuisine)
            .ToListAsync();
    }

    /// <summary>
    /// Gives a list of all products with a specific diet.
    /// </summary>
    /// <param name="diet">The name of the diet.</param>
    /// <returns>A list of products with the given diet from the database.</returns>
    public async Task<List<Product?>> GetProductsByDietAsync(string diet)
    {
        return await context.Product
            .Where(p => p.Diet == diet)
            .ToListAsync();
    }

    /// <summary>
    /// Gives the product with the specific name.
    /// </summary>
    /// <param name="name">The name of the product.</param>
    /// <returns>The product with the given name from the database.</returns>
    public async Task<Product?> GetProductByNameAsync(string name)
    {
        return await context.Product.FirstOrDefaultAsync(p => p.Title == name);
    }

    /// <summary>
    /// Adds a new object into the database.
    /// </summary>
    /// <param name="newProd">The object newProd.</param>
    public async Task AddProductAsync(Product newProd)
    {
        var product = new Product()
        {
            Title = newProd.Title,
            Category = newProd.Category,
            Description = newProd.Description,
            Diet = newProd.Diet,
            DietRef = newProd.DietRef,
            Ingredients = newProd.Ingredients,
            Price = newProd.Price,
            ImgRef = newProd.ImgRef,
            Cuisine = newProd.Cuisine
        };
        await context.Product.AddAsync(product);
        await context.SaveChangesAsync();
    }

    /// <summary>
    /// Updates an already existing product from the database.
    /// </summary>
    /// <param name="id">The id of the product.</param>
    /// <param name="updatedProd">The updated object updatedProd.</param>

    public async Task UpdateProductAsync(int id, Product updatedProd)
    {
        var oldProd = await context.Product.FindAsync(id);
        if (oldProd is null)
        {
            return;
        }

        oldProd.Id = updatedProd.Id;
        oldProd.Title = updatedProd.Title;
        oldProd.Category = updatedProd.Category;
        oldProd.Description = updatedProd.Description;
        oldProd.Diet = updatedProd.Diet;
        oldProd.DietRef = updatedProd.DietRef;
        oldProd.Cuisine = updatedProd.Cuisine;
        oldProd.Price = updatedProd.Price;
        oldProd.ImgRef = updatedProd.ImgRef;
        oldProd.Ingredients = updatedProd.Ingredients;

        await context.SaveChangesAsync();
    }

    /// <summary>
    /// Deletes a product from the database.
    /// </summary>
    /// <param name="id">The id of the product.</param>
    public async Task DeleteProductAsync(int id)
    {
        var prod = await context.Product.FirstOrDefaultAsync(p => p.Id == id);
        if (prod is null)
        {
            return;
        }

        context.Product.Remove(prod);
        await context.SaveChangesAsync();
    }
}