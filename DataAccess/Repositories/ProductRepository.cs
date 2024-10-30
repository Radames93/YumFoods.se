using Microsoft.EntityFrameworkCore;
using Shared.Entities;
using Shared.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DataAccess.Repositories
{
    public class ProductRepository : IProductRepository<Product>
    {
        private readonly YumFoodsDb _context;

        public ProductRepository(YumFoodsDb context)
        {
            _context = context;
        }

        public async Task<List<Product>> GetAllProductsAsync()
        {
            return await _context.Product.ToListAsync();
        }

        public async Task<Product?> GetProductByIdAsync(int id)
        {
            return await _context.Product.FindAsync(id);
        }

        public async Task<List<Product>> GetProductByCategoryAsync(string category)
        {
            return await _context.Product
                .Where(p => p.Category == category)
                .ToListAsync();
        }

        public async Task<List<Product>> GetProductByCuisineAsync(string cuisine)
        {
            return await _context.Product
                .Where(p => p.Cuisine == cuisine)
                .ToListAsync();
        }

        public async Task AddProductAsync(Product newProd)
        {
            await _context.Product.AddAsync(newProd);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateProductAsync(int existingProdId, Product updatedProd)
        {
            var oldProd = await _context.Product.FindAsync(existingProdId);
            if (oldProd is null)
            {
                return;
            }

            oldProd.Title = updatedProd.Title;
            oldProd.Category = updatedProd.Category;
            oldProd.Description = updatedProd.Description;
            oldProd.Diet = updatedProd.Diet;
            oldProd.DietRef = updatedProd.DietRef;
            oldProd.Cuisine = updatedProd.Cuisine;
            oldProd.Price = updatedProd.Price;
            oldProd.ImgRef = updatedProd.ImgRef;
            oldProd.Ingredients = updatedProd.Ingredients;

            await _context.SaveChangesAsync();
        }

        public async Task DeleteProductAsync(int id)
        {
            var product = await _context.Product.FindAsync(id);
            if (product != null)
            {
                _context.Product.Remove(product);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<Product?> GetProductByNameAsync(string title)
        {
            return await _context.Product.FirstOrDefaultAsync(p => p.Title == title);
        }

        public async Task<List<Product>> GetProductsByDietAsync(string diet)
        {
            return await _context.Product
                .Where(p => p.Diet == diet)
                .ToListAsync();
        }

        public async Task<List<Product>> GetProductsByIdsAsync(List<int> productIds)
        {
            return await _context.Product
                .Where(p => productIds.Contains(p.Id))
                .ToListAsync();
        }
    }
}
