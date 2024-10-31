using DataAccess.Security;
using Microsoft.EntityFrameworkCore;
using Org.BouncyCastle.Bcpg;
using Shared.DTOs;
using Shared.Entities;
using Shared.Enums;
using Shared.Interfaces;

namespace DataAccess.Repositories
{
    public class OrderWithDetailsRepository
    {
        private readonly YumFoodsDb _orderContext;        // Open database for orders
        private readonly YumFoodsUserDb _orderDetailContext;  // Secure database for order details

        public OrderWithDetailsRepository(YumFoodsDb orderContext, YumFoodsUserDb orderDetailContext)
        {
            _orderContext = orderContext;
            _orderDetailContext = orderDetailContext;
        }

        // Method to add both Order and OrderDetail
        public async Task AddOrderAndDetailsAsync(Order newOrder, OrderDetail newOrderDetail, int userId)
        {
            try
            {
                // Add the order to the orderContext (YumFoodsDb)
                await _orderContext.Order.AddAsync(newOrder);
                await _orderContext.SaveChangesAsync();

                // Add the order detail to the orderDetailContext (YumFoodsUserDb)
                newOrderDetail.OrderId = newOrder.Id; // Link the new order's ID to the order detail
                newOrderDetail.Id = newOrderDetail.OrderId;
                await _orderDetailContext.OrderDetail.AddAsync(newOrderDetail);
                await _orderDetailContext.SaveChangesAsync();

            //    var user = _orderDetailContext
            //        .User
            //        .FirstOrDefault(u => u.Id == userId);
            //    if (user is null)
            //    {
            //        await _orderDetailContext.User.AddAsync(user);
            //        await _orderDetailContext.SaveChangesAsync();
            //    }
            //    else if (user != null)
            //    {
            //        if (user.Orders is null)
            //        {
            //            user.Orders = new List<Order>(); 
            //        }
            //    }
            //    user.Orders.Add(newOrder);
            //    await _orderDetailContext.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                // Rollback order if adding order details fails
                var order = await _orderContext.Order.FindAsync(newOrder.Id);
                if (order != null)
                {
                    _orderContext.Order.Remove(order);
                    await _orderContext.SaveChangesAsync();
                }

                Console.WriteLine($"Error {ex.Message}");
                throw;
            }
        }

        public async Task<List<PurchaseRequest>> GetOrdersByUserIdAsync(int userId)
        {
            var user = await _orderDetailContext
                .User
                .FirstOrDefaultAsync(u => u.Id == userId);

            if (user == null)
            {
                return null;
            }

            var orders = await _orderContext
                .Order
                .Where(o => o.UserId == userId)
                .ToListAsync();

            if (orders.Count == 0)
            {
                return new List<PurchaseRequest>();
            }


            var orderIds = orders.Select(o => o.Id).ToList();

            var orderDetails = await _orderDetailContext
                .OrderDetail
                .Where(od => orderIds.Contains(od.OrderId))
                .ToListAsync();

            var result = new List<PurchaseRequest>();

            foreach (var order in orders)
            {
                var orderWithDetails = new PurchaseRequest
                {
                    UserId = order.UserId,
                    Products = order.Products.ToList(),
                    OrderDate = order.OrderDate,
                    DeliveryDate = order.DeliveryDate,
                    DeliveryTime = order.DeliveryTime,
                    Quantity = order.Quantity,
                    PaymentMethod = order.PaymentMethod,
                    Total = order.Total,
                    HouseType = order.HouseType,
                    DiscountTotal = order.DiscountTotal,
                    LeaveAtDoor = order.LeaveAtDoor
                    //OrderDetails = orderDetails.Where(od => od.OrderId == order.Id).ToList() // Matcha orderdetaljer
                };
                result.Add(orderWithDetails);
            }
            return result;
        }

        public async Task AddUserAsync(User newUser)
        {
            // Hash the password before storing the user
            var pwHasher = new PasswordEncryption();
            var hashedPassword = pwHasher.HashPassword(newUser.PasswordHash);

            if (newUser.UserType == null)
            {
                newUser.UserType = UserType.Guest;
            }

            var user = new User()
            {
                FirstName = newUser.FirstName,
                LastName = newUser.LastName,
                UserType = newUser.UserType,
                OrganizationNumber = newUser.OrganizationNumber,
                Email = newUser.Email,
                PhoneNumber = newUser.PhoneNumber,
                Address = newUser.Address,
                City = newUser.City,
                PostalCode = newUser.PostalCode,
                Subscription = newUser.Subscription,
                PasswordHash = hashedPassword,
                Orders = new List<Order>()
            };

            foreach (var order in newUser.Orders)
            {
                var existingOrder = await _orderContext.Order.FindAsync(order.Id);
                if (existingOrder != null)
                {
                    user.Orders.Add(existingOrder);
                }
            }
            await _orderDetailContext.User.AddAsync(user);
            await _orderDetailContext.SaveChangesAsync();
        }

    }
}
