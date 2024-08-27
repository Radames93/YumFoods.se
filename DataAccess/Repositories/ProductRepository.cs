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
            //lägg till alla props
        };
        await context.Product.AddAsync(product);
        await context.SaveChangesAsync();

    }
}