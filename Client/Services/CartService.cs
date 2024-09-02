using Shared.DTOs;
using Shared.Interfaces;

namespace Client.Services;

public class CartService : ICartService
{
    public List<CartItemDto> Cart { get; set; } = new();


    public async Task<List<CartItemDto>> GetAllItemsAsync()
    {
        return Cart.ToList();
    }

    public async Task<CartItemDto> GetByIdAsync(CartItemDto id)
    {
        throw new NotImplementedException();
    }

    public Task AddAsync(CartItemDto newItem)
    {
        var r = new Random();
        var randomId = string.Empty;

        for (int i = 0; i < 1000; i++)
        {
            var randomNumber = r.Next(1000);
            randomId += randomNumber.ToString();
        }
        newItem.Id = randomId;
        Cart.Add(newItem);
        return Task.CompletedTask;
    }

    public async Task UpdateAsync(int existingId, CartItemDto updated)
    {
        throw new NotImplementedException();
    }

    public async Task DeleteAsync(string id)
    {
        var product = Cart.FirstOrDefault(p => p.Id == id);
        Cart.Remove(product);
        return;
    }
}