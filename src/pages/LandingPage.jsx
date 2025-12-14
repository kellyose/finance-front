import { Link } from 'react-router-dom';
import { Wallet, TrendingUp, Shield, PieChart, Users, Smartphone, ChevronRight, Check, BarChart3, CreditCard, Menu, X } from 'lucide-react';
import { useState } from 'react';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="h-8 w-8 sm:h-10 sm:w-10 bg-blue-100 rounded-lg sm:rounded-xl flex items-center justify-center border border-blue-200">
              <Wallet className="h-4 w-4 sm:h-6 sm:w-6 text-blue-600" />
            </div>
            <span className="text-xl sm:text-2xl font-bold text-gray-900">FinanceFlow</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <a href="#features" className="text-gray-600 hover:text-gray-900 font-medium text-sm lg:text-base">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 font-medium text-sm lg:text-base">Pricing</a>
            <Link 
              to="/login" 
              className="px-3 py-1.5 lg:px-4 lg:py-2 text-blue-600 hover:text-blue-700 font-medium text-sm lg:text-base"
            >
              Sign In
            </Link>
            <Link 
              to="/register" 
              className="px-3 py-1.5 lg:px-4 lg:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm lg:text-base"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <a 
                href="#features" 
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-600 hover:text-gray-900 font-medium py-2"
              >
                Features
              </a>
              <a 
                href="#pricing" 
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-600 hover:text-gray-900 font-medium py-2"
              >
                Pricing
              </a>
              <Link 
                to="/login" 
                onClick={() => setIsMenuOpen(false)}
                className="text-blue-600 hover:text-blue-700 font-medium py-2"
              >
                Sign In
              </Link>
              <Link 
                to="/register" 
                onClick={() => setIsMenuOpen(false)}
                className="bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium py-2 px-4 text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="lg:w-1/2 w-full">
            <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-50 text-blue-700 rounded-lg mb-4 sm:mb-6 font-medium text-sm sm:text-base">
              <Wallet className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 flex-shrink-0" />
              Simple Finance Management
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Take Control of Your
              <span className="text-blue-600 block">Money Flow</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              FinanceFlow helps you track expenses, manage budgets, and understand your spending 
              patterns with a clean, intuitive interface. No complicated charts, just clarity.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/register" 
                className="px-5 py-2.5 sm:px-6 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center font-semibold text-sm sm:text-base flex items-center justify-center"
              >
                Start Free Trial
                <ChevronRight className="ml-1.5 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              </Link>
              <a 
                href="#features" 
                className="px-5 py-2.5 sm:px-6 sm:py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-center font-medium text-sm sm:text-base"
              >
                Learn More
              </a>
            </div>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center">
                <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mr-1.5 sm:mr-2 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-700">No credit card required</span>
              </div>
              <div className="flex items-center">
                <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mr-1.5 sm:mr-2 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-700">30-day free trial</span>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
            <div className="bg-gray-50 border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-0">
                  <div className="h-8 w-8 sm:h-10 sm:w-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Wallet className="h-4 w-4 sm:h-6 sm:w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm sm:text-base">FinanceFlow Dashboard</div>
                    <div className="text-xs sm:text-sm text-gray-500">Your financial overview</div>
                  </div>
                </div>
                <div className="text-left sm:text-right">
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">$2,670</div>
                  <div className="text-xs sm:text-sm text-gray-500">Available</div>
                </div>
              </div>
              
              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
                  <div className="flex items-center">
                    <div className="h-7 w-7 sm:h-8 sm:w-8 bg-green-100 rounded-lg flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                      <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 text-sm sm:text-base">Income</div>
                      <div className="text-xs sm:text-sm text-gray-500">This month</div>
                    </div>
                  </div>
                  <div className="text-green-600 font-semibold text-sm sm:text-base">+$4,820</div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
                  <div className="flex items-center">
                    <div className="h-7 w-7 sm:h-8 sm:w-8 bg-red-100 rounded-lg flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                      <CreditCard className="h-3 w-3 sm:h-4 sm:w-4 text-red-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 text-sm sm:text-base">Expenses</div>
                      <div className="text-xs sm:text-sm text-gray-500">This month</div>
                    </div>
                  </div>
                  <div className="text-red-600 font-semibold text-sm sm:text-base">-$2,150</div>
                </div>
              </div>
              
              {/* Simple Chart */}
              <div className="bg-white p-3 sm:p-4 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="font-medium text-gray-900 text-sm sm:text-base">Monthly Overview</div>
                  <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                </div>
                <div className="flex items-end h-16 sm:h-20 lg:h-24 space-x-1 sm:space-x-2">
                  {[60, 80, 45, 90, 65, 85, 70].map((height, i) => (
                    <div 
                      key={i}
                      style={{ height: `${height}%` }}
                      className={`flex-1 rounded-t ${
                        i % 2 === 0 ? 'bg-blue-200' : 'bg-blue-100'
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Everything You Need
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Simple tools for effective financial management
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: <Wallet className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />,
                title: "Expense Tracking",
                description: "Track your spending across categories with simple, clear interfaces",
                color: "bg-blue-100"
              },
              {
                icon: <PieChart className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />,
                title: "Budget Planning",
                description: "Set monthly budgets and get notifications when you're close to limits",
                color: "bg-green-100"
              },
              {
                icon: <BarChart3 className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />,
                title: "Financial Insights",
                description: "Understand your spending patterns with clear, simple reports",
                color: "bg-purple-100"
              },
              {
                icon: <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-red-600" />,
                title: "Bank-Level Security",
                description: "Your financial data is protected with enterprise-grade security",
                color: "bg-red-100"
              },
              {
                icon: <Users className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600" />,
                title: "Family Sharing",
                description: "Share budgets and track expenses with family members",
                color: "bg-orange-100"
              },
              {
                icon: <Smartphone className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-600" />,
                title: "Mobile Access",
                description: "Access your finances anywhere with our mobile-friendly design",
                color: "bg-indigo-100"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 hover:border-blue-300 transition-colors"
              >
                <div className={`${feature.color} h-10 w-10 sm:h-12 sm:w-12 rounded-lg flex items-center justify-center mb-3 sm:mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Simple Stats */}
      <div className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center p-4">
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">10,000+</div>
              <div className="text-sm sm:text-base text-gray-700">Active Users</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-1 sm:mb-2">$5M+</div>
              <div className="text-sm sm:text-base text-gray-700">Total Managed</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl sm:text-4xl font-bold text-purple-600 mb-1 sm:mb-2">98%</div>
              <div className="text-sm sm:text-base text-gray-700">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="h-10 w-10 sm:h-12 sm:w-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <Wallet className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 px-4">
            Ready to Simplify Your Finances?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto opacity-90 px-4">
            Join thousands who have taken control of their financial journey
          </p>
          <Link 
            to="/register" 
            className="inline-flex items-center px-6 py-2.5 sm:px-8 sm:py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-sm sm:text-base lg:text-lg mx-auto"
          >
            Start Free Trial
            <ChevronRight className="ml-1.5 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Link>
          <p className="mt-4 sm:mt-6 text-xs sm:text-sm opacity-75">
            No credit card required • Cancel anytime
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4 justify-center md:justify-start">
                <div className="h-8 w-8 sm:h-10 sm:w-10 bg-blue-100 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <Wallet className="h-4 w-4 sm:h-6 sm:w-6 text-blue-600" />
                </div>
                <span className="text-xl sm:text-2xl font-bold">FinanceFlow</span>
              </div>
              <p className="text-gray-400 text-sm sm:text-base max-w-md">
                Simple financial management for everyone
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">
                © {new Date().getFullYear()} FinanceFlow. All rights reserved.
              </p>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-6 text-gray-400 text-sm">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;