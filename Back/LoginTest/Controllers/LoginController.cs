using LoginTest.Shared;
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
        public ActionResult Post([FromBody] RequestModels request)
        {
            if (request.Email == "admin@admin.com" && request.Password == "123456")
            {
                return Ok(request);
            }

            return Unauthorized(new { message = "Usuário ou senha inválidos" });
        }
    }
}
