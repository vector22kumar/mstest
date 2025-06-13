import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Search, User, Settings, HelpCircle, Clock, Star, ChevronRight, PlayCircle, FileText, Headphones, Shield, Globe, Zap, Award } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('support');
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const supportCategories = [
    { id: 'office', name: 'Microsoft Office', icon: FileText, color: 'bg-blue-500', description: 'Word, Excel, PowerPoint, Outlook' },
    { id: 'windows', name: 'Windows', icon: Settings, color: 'bg-green-500', description: 'Windows 11, Windows 10, Updates' },
    { id: 'azure', name: 'Azure', icon: PlayCircle, color: 'bg-blue-600', description: 'Cloud services, DevOps, AI' },
    { id: 'teams', name: 'Microsoft Teams', icon: MessageCircle, color: 'bg-purple-500', description: 'Collaboration, Meetings, Chat' }
  ];

  const quickActions = [
    { title: 'Schedule a Call', description: 'Book a call with our support team', icon: Phone, color: 'bg-blue-50 text-blue-600' },
    { title: 'Live Chat', description: 'Get instant help via chat', icon: MessageCircle, color: 'bg-green-50 text-green-600' },
    { title: 'Check Service Status', description: 'View current service health', icon: Clock, color: 'bg-orange-50 text-orange-600' },
    { title: 'Community Forums', description: 'Connect with other users', icon: User, color: 'bg-purple-50 text-purple-600' }
  ];

  const features = [
    { title: '24/7 Support', description: 'Round-the-clock assistance', icon: Clock },
    { title: 'Expert Technicians', description: 'Certified Microsoft professionals', icon: Award },
    { title: 'Secure & Private', description: 'Your data is always protected', icon: Shield },
    { title: 'Global Coverage', description: 'Support in multiple languages', icon: Globe }
  ];

  const handleCall = (type: string) => {
    const phoneNumber = '1-800-MICROSOFT';
    const message = `Connecting you to Microsoft Support...\n\nCall Type: ${type}\nPhone: ${phoneNumber}\n\nPlease have your product information ready.`;
    alert(message);
    
    // Simulate call analytics
    console.log(`Call initiated: ${type} at ${new Date().toISOString()}`);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for: "${searchQuery}"\n\nThis would normally redirect to search results.`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className={`bg-white border-b border-gray-200 sticky top-0 z-40 transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <div>
                  <span className="text-xl font-bold text-gray-900">Microsoft</span>
                  <div className="text-sm text-gray-600">Customer Support</div>
                </div>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Products</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Solutions</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Resources</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Community</a>
            </nav>

            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors rounded-lg hover:bg-gray-100">
                <User className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleCall('header-support')}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-200 flex items-center space-x-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">Call Support</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-5 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white opacity-5 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white opacity-5 rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              How can we help you today?
            </h1>
            <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-3xl mx-auto">
              Get expert support for Microsoft products and services with our dedicated team
            </p>
            
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-10">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                <input
                  type="text"
                  placeholder="Search for help articles, products, or issues..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-14 pr-4 py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-lg text-lg"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Search
                </button>
              </div>
            </form>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => handleCall('hero-priority')}
                className="bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Phone className="w-6 h-6" />
                <span>Priority Support Call</span>
              </button>
              <button 
                onClick={() => handleCall('hero-chat')}
                className="border-2 border-white text-white px-10 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <MessageCircle className="w-6 h-6" />
                <span>Start Live Chat</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Quick Actions</h2>
            <p className="text-xl text-gray-600">Get help fast with these popular support options</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickActions.map((action, index) => (
              <div key={index} className="bg-white rounded-xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group transform hover:-translate-y-2">
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 ${action.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <action.icon className="w-7 h-7" />
                  </div>
                  <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">{action.title}</h3>
                <p className="text-gray-600">{action.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Browse by Product</h2>
            <p className="text-xl text-gray-600">Find specialized support for your Microsoft products</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportCategories.map((category) => (
              <div key={category.id} className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group transform hover:-translate-y-2">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-14 h-14 ${category.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <category.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-500">{category.description}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">Get specialized help with {category.name.toLowerCase()} products and services</p>
                <button 
                  onClick={() => handleCall(`${category.id}-support`)}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all duration-200 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call {category.name} Support</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Popular Help Articles</h2>
            <p className="text-xl text-gray-600">Find answers to common questions and issues</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "How to reset your Microsoft password", views: "1.2M views", rating: 4.8, category: "Account" },
              { title: "Troubleshooting Microsoft Office installation", views: "980K views", rating: 4.6, category: "Office" },
              { title: "Setting up Microsoft Teams for your organization", views: "750K views", rating: 4.7, category: "Teams" },
              { title: "Windows Update troubleshooting guide", views: "2.1M views", rating: 4.9, category: "Windows" },
              { title: "Azure billing and subscription management", views: "650K views", rating: 4.5, category: "Azure" },
              { title: "Microsoft 365 security best practices", views: "890K views", rating: 4.8, category: "Security" }
            ].map((article, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-200 cursor-pointer group">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded-full">{article.category}</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{article.rating}</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>{article.views}</span>
                  <ChevronRight className="w-4 h-4 group-hover:text-blue-600 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">Still need help?</h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">Our expert support team is available 24/7 to assist you with any Microsoft product or service</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => handleCall('contact-phone')}
              className="bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Phone className="w-6 h-6" />
              <span>Call Now: 1-800-MICROSOFT</span>
            </button>
            <button 
              onClick={() => handleCall('contact-callback')}
              className="border-2 border-white text-white px-10 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Headphones className="w-6 h-6" />
              <span>Request Callback</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <span className="text-2xl font-bold">Microsoft</span>
              </div>
              <p className="text-gray-400 mb-4">Empowering every person and organization on the planet to achieve more.</p>
              <div className="flex space-x-4">
                <button className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <Globe className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-lg">Products</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Microsoft 365</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Windows</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Azure</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Teams</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Surface</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-lg">Support</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Service Status</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Training</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-lg">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Accessibility</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Microsoft Corporation. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Fixed Call Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-50">
        <button
          onClick={() => handleCall('fixed-emergency')}
          className="bg-red-500 hover:bg-red-600 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 animate-pulse group"
          title="Emergency Support"
        >
          <Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>
        <button
          onClick={() => handleCall('fixed-general')}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 group"
          title="General Support"
        >
          <Headphones className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </div>
  );
}

export default App;