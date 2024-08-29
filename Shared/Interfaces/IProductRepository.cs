using Shared.Entities;

namespace Shared.Interfaces;

public interface IProductRepository
{
    Task<List<Product>> GetAllProductsAsync();
    Task<Product?> GetProductByIdAsync(int id);
    Task<List<Product?>> GetProductByCategoryAsync(string category);
    Task<List<Product?>> GetProductByCuisineAsync(string cuisine);
    Task AddProductAsync(Product newProd);
    Task UpdateProductAsync(int existingProdId, Product updatedProd);
    Task DeleteProductAsync(int id);
    Task<Product?> GetProductByNameAsync(string title);
    Task<List<Product?>> GetProductsByDietAsync(string diet);
}