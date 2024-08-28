using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Entities;

public class DeliveryDetails
{
    public int Id { get; set; }
    public int OrderId { get; set; }
    public string DeliveryAdress { get; set; }
    public string DeliveryCity { get; set; }
    public int DeliveryPostalCode { get; set; }
    public string DeliveryCountry { get; set; }
}
