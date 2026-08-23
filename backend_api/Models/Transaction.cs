namespace backend_api.Models
{
    public class Transaction
    {
        public int Id { get; set; }
        public String Title { get; set; }=String.Empty;
        public decimal Amount { get; set; }

        public String Type { get; set; } = String.Empty;

        public DateTime Date { get; set; } = DateTime.UtcNow;
    }
}
