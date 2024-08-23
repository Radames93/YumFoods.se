using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using MySql.Data;
using MySql.Data.MySqlClient;

namespace yumfoods.se.cs;

public class DbContext
{
    public DbContext() 
    {
        Console.WriteLine("Enter query");
        string query = Console.ReadLine();
        if (query == null)
            throw new ArgumentNullException("query");

        Connect(query);
    }
    public void Connect(string query)
    {
        string connectionString = "Server=192.168.11.85;Database=yumfoodsdb;Uid=admin;Pwd=root;";
        using (var connection = new MySqlConnection(connectionString))
        {
            connection.Open();
            var cmd = new MySqlCommand(query, connection);
            cmd.ExecuteNonQuery();
            connection.Close();
        }
    }

}

