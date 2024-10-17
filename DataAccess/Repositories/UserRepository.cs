using DataAccess.Security;
using Microsoft.EntityFrameworkCore;
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

    public async Task<List<User?>> GetUserByNameAsync(string LastName)
    {
        return await context.User.Where(u => u.LastName == LastName).ToListAsync();
    }

    public async Task<User?> GetUserByOrganizationAsync(int organizationNumber)
    {
        return await context.User.FirstOrDefaultAsync(p => p.OrganizationNumber == organizationNumber);
    }

    public async Task<User?> GetUserByEmailAsync(string email)
    {
        return await context.User.FirstOrDefaultAsync(p => p.Email == email);
    }


    public async Task<bool> ValidateUserAsync(string email, string password)
    {
        var passwordVerification = new PasswordVerification();
        var user = await GetUserByEmailAsync(email);

        if (user == null)
        {
            return false; // User not found
        }

        return passwordVerification.VerifyPassword(password, user.PasswordHash);
    }

    public async Task DeleteUserAsync(int id)
    {
        var user = context.User.FirstOrDefault(u => u.Id == id);
        if (user is null) { return; }

        context.User.Remove(user);
        await context.SaveChangesAsync();
    }

}
