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

    public async Task<string?> GetUserTypeByEmailAsync(string email)
    {
        var user = await context.User.FirstOrDefaultAsync(u => u.Email == email);

        return user?.UserType;
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

    public async Task UpdateUserAsync(int id, User newUser)
    {
        var oldUser = await context.User.FindAsync(id);
        if (oldUser is null)
        {
            return;
        }

        oldUser.FirstName = newUser.FirstName ?? oldUser.FirstName;
        oldUser.LastName = newUser.LastName ?? oldUser.LastName;
        oldUser.UserType = newUser.UserType ?? oldUser.UserType;
        oldUser.OrganizationNumber = newUser.OrganizationNumber ?? oldUser.OrganizationNumber;
        oldUser.Email = newUser.Email ?? oldUser.Email;
        oldUser.PhoneNumber = newUser.PhoneNumber ?? oldUser.PhoneNumber;
        oldUser.Address = newUser.Address ?? oldUser.Address;
        oldUser.City = newUser.City ?? oldUser.City;
        oldUser.PostalCode = newUser.PostalCode ?? oldUser.PostalCode;
        oldUser.Country = newUser.Country ?? oldUser.Country;
        oldUser.Subscription = newUser.Subscription ?? oldUser.Subscription;

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
