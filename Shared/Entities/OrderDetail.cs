namespace Shared.Entities;

public class OrderDetail
{
    public int Id { get; set; }
    public int OrderId { get; set; }
    public string DeliveryAdress { get; set; }
    public string DeliveryCity { get; set; }
    public int DeliveryPostalCode { get; set; }
    public string DeliveryCountry { get; set; }
}
