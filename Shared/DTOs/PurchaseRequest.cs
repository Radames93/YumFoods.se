﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices.JavaScript;
using System.Text;
using System.Threading.Tasks;
using Shared.Entities;
using Shared.Enums;

namespace Shared.DTOs
{
    public class PurchaseRequest
    {
        public int UserId { get; set; }                // The ID of the user making the purchase
        public List<Product> Products { get; set; }    // The list of products being purchased
        public int Quantity { get; set; }              // Total quantity of items being purchased
        public double Total { get; set; }              // Total price of the order
        public string? PaymentMethod { get; set; }
        public DateTime OrderDate { get; set; }
        public DateOnly DeliveryDate { get; set; }
        public string? DeliveryTime { get; set; }
        public List<OrderDetail> OrderDetails { get; set; } = new List<OrderDetail>();
        public double DiscountTotal { get; set; }
        public string? HouseType { get; set; }

        // Delivery Information (for OrderDetail)
        public string? DeliveryAddress { get; set; }    // The delivery address
        //public string? DeliveryCity { get; set; }       // The delivery city
        public int DeliveryPostalCode { get; set; }    // The delivery postal code
        //public string? DeliveryCountry { get; set; }    // The delivery country
        public int OrderId { get; set; }
        public int Floor { get; set; }
        public int PortCode { get; set; }
        public bool LeaveAtDoor { get; set; }


    }
}
