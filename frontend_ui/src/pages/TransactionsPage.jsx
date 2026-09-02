import React, { useState, useEffect } from "react";
import TransactionTable from "../components/TransactionTable";

const TransactionsPage = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("Income");
  const [userId, setUserId] = useState(1);

  const fetchTransactions = () => {
    fetch("/api/Transactions/getall_transactions")
      .then((res) => res.json())
      .then((data) => {
        setTransactions(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching transactions:", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      title,
      amount: parseFloat(amount),
      type,
      userId: parseInt(userId),
    };

    fetch("/api/Transactions/add_transaction", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTransaction),
    })
      .then((res) => {
        if (res.ok) {
          setTitle("");
          setAmount("");
          fetchTransactions();
        } else {
          alert("Failed to add transaction");
        }
      })
      .catch((err) => console.error("Error adding transaction:", err));
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="p-6 bg-white shadow-md rounded-xl">
          <h1 className="mb-6 text-2xl font-bold text-gray-800">
            💰 Personal Finance Tracker
          </h1>

          {/* Add Transaction Form */}
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg md:grid-cols-4 bg-gray-50"
          >
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="w-full p-2 border rounded outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Salary, Rent..."
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Amount
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
                className="w-full p-2 border rounded outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="0.00"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Type
              </label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full p-2 border rounded outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
              </select>
            </div>

            <div className="flex items-end">
              <button
                type="submit"
                className="w-full px-4 py-2 font-semibold text-white transition bg-blue-600 rounded hover:bg-blue-700"
              >
                Add Transaction
              </button>
            </div>
          </form>

          {/* Transactions Table */}
          <h2 className="mb-4 text-xl font-semibold text-gray-800">
            Transaction History
          </h2>
          {loading ? (
            <p className="text-gray-500">Loading transactions...</p>
          ) : (
            <TransactionTable transactions={transactions} />
          )}
        </div>
      </div>
    </div>
  );
};

export default TransactionsPage;
