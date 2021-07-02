using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Multum.Models;
using System.Data.SqlClient;
using System.Net.Http;
using System.Configuration;
using System.Net;
using System.Data;

namespace Multum.Controllers
{
    public class userController : Controller
    {
    private object cmd;

    // GET: user
    public HttpResponseMessage Get()
    {
      string query = @"
                  Select username,password from
                  dbo.user
                      ";

      DataTable table = new DataTable();
      using (var con = new SqlConnection(ConfigurationManager.
        ConnectionStrings["userDB"].ConnectionString))
      using (var cmd = new SqlCommand(query, con))
      using (var da = new SqlDataAdapter(cmd))
      {
        cmd.CommandType = CommandType.Text;
        da.Fill(table);
      }
      return Request.CreateResponse(HttpStatusCode.OK, table);
    }

    public string Post(user use)
    {
      try
      {
        string query = @"
                        Insert into dbo.user values
                        ('" + use.username + @"')
                        ";
        DataTable table = new DataTable();
        using (var con = new SqlConnection(ConfigurationManager.
          ConnectionStrings["userDB"].ConnectionString))
        using (var cmd = new SqlCommand(query, con))
        using (var da = new SqlDataAdapter(cmd))
        {
          cmd.CommandType = CommandType.Text;
          da.Fill(table);
        }

        return "Added Successfully!!";
      }
      catch (Exception)
      {
        return "Failed to Add!!";
      }
    }

    public string Put(user use)
    {
      try
      {
        string query = @"
                        Update dbo.user set username=
                        '" + use.username + @"'
                        where username = " + use.username + @"
                        ";
        DataTable table = new DataTable();
        using (var con = new SqlConnection(ConfigurationManager.
          ConnectionStrings["userDB"].ConnectionString))
        using (var cmd = new SqlCommand(query, con))
        using (var da = new SqlDataAdapter(cmd))
        {
          cmd.CommandType = CommandType.Text;
          da.Fill(table);
        }

        return "Updated Successfully!!";
      }
      catch (Exception)
      {
        return "Failed to Update!!";
      }
    }

    public string Delete(string user)
    {
      try
      {
        string query = @"
                        delete dbo.user 
                        where username = " + user + @"
                        ";
        DataTable table = new DataTable();
        using (var con = new SqlConnection(ConfigurationManager.
          ConnectionStrings["userDB"].ConnectionString))
        using (var cmd = new SqlCommand(query, con))
        using (var da = new SqlDataAdapter(cmd))
        {
          cmd.CommandType = CommandType.Text;
          da.Fill(table);
        }

        return "Deleted Successfully!!";
      }
      catch (Exception)
      {
        return "Failed to Delete!!";
      }
    }
    public ActionResult Index()
        {
            return View();
        }
    }
}
