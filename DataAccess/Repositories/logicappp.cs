using System.Net.Http;
using System.Text;
using Newtonsoft.Json;
using System.Linq;
using Shared.Entities;
using Shared.Interfaces;
using System.Threading.Tasks;
using System.Collections.Generic;



public class LogicApp
{
    private readonly IOrderRepository<Order> _orderRepository;
    private readonly IProductRepository<Product> _productRepository;

    public LogicApp(IOrderRepository<Order> orderRepository, IProductRepository<Product> productRepository)
    {
        _orderRepository = orderRepository;
        _productRepository = productRepository;
    }

    /// <summary>
    /// Notify stakeholders after an order is placed.
    /// </summary>
    /// <param name="newOrder">The newly created order.</param>
    /// <param name="customerEmail">Customer's email for notifications.</param>
    /// <param name="adminEmail">Admin's email for notifications.</param>
    public async Task NotifyOrderPlacedAsync(Order newOrder, string customerEmail, string adminEmail)
    {
        var client = new HttpClient();
        var logicAppUrl = "https://prod-67.westeurope.logic.azure.com/workflows/..."; // Your Logic App URL

        // Fetch detailed product information
        var productIds = newOrder.Products.Select(p => p.Id).Distinct().ToList();
        var products = await _productRepository.GetProductsByIdsAsync(productIds);

        // Build the payload
        var payload = new
        {
            UserId = newOrder.UserId,
            OrderId = newOrder.Id,
            OrderDate = newOrder.OrderDate,
            DeliveryDate = newOrder.DeliveryDate,
            Total = newOrder.Total,
            HouseType = newOrder.HouseType,          // Added HouseType
            DeliveryTime = newOrder.DeliveryTime,    // Added DeliveryTime
            PaymentMethod = newOrder.PaymentMethod,    // Added PaymentMethod
            CustomerEmail = customerEmail,
            AdminEmail = adminEmail,
            Quantity = newOrder.Quantity,
            Products = products.Select(p => new
            {
                p.Id,
                p.Title,
                p.Price,
            }).ToList()
        };

        var jsonContent = JsonConvert.SerializeObject(payload);
        var content = new StringContent(jsonContent, Encoding.UTF8, "application/json");

        // Send the POST request to trigger the Logic App
        var response = await client.PostAsync(logicAppUrl, content);
        response.EnsureSuccessStatusCode(); // Ensure the request was successful
    }
}
