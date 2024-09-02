//using DataAccess.Security;
//using Microsoft.EntityFrameworkCore;
//using Shared.Entities;

//namespace DataAccess.Repositories;


//public class UserRepository(YumFoodsUserDb context)
//{
//    public async Task<List<User>> GetAllUsersAsync()
//    {
//        return await context.User.ToListAsync();
//    }

//    public async Task<User?> GetUserByIdAsync(int id)
//    {
//        return await context.User.FindAsync(id);
//    }

//    public async Task<User?> GetUserByNameAsync(string name)
//    {
//        return await context.User.FirstOrDefaultAsync(p => p.FirstName == name);
//    }

//    public async Task<User?> GetUserByOrganizationAsync(int organizationNumber)
//    {
//        return await context.User.FirstOrDefaultAsync(p => p.OrganizationNumber == organizationNumber);
//    }
//    public async Task<User?> GetUserByEmailAsync(string email)
//    {
//        return await context.User.FirstOrDefaultAsync(p => p.Email == email);
//    }


//    public async Task<bool> ValidateUserAsync(string email, string password)
//    {
//        var passwordVerification = new PasswordVerification();
//        var user = await GetUserByEmailAsync(email);

//        if (user == null)
//        {
//            return false; // User not found
//        }

//        return passwordVerification.VerifyPassword(password, user.PasswordHash);
//    }

//    public async Task AddUserAsync(User newUser)
//    {
//        // Hash the password before storing the user
//        var pwHasher = new PasswordEncryption();
//        var hashedPassword = pwHasher.HashPassword(newUser.PasswordHash);
    
        
//            var user = new User()
//            {
//                FirstName = newUser.FirstName,
//                LastName = newUser.LastName,
//                UserType = newUser.UserType,
//                OrganizationNumber = newUser.OrganizationNumber,
//                Email = newUser.Email,
//                PhoneNumber = newUser.PhoneNumber,
//                Address = newUser.Address,
//                City = newUser.City,
//                PostalCode = newUser.PostalCode,
//                Country = newUser.Country,
//                Cart = newUser.Cart,
//                Subscription = newUser.Subscription,
//                PasswordHash = hashedPassword,
//            };

//            await context.User.AddAsync(user);
//            await context.SaveChangesAsync();

//        }

//    }
