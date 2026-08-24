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
    fetch("http://localhost:5054/api/Transactions/getall_transactions")
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

    fetch("http://localhost:5054/api/Transactions/add_transaction", {
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
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            💰 Personal Finance Tracker
          </h1>

          {/* Add Transaction Form */}
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 bg-gray-50 p-4 rounded-lg border"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="w-full border rounded p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Salary, Rent..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Amount
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
                className="w-full border rounded p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="0.00"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Type
              </label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full border rounded p-2 focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
              </select>
            </div>

            <div className="flex items-end">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition"
              >
                Add Transaction
              </button>
            </div>
          </form>

          {/* Transactions Table */}
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
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
