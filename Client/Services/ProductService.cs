using Shared.DTOs;
using Shared.Entities;
using Shared.Interfaces;

namespace Shared.Services;

public class ProductService : IProductRepository
{
    private readonly HttpClient _httpClient;

    ///måste addHttpClient i program.cs i frontend först 
    public ProductService(IHttpClientFactory factory)
    {
        _httpClient = factory.CreateClient("YumFoodsConnectionString");
    }


    public async Task<List<Product>> GetAllProductsAsync()
    {
        var response = await _httpClient.GetAsync("products");
        if (!response.IsSuccessStatusCode)
        {
            return (List<Product>)Enumerable.Empty<Product>();
        }

        var result = await response.Content.ReadFromJsonAsync<List<Product>>();
        return result ?? (List<Product>)Enumerable.Empty<Product>();
    }

    public async Task<Product?> GetProductByIdAsync(int id)
    {
        var response = await _httpClient.GetAsync($"products/{id}");
        if (!response.IsSuccessStatusCode)
        {
            return null;
        }

        var result = await response.Content.ReadFromJsonAsync<Product>();
        return result;
    }

    public async Task<List<Product?>> GetProductByCategoryAsync(string category)
    {
        throw new NotImplementedException();
    }

    public async Task<List<Product?>> GetProductByCuisineAsync(string cuisine)
    {
        throw new NotImplementedException();
    }

    public async Task AddProductAsync(Product newProd)
    {
        throw new NotImplementedException();
    }

    public async Task UpdateProductAsync(int existingProdId, Product updatedProd)
    {
        throw new NotImplementedException();
    }

    public async Task DeleteProductAsync(int id)
    {
        throw new NotImplementedException();
    }

    public async Task<Product?> GetProductByNameAsync(string title)
    {
        throw new NotImplementedException();
    }

    public async Task<List<Product?>> GetProductsByDietAsync(string diet)
    {
        throw new NotImplementedException();
    }
}