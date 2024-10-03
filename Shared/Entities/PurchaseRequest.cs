﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Shared.Entities
{
    public class PurchaseRequest
    {
        //public int UserId { get; set; }                // The ID of the user making the purchase
        public List<Product> Products { get; set; }    // The list of products being purchased
        public int Quantity { get; set; }              // Total quantity of items being purchased
        public double Total { get; set; }              // Total price of the order

        // Delivery Information (for OrderDetail)
        public string DeliveryAddress { get; set; }    // The delivery address
        public string DeliveryCity { get; set; }       // The delivery city
        public int DeliveryPostalCode { get; set; }    // The delivery postal code
        public string DeliveryCountry { get; set; }    // The delivery country
    }
}