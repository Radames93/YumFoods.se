using System.Net.Http;
using System.Text;
using Newtonsoft.Json;
using System.Linq;
using Shared.Entities;
using Shared.Interfaces;
using System.Threading.Tasks;
using System.Collections.Generic;
using DataAccess.Repositories;

public class LogicApp
{
    private readonly IOrderRepository<Order> _orderRepository;
    private readonly IProductRepository<Product> _productRepository;
    private readonly UserRepository _userRepository;
    private readonly IOrderDetailRepository<OrderDetail> _orderDetailRepository; // Use the interface here

    public LogicApp(IOrderRepository<Order> orderRepository, IOrderDetailRepository<OrderDetail> orderDetailRepository, IProductRepository<Product> productRepository, UserRepository userRepository)
    {
        _orderRepository = orderRepository;
        _productRepository = productRepository;
        _userRepository = userRepository;
        _orderDetailRepository = orderDetailRepository; // Use the interface here
    }

    public async Task NotifyOrderPlacedAsync(Order newOrder, string customerEmail)
    {
        var client = new HttpClient();
        var logicAppUrl = "https://prod-67.westeurope.logic.azure.com:443/workflows/5043edfa445a404b9a1aa8a02390b86a/triggers/When_a_HTTP_request_is_received/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2FWhen_a_HTTP_request_is_received%2Frun&sv=1.0&sig=3txNITWtosiGFM5ao9LUFyWWp3HUYus_t1QciDQ2fJc."; // Your Logic App URL

        // Retrieve user information
        var user = await _userRepository.GetUserByEmailAsync(customerEmail);
        if (user == null)
        {
            Console.WriteLine($"User not found for email: {customerEmail}");
            return;
        }

        // Fetch detailed product information
        var productIds = newOrder.Products.Select(p => p.Id).Distinct().ToList();
        var products = await _productRepository.GetProductsByIdsAsync(productIds);

        // Build the payload with user details
        var payload = new
        {
            UserId = newOrder.UserId,
            UserName = $"{user.FirstName} {user.LastName}",
            UserAddress = user.Address,
            CustomerEmail = user.Email,
            OrderId = newOrder.Id,
            OrderDate = newOrder.OrderDate,
            DeliveryDate = newOrder.DeliveryDate,
            Total = newOrder.Total,
            HouseType = newOrder.HouseType,
            DeliveryTime = newOrder.DeliveryTime,
            PaymentMethod = newOrder.PaymentMethod,
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
        response.EnsureSuccessStatusCode();
    }
}