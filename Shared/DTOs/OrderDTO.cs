namespace Shared.DTOs
{
    public class OrderDTO
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public DateTime OrderDate { get; set; }
        public DateTime DeliveryDate { get; set; }
        public ICollection<ProductDTO> Products { get; set; } = new List<ProductDTO>();
        public int Quantity { get; set; }
        public double Total { get; set; }
    }
}
