using System.ComponentModel.DataAnnotations;

namespace Shared.Entities;

public class Company
{
    [Key]
    public int? OrganizationNumber { get; set; }
    public string? OrganizationName { get; set; }
    public string? Adress { get; set; }
    public int? PostalCode { get; set; }
    public string? City { get; set; }

}
