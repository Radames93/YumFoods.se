using DataAccess.Security;
using Microsoft.EntityFrameworkCore;
using Shared.DTOs;
using Shared.Entities;

namespace DataAccess.Repositories;


public class UserRepository(YumFoodsUserDb context)
{
    public async Task<List<User>> GetAllUsersAsync()
    {
        return await context.User.ToListAsync();
    }

    public async Task<User?> GetUserByIdAsync(int id)
    {
        return await context.User.FindAsync(id);
    }

    public async Task<User?> GetUserByNameAsync(string name)
    {
        return await context.User.FirstOrDefaultAsync(p => p.FirstName == name);
    }

    public async Task<User?> GetUserByOrganizationAsync(int organizationNumber)
    {
        return await context.User.FirstOrDefaultAsync(p => p.OrganizationNumber == organizationNumber);
    }
    public async Task<User?> GetUserByEmailAsync(string email)
    {
        return await context.User.FirstOrDefaultAsync(p => p.Email == email);
    }

    public async Task<User?> GetUserTypeAsync(string userType)
    {
        return await context.User.FirstOrDefaultAsync(p => p.UserType == userType);
    }

    public async Task<bool> ValidateUserAsync(LoginModel login)
    {
        var passwordVerification = new PasswordVerification();
        var user = await GetUserByEmailAsync(login.Email);

        if (user == null)
        {
            return false;
        }

        return passwordVerification.VerifyPassword(login.Password, user.PasswordHash);
    }


    public async Task AddUserAsync(User newUser)
    {
        if (string.IsNullOrEmpty(newUser.PasswordHash))
        {
            throw new ArgumentException("Password cannot be null or empty.");
        }

        var pwHasher = new PasswordEncryption();
        var hashedPassword = pwHasher.HashPassword(newUser.PasswordHash);


        var user = new User()
        {
            FirstName = newUser.FirstName,
            LastName = newUser.LastName,
            UserType = newUser.UserType,
            OrganizationNumber = newUser.OrganizationNumber,
            Email = newUser.Email,
            PhoneNumber = newUser.PhoneNumber,
            Address = newUser.Address,
            City = newUser.City,
            PostalCode = newUser.PostalCode,
            Country = newUser.Country,
            Cart = newUser.Cart,
            Subscription = newUser.Subscription,
            PasswordHash = hashedPassword
        };

        await context.User.AddAsync(user);
        await context.SaveChangesAsync();
    }

    public async Task DeleteUserAsync(int id)
    {
        var user = await context.User.FindAsync(id);
        if (user is null)
        {
            return;
        }

        context.User.Remove(user);
        await context.SaveChangesAsync();
    }
}
