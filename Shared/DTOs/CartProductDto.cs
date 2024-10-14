namespace Shared.DTOs;

//probably not needed class because localstorage is used in frontend. 20/09
public class CartProductDto : CartItemDto
{
    public int ProductId { get; set; }
}