import { NavLink } from 'react-router-dom';
import { Wallet, PieChart, List, Settings, LogOut, User } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Sidebar = ({ open, setOpen }) => {
  const { user, logout } = useAuth();
  
  const menuItems = [
    { path: '/', icon: PieChart, label: 'Dashboard' },
    { path: '/transactions', icon: List, label: 'Transactions' },
    { path: '/categories', icon: Wallet, label: 'Categories' },
    { path: '/settings', icon: Settings, label: 'Settings' },
  ];

  const handleLogout = () => {
    logout();
    setOpen(false); // Close sidebar on mobile after logout
  };

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-30
        w-64 bg-white shadow-lg transform
        ${open ? 'translate-x-0' : '-translate-x-full'} 
        lg:translate-x-0 transition duration-300 ease-in-out
        flex flex-col
      `}>
        {/* Logo */}
        <div className="flex items-center justify-center h-16 bg-blue-600 text-white">
          <Wallet className="h-8 w-8 mr-2" />
          <span className="text-xl font-bold">FinanceFlow</span>
        </div>

        {/* User Info Section */}
        {user && (
          <div className="px-4 py-4 border-b">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="h-5 w-5 text-blue-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {user.name || 'User'}
                </p>
                <p className="text-xs text-gray-500 truncate">
                  {user.email || 'user@example.com'}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-blue-100 text-blue-700 border-r-2 border-blue-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`
              }
            >
              <item.icon className="h-5 w-5 mr-3" />
              {item.label}
            </NavLink>
          ))}
          
          {/* Logout Button - Only show if user is logged in */}
          {user && (
            <button
              onClick={handleLogout}
              className="w-full flex items-center px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors group"
            >
              <LogOut className="h-5 w-5 mr-3" />
              <span className="flex-1 text-left">Logout</span>
              <span className="text-xs text-red-400 group-hover:text-red-600">
                Sign out
              </span>
            </button>
          )}
        </nav>

        {/* Footer/Version Info */}
        <div className="px-4 py-3 border-t">
          <p className="text-xs text-gray-500 text-center">
            FinanceFlow v1.0
          </p>
          {user && (
            <p className="text-xs text-gray-400 text-center mt-1">
              Welcome back!
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;