using DataAccess.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Repositories
{
    public class OrderRepository(YumFoodsDb context)
    {
        public async Task<IEnumerable<Order>> GetAllProductsAsync()
        {
            return await context.Order.ToListAsync();
        }

        public async Task<Order?> GetOrderByIdAsync(int id)
        {
            return await context.Order.FindAsync(id);
        }
    }
}
