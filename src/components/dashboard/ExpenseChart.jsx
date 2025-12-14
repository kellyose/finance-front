import React from 'react';

const ExpenseChart = ({ expenses = [] }) => {
  // Process real expense data
  const expenseData = Array.isArray(expenses) ? expenses : [];
  
  if (expenseData.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Expense Distribution</h3>
        <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg">
          <p className="text-gray-500">No expense data available</p>
        </div>
      </div>
    );
  }

  // Group by category with colors
  const categoryData = expenseData.reduce((acc, expense) => {
    const category = expense.category || 'Uncategorized';
    const amount = Math.abs(expense.amount || 0);
    
    const existing = acc.find(item => item.name === category);
    if (existing) {
      existing.value += amount;
    } else {
      acc.push({ 
        name: category, 
        value: amount,
        color: getCategoryColor(category, acc.length) // Assign color based on category
      });
    }
    return acc;
  }, []);

  const maxValue = Math.max(...categoryData.map(item => item.value), 1);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Expense Distribution</h3>
      
      <div className="h-64 space-y-4">
        {categoryData.map((item, index) => {
          const widthPercent = (item.value / maxValue) * 100;
          return (
            <div key={`chart-${index}`} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-gray-700">{item.name}</span>
                <span className="text-gray-600">${item.value.toFixed(2)}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="h-2.5 rounded-full transition-all duration-300"
                  style={{ 
                    width: `${widthPercent}%`,
                    backgroundColor: item.color 
                  }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Category Legend */}
      <div className="mt-6">
        <h4 className="text-sm font-medium text-gray-700 mb-3">Categories</h4>
        <div className="flex flex-wrap gap-3">
          {categoryData.map((item, index) => (
            <div key={`legend-${index}`} className="flex items-center">
              <div 
                className="w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-sm text-gray-600">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Color palette with distinct colors
const CATEGORY_COLORS = [
  '#FF6B6B', // Red
  '#4ECDC4', // Teal
  '#FFD166', // Yellow
  '#06D6A0', // Green
  '#118AB2', // Blue
  '#EF476F', // Pink
  '#7209B7', // Purple
  '#F3722C', // Orange
  '#277DA1', // Dark Blue
  '#90BE6D', // Light Green
  '#F8961E', // Dark Orange
  '#43AA8B', // Sea Green
  '#577590', // Gray Blue
  '#F94144', // Bright Red
  '#F9C74F', // Gold
];

// Common category color mapping
const CATEGORY_COLOR_MAP = {
  'Food': '#FF6B6B',
  'Groceries': '#EF476F',
  'Restaurant': '#F94144',
  'Dining': '#F3722C',
  'Transport': '#118AB2',
  'Fuel': '#277DA1',
  'Car': '#577590',
  'Taxi': '#4ECDC4',
  'Shopping': '#7209B7',
  'Clothing': '#9D4EDD',
  'Electronics': '#5A189A',
  'Bills': '#06D6A0',
  'Electricity': '#43AA8B',
  'Water': '#90BE6D',
  'Internet': '#4D908E',
  'Entertainment': '#FFD166',
  'Movies': '#F9C74F',
  'Games': '#F8961E',
  'Healthcare': '#FF6B6B',
  'Medical': '#EF476F',
  'Pharmacy': '#F94144',
  'Income': '#06D6A0',
  'Salary': '#43AA8B',
  'Other': '#6C757D',
  'Uncategorized': '#ADB5BD',
};

// Get color for a category
const getCategoryColor = (category, index) => {
  // First, check if we have a predefined color for this category
  const normalizedCategory = category.trim();
  if (CATEGORY_COLOR_MAP[normalizedCategory]) {
    return CATEGORY_COLOR_MAP[normalizedCategory];
  }
  
  // If not, assign a color from the palette based on index
  return CATEGORY_COLORS[index % CATEGORY_COLORS.length];
};

export default ExpenseChart;