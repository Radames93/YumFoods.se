using DataAccess.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
    public async Task AddUserAsync(User newUser)
    {
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
            Password = newUser.Password,
        };

        await context.User.AddAsync(user);
        await context.SaveChangesAsync();

    }

}
