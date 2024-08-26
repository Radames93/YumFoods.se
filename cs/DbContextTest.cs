using System;
using System.Diagnostics;
using MySql.Data.MySqlClient;

namespace yumfoods.se.cs;

public class DbContextTest
{
    internal MySqlConnection ConnectToDatabase()
    {
        string connectionString = "Server=192.168.11.85;Database=yumfoodsdb;Uid=root;Pwd=admin;"; // FLYTTA TILL ENVAR
        using var connection = new MySqlConnection(connectionString);
        try
        {
            connection.Open();
            return connection;
        }
        catch (Exception e) 
        {
            Debug.WriteLine(e.Message);
        }
        return null;
    }

    public void SqlInsertQuery(string query)
    {
        var connection = ConnectToDatabase();
        var cmd = new MySqlCommand(query, connection);
        cmd.ExecuteNonQuery();
        connection.Close();
    }
}
