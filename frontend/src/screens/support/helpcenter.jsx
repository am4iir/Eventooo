import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import DarkVeil from '../../components/DarkVeil';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openFAQ, setOpenFAQ] = useState(null);
  const [helpArticles, setHelpArticles] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);

  const categories = [
    { id: 'all', name: 'All Topics', icon: '' },
    { id: 'getting-started', name: 'Getting Started', icon: '' },
    { id: 'events', name: 'Events', icon: '' },
    { id: 'account', name: 'Account', icon: '' },
    { id: 'technical', name: 'Technical', icon: '' },
  ];

  // Fetch help articles and FAQs from backend
  useEffect(() => {
    const fetchHelpData = async () => {
      try {
        setLoading(true);
        
        // TODO: Replace with actual API endpoints
        // const articlesResponse = await fetch('/api/help/articles');
        // const faqsResponse = await fetch('/api/help/faqs');
        // const articlesData = await articlesResponse.json();
        // const faqsData = await faqsResponse.json();
        // setHelpArticles(articlesData);
        // setFaqs(faqsData);

        // Temporary static data (remove when backend is ready)
        const staticArticles = [
          {
            category: 'getting-started',
            title: 'How to Create Your First Event',
            description: 'Step-by-step guide to creating and publishing your first campus event',
            icon: '',
            content: 'Learn how to set up your event details, add images, set dates and locations, and publish your event to reach students across campus.'
          },
          {
            category: 'getting-started',
            title: 'Understanding the Dashboard',
            description: 'Navigate through your personalized dashboard efficiently',
            icon: '',
            content: 'Your dashboard is your control center for managing events, viewing analytics, and connecting with attendees.'
          },
          {
            category: 'events',
            title: 'Managing Event Attendees',
            description: 'Track RSVPs and communicate with your audience',
            icon: '',
            content: 'View who has registered for your event, send updates, and manage capacity limits effectively.'
          },
          {
            category: 'events',
            title: 'Event Categories and Tags',
            description: 'Organize events for better discoverability',
            icon: '',
            content: 'Use categories like Academic, Social, Sports, and Cultural to help students find events that match their interests.'
          },
          {
            category: 'account',
            title: 'Profile Settings',
            description: 'Customize your profile and preferences',
            icon: '',
            content: 'Update your personal information, notification preferences, and privacy settings.'
          },
          {
            category: 'account',
            title: 'Security and Privacy',
            description: 'Keep your account safe and secure',
            icon: '',
            content: 'Learn about two-factor authentication, password requirements, and data privacy options.'
          },
          {
            category: 'technical',
            title: 'Troubleshooting Login Issues',
            description: 'Resolve common login and access problems',
            icon: '',
            content: 'Solutions for forgotten passwords, account lockouts, and authentication errors.'
          },
          {
            category: 'technical',
            title: 'Browser Compatibility',
            description: 'Ensure optimal performance across devices',
            icon: '',
            content: 'Eventooo works best on Chrome, Firefox, Safari, and Edge. Mobile apps are also available.'
          },
        ];

        const staticFAQs = [
          {
            question: 'How do I create an event?',
            answer: 'Click the "Create Event" button in the navigation bar. Fill in the event details including title, description, date, time, location, and category. Add an eye-catching cover image and click "Publish" when ready.',
            category: 'events'
          },
          {
            question: 'Is Eventooo free to use?',
            answer: 'Yes! Eventooo is completely free for students and campus organizations. We believe in making event management accessible to everyone.',
            category: 'getting-started'
          },
          {
            question: 'Can I edit an event after publishing?',
            answer: 'Absolutely! Go to "My Events" in your dashboard, select the event you want to edit, and click the edit button. Changes will be updated immediately and attendees will be notified.',
            category: 'events'
          },
          {
            question: 'How do I RSVP to an event?',
            answer: 'Simply browse events, click on one you\'re interested in, and hit the "RSVP" button. You\'ll receive a confirmation email and calendar invite.',
            category: 'events'
          },
          {
            question: 'What if I forget my password?',
            answer: 'Click "Forgot Password" on the login page. Enter your email address, and we\'ll send you a secure link to reset your password.',
            category: 'account'
          },
          {
            question: 'Can I cancel my RSVP?',
            answer: 'Yes, you can cancel your RSVP anytime before the event starts. Go to "My Events" and click "Cancel RSVP" on the event card.',
            category: 'events'
          },
          {
            question: 'How do I contact event organizers?',
            answer: 'Each event page has a "Contact Organizer" button that lets you send a direct message to the event creator.',
            category: 'events'
          },
          {
            question: 'Can I invite friends to events?',
            answer: 'Yes! Each event has a share button that lets you invite friends via email, social media, or by copying the event link.',
            category: 'events'
          },
        ];

        setHelpArticles(staticArticles);
        setFaqs(staticFAQs);
      } catch (error) {
        console.error('Error fetching help data:', error);
        // Handle error (show error message to user)
      } finally {
        setLoading(false);
      }
    };

    fetchHelpData();
  }, []);

  const filteredArticles = helpArticles.filter(article => 
    (activeCategory === 'all' || article.category === activeCategory) &&
    (searchQuery === '' || 
     article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
     article.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const filteredFAQs = faqs.filter(faq =>
    (activeCategory === 'all' || faq.category === activeCategory) &&
    (searchQuery === '' || 
     faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
     faq.answer.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-black relative">
      {/* DarkVeil Background */}
      <div className="fixed inset-0 w-full h-full">
        <DarkVeil />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        
        {loading ? (
          // Loading State
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-white text-lg">Loading help center...</p>
            </div>
          </div>
        ) : (
          <>
            {/* Hero Section */}
            <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
                  How can we help you?
                </h1>
                <p className="text-lg text-gray-300 mb-8">
                  Search our help center or browse categories below
                </p>
                
                {/* Search Bar */}
                <div className="relative max-w-2xl mx-auto">
                  <input
                    type="text"
                    placeholder="Search for help..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-6 py-4 pl-14 bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all"
                  />
                  <svg 
                    className="absolute left-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50'
                  : 'bg-white/5 backdrop-blur border border-white/20 text-gray-300 hover:bg-white/10'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="backdrop-blur-xl bg-white/5 border border-white/20 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">Articles</div>
            <div className="text-3xl font-bold text-white mb-1">{helpArticles.length}</div>
            <div className="text-gray-400 text-sm">Help Articles</div>
          </div>
          <div className="backdrop-blur-xl bg-white/5 border border-white/20 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-pink-400 mb-2">FAQs</div>
            <div className="text-3xl font-bold text-white mb-1">{faqs.length}</div>
            <div className="text-gray-400 text-sm">Frequently Asked</div>
          </div>
          <div className="backdrop-blur-xl bg-white/5 border border-white/20 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">Support</div>
            <div className="text-3xl font-bold text-white mb-1">24/7</div>
            <div className="text-gray-400 text-sm">Always Available</div>
          </div>
        </div>
      </div>

      {/* Help Articles */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-3xl font-bold text-white mb-8">Popular Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article, index) => (
            <div
              key={index}
              className="group backdrop-blur-xl bg-white/5 border border-white/20 hover:border-purple-400 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 cursor-pointer"
            >
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                {article.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                {article.description}
              </p>
              <span className="text-purple-400 text-sm font-medium inline-flex items-center gap-2">
                Read more
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          ))}
        </div>
        
        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4 text-purple-400">•</div>
            <p className="text-gray-400">No articles found matching your search.</p>
          </div>
        )}
      </div>

      {/* FAQs */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <div
              key={index}
              className="backdrop-blur-xl bg-white/5 border border-white/20 rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-white font-medium pr-4">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-purple-400 flex-shrink-0 transition-transform duration-300 ${
                    openFAQ === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openFAQ === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-300 border-t border-white/10 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredFAQs.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4 text-purple-400">•</div>
            <p className="text-gray-400">No FAQs found matching your search.</p>
          </div>
        )}
      </div>

      {/* Contact Support Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="backdrop-blur-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-3xl p-8 md:p-12 text-center">
          <div className="text-5xl mb-4 text-purple-400 font-bold">Support</div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Still need help?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Our support team is here to help! Get in touch and we'll respond as soon as possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@eventooo.com"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-full transition-all duration-300 shadow-lg shadow-purple-500/50 inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Support
            </a>
            <a
              href="/contact"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/20 text-white font-bold rounded-full transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Contact Form
            </a>
          </div>
        </div>
      </div>

      {/* Additional Resources */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Additional Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href="/faq"
            className="backdrop-blur-xl bg-white/5 border border-white/20 hover:border-purple-400 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 text-center group"
          >
            <div className="text-4xl mb-3 font-bold text-purple-400">FAQ</div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
              Full FAQ
            </h3>
            <p className="text-gray-400 text-sm">
              Browse all frequently asked questions
            </p>
          </a>
          <a
            href="/privacy"
            className="backdrop-blur-xl bg-white/5 border border-white/20 hover:border-purple-400 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 text-center group"
          >
            <div className="text-4xl mb-3 font-bold text-pink-400">Privacy</div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
              Privacy Policy
            </h3>
            <p className="text-gray-400 text-sm">
              Learn how we protect your data
            </p>
          </a>
          <a
            href="/terms"
            className="backdrop-blur-xl bg-white/5 border border-white/20 hover:border-purple-400 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 text-center group"
          >
            <div className="text-4xl mb-3 font-bold text-purple-400">Terms</div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
              Terms of Service
            </h3>
            <p className="text-gray-400 text-sm">
              Review our terms and conditions
            </p>
          </a>
        </div>
      </div>

      <Footer />
          </>
        )}
      </div>
    </div>
  );
};

export default HelpCenter;
