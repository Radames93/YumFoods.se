namespace Shared.DTOs;

public class CartItemDto
{
    public string Id { get; set; }
    public string Name { get; set; }
    public double Price { get; set; }
    public int Quantity { get; set; }
    public string Image { get; set; }
}