namespace Shared.Interfaces;

public interface IProductRepository<T> where T : class
{
    Task<List<T>> GetAllProductsAsync();
    Task<T?> GetProductByIdAsync(int id);
    Task<List<T>> GetProductByCategoryAsync(string category);
    Task<List<T>> GetProductByCuisineAsync(string cuisine);
    Task AddProductAsync(T newProd);
    Task UpdateProductAsync(int existingProdId, T updatedProd);
    Task DeleteProductAsync(int id);
    Task<T?> GetProductByNameAsync(string title);
    Task<List<T>> GetProductsByDietAsync(string diet);
}