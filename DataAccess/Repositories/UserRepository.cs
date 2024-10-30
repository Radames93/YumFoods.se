using DataAccess;
using DataAccess.Security;
using Microsoft.EntityFrameworkCore;
using Shared.DTOs;
using Shared.Entities;
using Shared.Interfaces;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DataAccess.Repositories
{
    public class UserRepository : IUserRepository<User>
    {
        private readonly YumFoodsUserDb _context;

        public UserRepository(YumFoodsUserDb context)
        {
            _context = context;
        }

        public async Task<List<User>> GetAllUsersAsync()
        {
            return await _context.User.ToListAsync();
        }

        public async Task<User?> GetUserByIdAsync(int id)
        {
            return await _context.User.FindAsync(id);
        }

        public async Task<User?> GetUserByNameAsync(string name)
        {
            return await _context.User.FirstOrDefaultAsync(p => p.FirstName == name);
        }

        public async Task<User?> GetUserByOrganizationAsync(int organizationNumber)
        {
            return await _context.User.FirstOrDefaultAsync(p => p.OrganizationNumber == organizationNumber);
        }

        public async Task<User?> GetUserByEmailAsync(string email)
        {
            return await _context.User.FirstOrDefaultAsync(p => p.Email == email);
        }

        public async Task<string?> GetUserTypeByEmailAsync(string email)
        {
            var user = await GetUserByEmailAsync(email);
            return user?.UserType.ToString();
        }

        public async Task<bool> ValidateUserAsync(LoginModel login)
        {
            var user = await GetUserByEmailAsync(login.Email);
            if (user == null)
            {
                Console.WriteLine($"User not found for email: {login.Email}");
                return false;
            }

            var passwordVerification = new PasswordVerification();
            bool isPasswordValid = passwordVerification.VerifyPassword(login.Password, user.PasswordHash);

            if (!isPasswordValid)
            {
                Console.WriteLine($"Invalid password for email: {login.Email}");
            }

            return isPasswordValid;
        }

        public async Task AddUserAsync(User newUser)
        {
            if (string.IsNullOrEmpty(newUser.PasswordHash))
            {
                throw new ArgumentException("Password cannot be null or empty.");
            }

            var existingUser = await _context.User
                .FirstOrDefaultAsync(u => u.Email == newUser.Email);
            if (existingUser != null)
            {
                throw new ArgumentException("An account with this email already exists.");
            }

            var pwHasher = new PasswordEncryption();
            newUser.PasswordHash = pwHasher.HashPassword(newUser.PasswordHash);

            await _context.User.AddAsync(newUser);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateUserAsync(int id, User newUser)
        {
            var existingUser = await _context.User.FindAsync(id);
            if (existingUser == null) return;

            existingUser.FirstName = newUser.FirstName ?? existingUser.FirstName;
            existingUser.LastName = newUser.LastName ?? existingUser.LastName;
            existingUser.OrganizationNumber = newUser.OrganizationNumber ?? existingUser.OrganizationNumber;
            existingUser.Email = newUser.Email ?? existingUser.Email;
            existingUser.PhoneNumber = newUser.PhoneNumber ?? existingUser.PhoneNumber;
            existingUser.Address = newUser.Address ?? existingUser.Address;
            existingUser.City = newUser.City ?? existingUser.City;
            existingUser.PostalCode = newUser.PostalCode ?? existingUser.PostalCode;
            existingUser.Subscription = newUser.Subscription ?? existingUser.Subscription;
            existingUser.PasswordHash = newUser.PasswordHash ?? existingUser.PasswordHash;

            await _context.SaveChangesAsync();
        }

        public async Task DeleteUserAsync(int id)
        {
            var user = await _context.User.FindAsync(id);
            if (user == null) return;

            _context.User.Remove(user);
            await _context.SaveChangesAsync();
        }
    }
}
