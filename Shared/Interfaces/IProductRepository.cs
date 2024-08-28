using Shared.Entities;

namespace Shared.Interfaces;

public interface IProductRepository
{
    Task<List<Product>> GetAllProductsAsync();
    Task<Product?> GetProductByIdAsync(int id);
    Task<Product?> GetProductByCategoryAsync(string category);
    Task<Product> GetProductByCuisineAsync(string cuisine);
    Task AddProductAsync(Product newProd);
    Task UpdateProductAsync(int exisitngProdId, Product updatedProd);
    Task DeleteProductAsync(int id);
}