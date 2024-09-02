using Shared.DTOs;

namespace Shared.Interfaces;

public interface ICartService
{
    Task<List<CartItemDto>> GetAllItemsAsync();
    Task<CartItemDto> GetByIdAsync(CartItemDto id);
    Task AddAsync(CartItemDto newItem);
    //kanske ändra
    Task UpdateAsync(int existingId, CartItemDto updated);
    Task DeleteAsync(string id);

}