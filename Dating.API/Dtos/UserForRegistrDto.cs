using System.ComponentModel.DataAnnotations;

namespace Dating.API.Dtos
{
    public class UserForRegistrDto
    {   [Required]
        public string Username { get; set; }
        [Required]
        [StringLength(8, MinimumLength=4, ErrorMessage="Password must be more than 4 and less than 8 letters")]
        public string Password { get; set; }    
    }
}