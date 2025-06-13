import React, { useState } from 'react';
import { Phone, MessageCircle, Search, User, Settings, HelpCircle, Clock, Star, ChevronRight, PlayCircle, FileText, Headphones } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('support');
  const [searchQuery, setSearchQuery] = useState('');

  const supportCategories = [
    { id: 'office', name: 'Microsoft Office', icon: FileText, color: 'bg-blue-500' },
    { id: 'windows', name: 'Windows', icon: Settings, color: 'bg-green-500' },
    { id: 'azure', name: 'Azure', icon: PlayCircle, color: 'bg-blue-600' },
    { id: 'teams', name: 'Microsoft Teams', icon: MessageCircle, color: 'bg-purple-500' }
  ];

  const quickActions = [
    { title: 'Schedule a Call', description: 'Book a call with our support team', icon: Phone },
    { title: 'Live Chat', description: 'Get instant help via chat', icon: MessageCircle },
    { title: 'Check Service Status', description: 'View current service health', icon: Clock },
    { title: 'Community Forums', description: 'Connect with other users', icon: User }
  ];

  const handleCall = (type: string) => {
    alert(`Initiating ${type} call...`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-sm flex items-center justify-center">
                  <span className="text-white font-bold text-sm">M</span>
                </div>
                <span className="text-xl font-semibold text-gray-900">Microsoft Support</span>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Products</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Solutions</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Resources</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Community</a>
            </nav>

            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                <User className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleCall('header')}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Support</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How can we help you today?
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Get support for Microsoft products and services
            </p>
            
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => handleCall('hero-priority')}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Priority Support Call</span>
              </button>
              <button 
                onClick={() => handleCall('hero-chat')}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Start Live Chat</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200 cursor-pointer group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <action.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{action.title}</h3>
                <p className="text-gray-600">{action.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Browse by Product</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportCategories.map((category) => (
              <div key={category.id} className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow duration-200 cursor-pointer group">
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {category.name}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">Get help with {category.name.toLowerCase()} products and services</p>
                <button 
                  onClick={() => handleCall(`${category.id}-support`)}
                  className="w-full bg-blue-50 text-blue-600 py-2 rounded-md hover:bg-blue-100 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {category.name} Support</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Popular Help Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "How to reset your Microsoft password", views: "1.2M views", rating: 4.8 },
              { title: "Troubleshooting Microsoft Office installation", views: "980K views", rating: 4.6 },
              { title: "Setting up Microsoft Teams for your organization", views: "750K views", rating: 4.7 },
              { title: "Windows Update troubleshooting guide", views: "2.1M views", rating: 4.9 },
              { title: "Azure billing and subscription management", views: "650K views", rating: 4.5 },
              { title: "Microsoft 365 security best practices", views: "890K views", rating: 4.8 }
            ].map((article, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200 cursor-pointer">
                <h3 className="text-lg font-semibold mb-3 text-gray-900 hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>{article.views}</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>{article.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Still need help?</h2>
          <p className="text-xl mb-8 opacity-90">Our support team is available 24/7 to assist you</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => handleCall('contact-phone')}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now: 1-800-MICROSOFT</span>
            </button>
            <button 
              onClick={() => handleCall('contact-callback')}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Headphones className="w-5 h-5" />
              <span>Request Callback</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-sm flex items-center justify-center">
                  <span className="text-white font-bold text-sm">M</span>
                </div>
                <span className="text-xl font-semibold">Microsoft</span>
              </div>
              <p className="text-gray-400">Empowering every person and organization on the planet to achieve more.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Microsoft 365</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Windows</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Azure</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Teams</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Service Status</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Microsoft. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Fixed Call Button */}
      <button
        onClick={() => handleCall('fixed-emergency')}
        className="fixed bottom-6 right-6 bg-red-500 hover:bg-red-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-50 animate-pulse"
        title="Emergency Support"
      >
        <Phone className="w-6 h-6" />
      </button>
    </div>
  );
}

export default App;