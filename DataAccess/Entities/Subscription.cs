using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Entities;

public class Subscription
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string ImgRef { get; set; }
    public int Price { get; set; }
}

