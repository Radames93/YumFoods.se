using Shared.Enums;

namespace Shared.Entities;

public class User
{
    public int Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public UserType? UserType { get; set; }
    public int? OrganizationNumber { get; set; }
    public string Email { get; set; }
    public string PhoneNumber { get; set; }
    public string Address { get; set; }
    public string City { get; set; }
    public string PostalCode { get; set; }
    public ICollection<Order> Orders { get; set; } = new List<Order>();
    public string? Subscription { get; set; }
    public string PasswordHash { get; set; }

}
