using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using backend_api.Repositories;
using backend_api.Data;
using backend_api.DTO_s;
using backend_api.Models;
using System.Reflection;


namespace backend_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TransactionsController : ControllerBase
    {
        private readonly ITransactionRepository _repository;

        public TransactionsController(ITransactionRepository repository) { 
            _repository = repository;
        }

        [HttpGet]
        public async Task<ActionResult< IEnumerable<Transaction>>> GetTransaction() { 
            var transaction=await _repository.GetAllTransactionsAsync();
            return Ok(transaction);
        }

        [HttpPost]

        public async Task<ActionResult<Transaction>> PostTransaction(TransactionDto transactionDto)
        {
            var transaction = new Transaction()
            {
                Title = transactionDto.Title,
                Amount = transactionDto.Amount,
                Type = transactionDto.Type,
                Date=DateTime.Now,
                UserId = transactionDto.UserId,

            };

            var createdTransaction=await _repository.AddTransactionAsync(transaction);

            return CreatedAtAction(nameof(GetTransaction), new {id=createdTransaction.Id},createdTransaction);
        }


    }
}
