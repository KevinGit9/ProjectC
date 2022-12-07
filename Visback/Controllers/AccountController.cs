using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Visback.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        public static List<Account> accounts = new List<Account>
        {
            new Account
            {
                Name = "admin",
                Password = "admin"
            },
            new Account
            {
                Name ="123",
                Password = "123"
            }
        };
        [HttpGet]
        public async Task<ActionResult<List<string>>> getuserlist()
        {
            List<string> usernames = new List<string>();

            foreach (var acc in accounts)
            {
                usernames.Add(acc.Name);
            }

            return Ok(usernames);
        }
        public async Task<ActionResult<Account>>LogintoAccount()
        {           
            string username = Console.ReadLine();
            string password = Console.ReadLine();
            Account account = new Account();
            account.Name = username;
            account.Password = password;

            foreach (var acc in accounts)
            {
                if (acc.Password == account.Password && acc.Name == account.Name)
                {
                    return Ok(account);
                }
            }
            return BadRequest();
        }

        [HttpPost]
        public async Task<ActionResult<Account>> RegisterAccount(Account account)
        {
            
            accounts.Add(account);
            return Ok(account);
        }
    }
}
