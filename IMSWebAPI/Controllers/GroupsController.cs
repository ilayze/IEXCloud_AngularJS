using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace IMSWebAPI.Controllers
{
    public class GroupsController : ApiController
    {
        public IEnumerable<Group> Get()
        {
            List<Group> groups=new List<Group>
            {
                new Group{groupName="Computers",items=new List<string>{"izeidman","uIex_student","163.76.188.39","newComputer"}},
                new Group{groupName="IEX Servers",items=new List<string>{"myIexServers","lab servers","ilays group"}}
            };

            return groups;
        }
    }

    public class Group
    {
        public string groupName { get; set; }
        public List<string> items { get; set; }
    }
}
