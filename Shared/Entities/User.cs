namespace Shared.Entities;

public class User
{
    public int Id { get; set; }
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
    public int UserTypeId { get; set; }
    public int OrganizationNumber { get; set; }
    public string? Email { get; set; }
    public string? PhoneNumber { get; set; }
    public string? Address { get; set; }
    public string? City { get; set; }
    public string? PostalCode { get; set; }
    public string? Country { get; set; }
    public string? Cart { get; set; }
    public string? Subscription { get; set; }
    public string? PasswordHash { get; set; }

    public virtual ICollection<Order> Orders { get; set; }

}

