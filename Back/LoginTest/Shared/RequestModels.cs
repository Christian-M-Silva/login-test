using System.ComponentModel.DataAnnotations;

namespace LoginTest.Shared
{
    public class RequestModels
    {
        public required string Email { get; set; }
        public required string Password { get; set; }
    }
}
