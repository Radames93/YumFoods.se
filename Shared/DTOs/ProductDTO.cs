using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Shared.DTOs
{
    public class ProductDTO
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public double Price { get; set; }
        public string Category { get; set; }
        public string Diet { get; set; }
        public string DietRef { get; set; }
        public string ImgRef { get; set; }
        public string Description { get; set; }
        public string Ingredients { get; set; }
        public string Cuisine { get; set; }
        public ICollection<OrderDTO> Orders { get; set; } = new List<OrderDTO>();
    }
}
