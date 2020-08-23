using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Test_Moot_Up.Models
{
    public class User
    {
        public string FirstName{ get; set; }
        public string LastName{ get; set; }
        public string Email{ get; set; }
        public string StudyYear{ get; set; }
        public string MootExperience{ get; set; }
        public string TeammateMootExperience{ get; set; }
        public string Goal{ get; set; }
        public string HoursExpected{ get; set; }
        public string WantToBeBarrister{ get; set; }
        public string DateSubmitted{ get; set; }

    }
   
}
