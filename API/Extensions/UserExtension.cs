using DataAccess;
using DataAccess.Repositories;
using DataAccess.Security;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
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
        var group = app.MapGroup("/users"); // Fixa routes(?)

        group.MapGet("/", GetAllUsersAsync);
        group.MapGet("/id/{id}", GetUserByIdAsync);
        group.MapGet("/user/{name}", GetUserByNameAsync);
        group.MapGet("/email/{email}", GetUserByEmailAsync);
        group.MapGet("/org/{organization}", GetUserByOrganizationAsync);

        group.MapGet("/type/{usertype}", GetUserTypeAsync);


        group.MapPost("/", AddUserAsync);
        group.MapPost("/login", LoginUserAsync); // Adding login endpoint here

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


    private static async Task<IResult> GetUserTypeAsync(UserRepository repo, string userType)
    {
        var user = await repo.GetUserTypeAsync(userType);
        return Results.Ok(user);
    }


    private static async Task<IResult> GetCompanyData(ClaimsPrincipal user)
    {
        // Check if the user has the "Company" role
        if (user.IsInRole("Company"))
        {
            return Results.Ok("This is company data"); // Return data for company users
        }
        return Results.Unauthorized(); // Return unauthorized if the user does not have the role
    }

    private static async Task<IResult> GetUserData(ClaimsPrincipal user)
    {
        // Check if the user has the "User" role
        if (user.IsInRole("User"))
        {
            return Results.Ok("This is regular user data"); // Return data for regular users
        }
        return Results.Unauthorized(); // Return unauthorized if the user does not have the role
    }

    private static async Task<IResult> AddUserAsync(UserRepository repo, User newUser)
    {
        var exisitngUser = await repo.GetUserByIdAsync(newUser.Id);
        if (exisitngUser is not null)
        {
            return null;
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
            return Results.Unauthorized(); // Return Unauthorized if email or password is incorrect
        }

        var user = await repo.GetUserByEmailAsync(login.Email);

        // Generate a JWT token or return user data
        var token = auth.GenerateToken(user);

        return Results.Ok(new { Token = token });
    }

    private static async Task<IResult> DeleteUserAsync(UserRepository repo, int id)
    {
        await repo.DeleteUserAsync(id);
        return Results.Ok();
    }
}