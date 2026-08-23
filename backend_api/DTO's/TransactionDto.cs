namespace backend_api.DTO_s
{
    public class TransactionDto
    {
        public string Title { get; set; } = string.Empty;
        public decimal Amount { get; set; }
        public string Type { get; set; } = string.Empty;

        public String UserId { get; set; }= string.Empty;
    }
}
