﻿using Shared.DTOs;
using Shared.Interfaces;

namespace Client.Services;

public class ProductService : IProductRepository<ProductDTO>
{
    private readonly HttpClient _httpClient;

    public ProductService(IHttpClientFactory factory)
    {
        _httpClient = factory.CreateClient("YumFoodsConnectionString");
    }

    public async Task<List<ProductDTO>> GetAllProductsAsync()
    {
        var response = await _httpClient.GetAsync("products");
        if (!response.IsSuccessStatusCode)
        {
            return new List<ProductDTO>();
        }

        var result = await response.Content.ReadFromJsonAsync<List<ProductDTO>>();
        return result ?? new List<ProductDTO>();
    }

    async Task<ProductDTO?> IProductRepository<ProductDTO>.GetProductByIdAsync(int id)
    {
        var response = await _httpClient.GetAsync($"products/{id}");
        if (!response.IsSuccessStatusCode)
        {
            return null;
        }

        var result = await response.Content.ReadFromJsonAsync<ProductDTO>();
        return result;
    }

    async Task<List<ProductDTO>> IProductRepository<ProductDTO>.GetProductByCategoryAsync(string category)
    {
        var response = await _httpClient.GetAsync($"products/category/{category}");
        if (!response.IsSuccessStatusCode)
        {
            return new List<ProductDTO>();
        }

        var result = await response.Content.ReadFromJsonAsync<List<ProductDTO>>();
        return result ?? new List<ProductDTO>();
    }

    async Task<List<ProductDTO>> IProductRepository<ProductDTO>.GetProductByCuisineAsync(string cuisine)
    {
        var response = await _httpClient.GetAsync($"products/cuisine/{cuisine}");
        if (!response.IsSuccessStatusCode)
        {
            return new List<ProductDTO>();
        }
        var result = await response.Content.ReadFromJsonAsync<List<ProductDTO>>();
        return result ?? new List<ProductDTO>();
    }

    public async Task AddProductAsync(ProductDTO newProd)
    {
        var response = await _httpClient.PostAsJsonAsync("products", newProd);
        if (!response.IsSuccessStatusCode)
        {
            return;
        }
    }

    public async Task UpdateProductAsync(int existingProdId, ProductDTO updatedProd)
    {
        var response = await _httpClient.GetAsync($"products/{existingProdId}");
        if (!response.IsSuccessStatusCode)
        {
            return;
        }

        var result = await _httpClient.PutAsJsonAsync($"products/{existingProdId}", updatedProd);
        if (result.IsSuccessStatusCode)
        {
            return;
        }
    }


    public async Task DeleteProductAsync(int id)
    {
        var response = await _httpClient.DeleteAsync($"products/{id}");
        if (!response.IsSuccessStatusCode)
        {
            return;
        }
    }

    async Task<ProductDTO?> IProductRepository<ProductDTO>.GetProductByNameAsync(string title)
    {
        var response = await _httpClient.GetAsync($"products/title/{title}");
        if (!response.IsSuccessStatusCode)
        {
            return null;
        }

        var result = await response.Content.ReadFromJsonAsync<ProductDTO>();
        return result;
    }

    async Task<List<ProductDTO>> IProductRepository<ProductDTO>.GetProductsByDietAsync(string diet)
    {
        var response = await _httpClient.GetAsync($"products/diet/{diet}");
        if (!response.IsSuccessStatusCode)
        {
            return new List<ProductDTO>();
        }
        var result = await response.Content.ReadFromJsonAsync<List<ProductDTO>>();
        return result ?? new List<ProductDTO>();
    }
}