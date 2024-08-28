using DataAccess.Entities;
using Microsoft.EntityFrameworkCore;

namespace DataAccess.Repositories;

public class ProductRepository(YumFoodsDb context)
{
    public async Task<List<Product>> GetAllProductsAsync()
    {
        return await context.Product.ToListAsync();
    }

    public async Task<Product?> GetProductByIdAsync(int id)
    {
        return await context.Product.FindAsync(id);
    }

    public async Task<Product?> GetProductByCategoryAsync(string category)
    {
        return await context.Product.FirstOrDefaultAsync(p => p.Category == category);
    }

    public async Task<Product?> GetProductByCuisineAsync(string cuisine)
    {
        return await context.Product.FirstOrDefaultAsync(p => p.Cuisine == cuisine);
    }

    //osäker
    public async Task<Product?> GetProductByNameAsync(string name)
    {
        return await context.Product.FirstOrDefaultAsync(p => p.Title == name);
    }

    public async Task AddProductAsync(Product newProd)
    {
        var product = new Product()
        {
            Title = newProd.Title,
            Category = newProd.Category,
            Description = newProd.Description,
            Diet = newProd.Diet,
            Ingredients = newProd.Ingredients,
            Price = newProd.Price,
            ImgRef = newProd.ImgRef,
            Cuisine = newProd.Cuisine
        };
        await context.Product.AddAsync(product);
        await context.SaveChangesAsync();
    }

    public async Task UpdateProductAsync(int id, Product updatedProd)
    {
        var oldProd = await context.Product.FindAsync(id);
        if (oldProd is null)
        {
            return;
        }

        oldProd.Title = updatedProd.Title;
        oldProd.Category = updatedProd.Category;
        oldProd.Description = updatedProd.Description;
        oldProd.Diet = updatedProd.Diet;
        oldProd.Cuisine = updatedProd.Cuisine;
        oldProd.Price = updatedProd.Price;
        oldProd.ImgRef = updatedProd.ImgRef;
        oldProd.Ingredients = updatedProd.Ingredients;

        await context.SaveChangesAsync();
    }

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