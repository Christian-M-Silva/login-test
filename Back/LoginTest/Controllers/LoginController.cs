using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace LoginTest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        // POST api/<LoginController>
        [HttpPost]
        public ActionResult Post([FromBody] string value)
        {
            return Ok(value);
        }
    }
}
