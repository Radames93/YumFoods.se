using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Shared.Entities
{
    public class OrderAndDetail
    {
        public Order? Order { get; set; }

        public OrderDetail? OrderDetail { get; set; }
    }
}
