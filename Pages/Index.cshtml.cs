using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;
using Test_Moot_Up.Models;

namespace Test_Moot_Up.Pages
{
    public class IndexModel : PageModel
    {
        private readonly ILogger<IndexModel> _logger;

        public IndexModel(ILogger<IndexModel> logger)
        {
            _logger = logger;
        }

        
        public void OnPost()
        {
            var new_user = new User();
            new_user.FirstName = Request.Form["given-name"];
            new_user.LastName = Request.Form["family-name"];
            new_user.Email = Request.Form["email"];
            new_user.StudyYear = Request.Form["year"];
            new_user.MootExperience = Request.Form["experience"];
            new_user.TeammateMootExperience = Request.Form["teamExperience"];
            new_user.Goal = Request.Form["goal"];
            new_user.HoursExpected = Request.Form["time"];
            new_user.WantToBeBarrister = Request.Form["role"];

        }
             

    }

    
}
