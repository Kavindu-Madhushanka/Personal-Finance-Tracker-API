import React from "react";

const TransactionTable = ({ transactions }) => {
  if (!transactions || transactions.length === 0) {
    return <p className="text-gray-500">No transactions found.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="p-3 border">ID</th>
            <th className="p-3 border">Title</th>
            <th className="p-3 border">Amount</th>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">User ID</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <tr key={tx.id} className="hover:bg-gray-50">
              <td className="p-3 border">{tx.id}</td>
              <td className="p-3 border">{tx.title}</td>
              <td className="p-3 border font-semibold text-green-600">
                ${tx.amount}
              </td>
              <td className="p-3 border">
                <span
                  className={`px-2 py-1 rounded text-sm ${
                    tx.type === "Income"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {tx.type}
                </span>
              </td>
              <td className="p-3 border text-gray-600">{tx.userId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
