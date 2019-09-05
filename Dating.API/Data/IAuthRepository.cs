using System.Threading.Tasks;
using Dating.API.models;

namespace Dating.API.Data
{
    public interface IAuthRepository
    {
         Task<User> Registr (User user, string password);
         Task<User> Login(string username, string password);
         Task<bool> UserExist(string name);
    }
}