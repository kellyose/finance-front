import { DollarSign, TrendingUp, TrendingDown } from 'lucide-react';

const SummaryCards = ({ summary }) => {
  const cards = [
    {
      title: 'Total Balance',
      amount: summary.balance,
      type: 'balance',
      icon: DollarSign,
      trend: summary.balance >= 0 ? '+0%' : '-0%',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      title: 'Total Income',
      amount: summary.totalIncome,
      type: 'income',
      icon: TrendingUp,
      trend: '+0%',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      title: 'Total Expenses',
      amount: summary.totalExpenses,
      type: 'expense',
      icon: TrendingDown,
      trend: '-0%',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {cards.map((card, index) => (
        <div 
          key={index} 
          className={`${card.bgColor} p-6 rounded-xl border ${card.borderColor} shadow-sm`}
        >
          <div className="flex items-center mb-2">
            <card.icon className={`h-5 w-5 ${card.color} mr-2`} />
            <h3 className="text-gray-600 text-sm font-medium">{card.title}</h3>
          </div>
          <div className="flex items-baseline justify-between">
            <p className={`text-3xl font-bold ${card.color}`}>
              ${Math.abs(card.amount).toFixed(2)}
            </p>
            <span className={`text-sm font-medium ${
              card.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'
            }`}>
              {card.trend}
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            {summary.transactionCount} total transactions
          </p>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;