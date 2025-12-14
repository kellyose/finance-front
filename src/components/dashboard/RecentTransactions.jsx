import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const RecentTransactions = ({ transactions = [] }) => {
  const navigate = useNavigate();
  const recentTransactions = Array.isArray(transactions) ? transactions.slice(0, 5) : [];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Recent Transactions</h3>
        <button 
          onClick={() => navigate("/transactions")}
          className="text-sm text-blue-600 hover:text-blue-800 font-medium"
        >
          View All →
        </button>
      </div>

      {recentTransactions.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500 mb-4">No transactions yet</p>
          <button 
            onClick={() => navigate("/transactions")}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Add Your First Transaction
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {recentTransactions.map((transaction) => {
            // ✅ FIX: Determine income/expense correctly
            const isIncome = transaction.type === 'income' || transaction.amount > 0;
            const amountColor = isIncome ? 'text-green-600' : 'text-red-600';
            const icon = isIncome ? (
              <ArrowUpRight className="h-4 w-4 text-green-500" />
            ) : (
              <ArrowDownRight className="h-4 w-4 text-red-500" />
            );

            return (
              <div 
                key={transaction._id || transaction.id} 
                className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div className="flex items-center">
                  <div className={`p-2 rounded-lg mr-3 ${isIncome ? 'bg-green-50' : 'bg-red-50'}`}>
                    {icon}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{transaction.description}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="capitalize">{transaction.category}</span>
                      <span className="mx-2">•</span>
                      <span>{new Date(transaction.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
                {/* ✅ FIX: Show minus sign for expenses */}
                <div className={`font-semibold ${amountColor}`}>
                  {isIncome ? '+' : '-'}${Math.abs(transaction.amount).toFixed(2)}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default RecentTransactions;