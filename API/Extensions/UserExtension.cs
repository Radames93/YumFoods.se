using DataAccess.Repositories;
using Microsoft.AspNetCore.Mvc;
using Shared;
using Shared.DTOs;
using Shared.Entities;
using System.Net.Http;
using System.Security.Claims;

namespace API.Extensions;

public static class UserExtension
{
    public static IEndpointRouteBuilder MapUserEndpoints(this IEndpointRouteBuilder app)
    {
        var group = app.MapGroup("/users");

        group.MapGet("/", GetAllUsersAsync);
        group.MapGet("/{id}", GetUserByIdAsync);
        group.MapGet("/user/{name}", GetUserByNameAsync);
        group.MapGet("/email/{email}", GetUserByEmailAsync);
        group.MapGet("/org/{organization}", GetUserByOrganizationAsync);

        group.MapGet("/type/{email}", GetUserTypeByEmailAsync);

        group.MapPost("/", AddUserAsync);
        group.MapPost("/login", LoginUserAsync);

        group.MapPatch("/{id}", UpdateUserAsync);

        group.MapDelete("/{id}", DeleteUserAsync);
        return app;
    }
    private static async Task<IResult> GetAllUsersAsync(UserRepository repo)
    {
        var user = await repo.GetAllUsersAsync();
        return Results.Ok(user);
    }
    private static async Task<IResult> GetUserByIdAsync(UserRepository repo, int id)
    {
        var user = await repo.GetUserByIdAsync(id);
        return Results.Ok(user);
    }
    private static async Task<IResult> GetUserByNameAsync(UserRepository repo, string name)
    {
        var user = await repo.GetUserByNameAsync(name);
        return Results.Ok(user);
    }
    private static async Task<IResult> GetUserByOrganizationAsync(UserRepository repo, int orgNumber)
    {
        var user = await repo.GetUserByOrganizationAsync(orgNumber);
        return Results.Ok(user);
    }
    private static async Task<IResult> GetUserByEmailAsync(UserRepository repo, string email)
    {
        var user = await repo.GetUserByEmailAsync(email);
        return Results.Ok(user);
    }

    private static async Task<IResult> GetUserTypeByEmailAsync(UserRepository repo, string email)
    {
        var userType = await repo.GetUserTypeByEmailAsync(email);
        if (userType == null)
        {
            return Results.NotFound("User not found or email is invalid.");
        }

        return Results.Ok(new { Email = email, UserType = userType });
    }

    private static async Task<IResult> AddUserAsync(UserRepository repo, User newUser)
    {
        var exisitngUser = await repo.GetUserByIdAsync(newUser.Id);
        if (exisitngUser is not null)
        {
            return null;
        }

        var existingUser = await repo.GetUserByEmailAsync(newUser.Email);
        if (existingUser != null)
        {
            return Results.BadRequest("An account with this email already exists.");
        }

        await repo.AddUserAsync(newUser);
        return Results.Ok(newUser);
    }

    private static async Task<IResult> LoginUserAsync(UserRepository repo, AuthenticationService auth, [FromBody] LoginModel login)
    {
        if (string.IsNullOrEmpty(login.Email) || string.IsNullOrEmpty(login.Password))
        {
            return Results.BadRequest("Email and password must be provided.");
        }

        var isValid = await repo.ValidateUserAsync(login);

        if (!isValid)
        {
            return Results.Unauthorized();
        }

        var user = await repo.GetUserByEmailAsync(login.Email);

        // Generate a JWT token or return user data
        var token = auth.GenerateToken(user);

        return Results.Ok(new { Token = token });
    }




    private static async Task<IResult> UpdateUserAsync(UserRepository repo, int id, User newUser)
    {
        var existingUser = await repo.GetUserByIdAsync(id);
        if (existingUser is null)
        {
            return Results.BadRequest($"User with id number {id} does not exist");
        }

        await repo.UpdateUserAsync(id, newUser);
        return Results.Ok();
    }

    private static async Task<IResult> DeleteUserAsync(UserRepository repo, int id)
    {
        await repo.DeleteUserAsync(id);
        return Results.Ok();
    }
}