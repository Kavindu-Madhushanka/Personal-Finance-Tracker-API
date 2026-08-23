using backend_api.Models;
namespace backend_api.Repositories
{
    public interface ITransactionRepository
    {
        Task<IEnumerable<Transaction>> GetAllTransactionsAsync();
        Task<Transaction> AddTransactionAsync(Transaction transaction);
    }
}
