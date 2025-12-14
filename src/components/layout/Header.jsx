import { Menu } from 'lucide-react';

const Header = ({ onMenuClick }) => {
  return (
    <header className="bg-white shadow-sm border-b z-10">
      <div className="flex items-center justify-between h-16 px-4">
        {/* Left side */}
        <div className="flex items-center">
          <button
            onClick={onMenuClick}
            className="p-2 rounded-md text-gray-600 hover:bg-gray-100 lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
          <h1 className="ml-2 text-xl font-semibold text-gray-800 lg:ml-0">
            Finance Dashboard
          </h1>
        </div>

        {/* Right side - Simplified since user info is in sidebar */}
        <div className="flex items-center space-x-2">
          <span className="hidden lg:inline text-sm text-gray-600">
            Manage your finances
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;