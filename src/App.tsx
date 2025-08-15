import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Clock, Shield, Award, Star, CheckCircle, Calendar, MessageCircle, Bluetooth as Tooth, AlertCircle, DollarSign, Plane, Heart, Globe, Users, TrendingDown, FileText } from 'lucide-react';

// Import page components
import TreatmentMegaMenu from './components/TreatmentMegaMenu';
import DentalImplantsPage from './components/TreatmentPages/DentalImplantsPage';
import TeethWhiteningPage from './components/TreatmentPages/TeethWhiteningPage';
import DentalVeneersPage from './components/TreatmentPages/DentalVeneersPage';
import RootCanalPage from './components/TreatmentPages/RootCanalPage';
import WhiteFillingsPage from './components/TreatmentPages/WhiteFillingsPage';
import CrownsPage from './components/TreatmentPages/CrownsPage';
import BridgesPage from './components/TreatmentPages/BridgesPage';
import SmileMakeoverPage from './components/TreatmentPages/SmileMakeoverPage';
import GumContouringPage from './components/TreatmentPages/GumContouringPage';
import BracesPage from './components/TreatmentPages/BracesPage';
import ClearAlignersPage from './components/TreatmentPages/ClearAlignersPage';
import ToothExtractionPage from './components/TreatmentPages/ToothExtractionPage';
import WisdomToothPage from './components/TreatmentPages/WisdomToothPage';
import DenturesPage from './components/TreatmentPages/DenturesPage';
import ScalingCleaningPage from './components/TreatmentPages/ScalingCleaningPage';
import RetainersPage from './components/TreatmentPages/RetainersPage';
import LingualBracesPage from './components/TreatmentPages/LingualBracesPage';
import TreatmentsPage from './components/TreatmentsPage';
import AboutPage from './components/AboutPage';
import DoctorsPage from './components/DoctorsPage';
import TestimonialsPage from './components/TestimonialsPage';
import TravelPage from './components/TravelPage';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    treatment: '',
    message: '',
    preferredDate: ''
  });

  // Function to change page and scroll to top
  const navigateToPage = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you within 24 hours.');
  };

  const renderHomePage = () => (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-mint/5 to-white py-8 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <div className="bg-mint/10 text-mint px-4 py-2 rounded-full text-sm font-semibold w-fit mb-6">
                <span className="inline-flex items-center">
                  <span className="w-2 h-2 bg-mint-500 rounded-full mr-2 animate-pulse-gentle"></span>
                  Save up to 85% on Dental Treatments
                </span>
              </div>
              
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
  Premium Dental Care in
  <span className="text-transparent bg-gradient-to-r from-mint-600 to-mint-500 bg-clip-text"> Mumbai, India</span>
</h1>
<p className="mt-6 text-xl text-gray-600 leading-relaxed">
  Experience world-class dental treatments at Sans Cavité with savings up to 85%. Our state-of-the-art facility in Mumbai combines advanced technology with personalized care for international patients.
</p>

{/* Expanded Info */}
<p className="mt-4 text-lg text-gray-600 leading-relaxed">
  Whether you're visiting from the USA, UK, UAE, Australia, Canada, or beyond, our multilingual team ensures a seamless dental tourism experience from start to finish. We assist with travel planning, hotel accommodations, and local transportation to make your journey hassle-free.
</p>
<p className="mt-4 text-lg text-gray-600 leading-relaxed">
  Our internationally trained dentists specialize in cosmetic dentistry, dental implants, smile makeovers, and full mouth rehabilitation. We follow global sterilization protocols and use FDA-approved materials for your safety and peace of mind.
</p>
<p className="mt-4 text-lg text-gray-600 leading-relaxed">
  Combine your dental care with a memorable vacation in Mumbai—India's vibrant city filled with rich culture, beautiful beaches, and historic landmarks. Your smile transformation is just a flight away.
</p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => navigateToPage('contact')}
                  className="bg-gradient-to-r from-mint-600 to-mint-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-mint-700 hover:to-mint-600 transition-all duration-300 shadow-large hover:shadow-glow-lg transform hover:-translate-y-1 text-center"
                >
                  Get Free Quote
                </button>
                <button 
                  onClick={() => navigateToPage('appointment')}
                  className="border-2 border-mint-500 text-mint-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-mint-500 hover:text-white transition-all duration-300 hover:shadow-medium transform hover:-translate-y-1 text-center"
                >
                  Book Appointment
                </button>
              </div>
              <div className="mt-8 flex items-center space-x-8">
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-mint-500 mr-2" />
                  <span className="text-sm text-gray-600">NABH Accredited</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-mint-500 mr-2" />
                  <span className="text-sm text-gray-600">ISO Certified</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-mint-500 mr-2" />
                  <span className="text-sm text-gray-600">25+ Countries Served</span>
                </div>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <img 
                src="/Main page.png" 
                alt="Dental Tourism - Premium dental care in Mumbai, India" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Us Brief */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Sans Cavité</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mumbai's premier dental tourism destination with 15+ years of excellence
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose Us?</h3>
              <p className="text-gray-600 mb-6">
                Since 2010, Sans Cavité has been transforming smiles for international patients with world-class care, 
                cutting-edge technology, and significant cost savings compared to Western countries.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-mint-600">5000+</div>
                  <div className="text-sm text-gray-600">Patients Treated</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-mint-600">98%</div>
                  <div className="text-sm text-gray-600">Satisfaction Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-mint-600">25+</div>
                  <div className="text-sm text-gray-600">Countries</div>
                </div>
              </div>
              <button 
                onClick={() => navigateToPage('about')}
                className="bg-gradient-to-r from-mint-600 to-mint-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-mint-700 hover:to-mint-600 transition-all duration-300 shadow-medium hover:shadow-glow transform hover:-translate-y-1"
              >
                Learn More About Us
              </button>
            </div>
            <div>
              <img 
                src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqSXV-CG6vXS2Gim3kylN3FGUtXQZlrdCT3_ZPnzM5ns0VZG2R_GFn4tvGNVqMbAL1qZQnaoVp6Zq8BUnrhC8hhDdX6YMapE8izw0A7lraquruqO0m8e_thCZ4UtVKMIWuI1ZwH=s1360-w1360-h1020-rw" 
                alt="Modern dental clinic"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Brief */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Treatments</h2>
            <p className="text-xl text-gray-600">Comprehensive dental care with international standards</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 text-center group">
              <div className="bg-gradient-to-br from-mint-100 to-mint-50 p-3 rounded-xl w-fit mx-auto mb-4 group-hover:from-mint-200 group-hover:to-mint-100 transition-all duration-300">
                <Tooth className="h-8 w-8 text-mint-600 group-hover:text-mint-700 transition-colors duration-300" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Dental Implants</h3>
              <p className="text-sm text-mint-600 font-semibold mb-3">From ₹20,000</p>
              <p className="text-xs text-gray-500">Permanent tooth replacement</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 text-center group">
              <div className="bg-gradient-to-br from-mint-100 to-mint-50 p-3 rounded-xl w-fit mx-auto mb-4 group-hover:from-mint-200 group-hover:to-mint-100 transition-all duration-300">
                <Star className="h-8 w-8 text-mint-600 group-hover:text-mint-700 transition-colors duration-300" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Smile Makeover</h3>
              <p className="text-sm text-mint-600 font-semibold mb-3">From ₹80,000</p>
              <p className="text-xs text-gray-500">Complete transformation</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 text-center group">
              <div className="bg-gradient-to-br from-mint-100 to-mint-50 p-3 rounded-xl w-fit mx-auto mb-4 group-hover:from-mint-200 group-hover:to-mint-100 transition-all duration-300">
                <Heart className="h-8 w-8 text-mint-600 group-hover:text-mint-700 transition-colors duration-300" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Root Canal</h3>
              <p className="text-sm text-mint-600 font-semibold mb-3">From ₹8,000</p>
              <p className="text-xs text-gray-500">Pain-free treatment</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 text-center group">
              <div className="bg-gradient-to-br from-mint-100 to-mint-50 p-3 rounded-xl w-fit mx-auto mb-4 group-hover:from-mint-200 group-hover:to-mint-100 transition-all duration-300">
                <Shield className="h-8 w-8 text-mint-600 group-hover:text-mint-700 transition-colors duration-300" />
              </div>
              <h3 className="font-semibent text-gray-900 mb-2">Full Mouth</h3>
              <p className="text-sm text-mint-600 font-semibold mb-3">From ₹1,50,000</p>
              <p className="text-xs text-gray-500">Complete restoration</p>
            </div>
          </div>
          
          <div className="text-center">
            <button 
              onClick={() => navigateToPage('treatments')}
              className="bg-gradient-to-r from-mint-600 to-mint-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-mint-700 hover:to-mint-600 transition-all duration-300 shadow-medium hover:shadow-glow transform hover:-translate-y-1"
            >
              View All Treatments & Gallery
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Sans Cavité?</h2>
            <p className="text-xl text-gray-600">Excellence in dental care with international standards</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl text-center shadow-soft hover:shadow-medium transition-all duration-300 group">
              <div className="bg-gradient-to-br from-mint-100 to-mint-50 p-3 rounded-xl w-fit mx-auto mb-4 group-hover:from-mint-200 group-hover:to-mint-100 transition-all duration-300">
                <TrendingDown className="h-8 w-8 text-mint-600 group-hover:text-mint-700 transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Save 60-85%</h3>
              <p className="text-gray-600 text-sm">Compared to Australia, UK, USA</p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl text-center shadow-soft hover:shadow-medium transition-all duration-300 group">
              <div className="bg-gradient-to-br from-mint-100 to-mint-50 p-3 rounded-xl w-fit mx-auto mb-4 group-hover:from-mint-200 group-hover:to-mint-100 transition-all duration-300">
                <Award className="h-8 w-8 text-mint-600 group-hover:text-mint-700 transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Modern Technology</h3>
              <p className="text-gray-600 text-sm">Latest equipment & techniques</p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl text-center shadow-soft hover:shadow-medium transition-all duration-300 group">
              <div className="bg-gradient-to-br from-mint-100 to-mint-50 p-3 rounded-xl w-fit mx-auto mb-4 group-hover:from-mint-200 group-hover:to-mint-100 transition-all duration-300">
                <Users className="h-8 w-8 text-mint-600 group-hover:text-mint-700 transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Dentists</h3>
              <p className="text-gray-600 text-sm">15+ years international experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Brief */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Patient Stories</h2>
            <p className="text-xl text-gray-600">Hear from our satisfied international patients</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">
                "I saved over $20,000 compared to Australia and received exceptional care. 
                My new smile has completely transformed my confidence!"
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=100" 
                  alt="Patient"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold">Sarah Johnson</div>
                  <div className="text-sm text-gray-600">Australia - Smile Makeover</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">
                "The quality of care exceeded my expectations. Dr. Abhuta and his team are truly world-class. 
                I would definitely recommend Sans Cavité."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=100" 
                  alt="Patient"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold">James Mitchell</div>
                  <div className="text-sm text-gray-600">UK - Dental Implants</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <button 
              onClick={() => navigateToPage('testimonials')}
              className="bg-gradient-to-r from-mint-600 to-mint-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-mint-700 hover:to-mint-600 transition-all duration-300 shadow-medium hover:shadow-glow transform hover:-translate-y-1"
            >
              Read All Reviews & See Before/After Gallery
            </button>
          </div>
        </div>
      </section>

      {/* Travel Assistance Brief */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Travel Support</h2>
            <p className="text-xl text-gray-600">We handle everything for your dental tourism journey</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <Plane className="h-12 w-12 text-mint mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Visa & Travel</h3>
              <p className="text-gray-600 text-sm">Complete visa assistance and airport pickup</p>
            </div>
            <div className="text-center">
              <MapPin className="h-12 w-12 text-mint mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Accommodation</h3>
              <p className="text-gray-600 text-sm">Comfortable stays near our clinic</p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 text-mint mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">Round-the-clock patient care</p>
            </div>
          </div>
          
          <div className="text-center">
            <button 
              onClick={() => navigateToPage('dental-tourism')}
              className="bg-gradient-to-r from-mint-600 to-mint-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-mint-700 hover:to-mint-600 transition-all duration-300 shadow-medium hover:shadow-glow transform hover:-translate-y-1"
            >
              View Travel Services & Mumbai Guide
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Brief */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Common Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to frequently asked questions</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Is dental treatment in India safe?</h3>
              <p className="text-gray-600 text-sm">Yes, we follow international safety protocols with NABH accreditation.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="font-semibold text-gray-900 mb-2">What visa do I need?</h3>
              <p className="text-gray-600 text-sm">Medical Visa (M Visa) - we provide complete assistance.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="font-semibold text-gray-900 mb-2">How long should I stay?</h3>
              <p className="text-gray-600 text-sm">3-14 days depending on treatment complexity.</p>
            </div>
          </div>
          
          <div className="text-center">
            <button 
              onClick={() => navigateToPage('faq')}
              className="bg-gradient-to-r from-mint-600 to-mint-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-mint-700 hover:to-mint-600 transition-all duration-300 shadow-medium hover:shadow-glow transform hover:-translate-y-1"
            >
              View All FAQs & Detailed Answers
            </button>
          </div>
        </div>
      </section>

      {/* Blog Brief */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Dental Tourism Insights</h2>
            <p className="text-xl text-gray-600">Expert guides and patient stories</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-gray-50 rounded-2xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Blog post"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">How to Save 85% on Dental Care</h3>
                <p className="text-gray-600 text-sm">Complete cost breakdown and savings guide</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl overflow-hidden">
              <img 
                src="/Dental planning.png" 
                alt="Blog post"
                className="w-full h-49 object-cover"
              />
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Preparing for Your Dental Trip</h3>
                <p className="text-gray-600 text-sm">Essential planning guide for dental tourism</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl overflow-hidden">
              <img 
                src="https://www.andbeyond.com/wp-content/uploads/sites/5/Chhatrapati-Shivaji-Terminus-railway-station-mumbai.jpg" 
                alt="Blog post"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Exploring Mumbai</h3>
                <p className="text-gray-600 text-sm">Top attractions for dental tourists</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <button 
              onClick={() => navigateToPage('blog')}
              className="bg-gradient-to-r from-mint-600 to-mint-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-mint-700 hover:to-mint-600 transition-all duration-300 shadow-medium hover:shadow-glow transform hover:-translate-y-1"
            >
              Read All Articles & Guides
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Your Free Consultation</h2>
            <p className="text-xl text-gray-600">Contact us today to start your dental journey</p>
          </div>
          
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-mint focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-mint focus:border-transparent"
                  required
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-mint focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Treatment Interested In</label>
                <select 
                  name="treatment"
                  value={formData.treatment}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-mint focus:border-transparent"
                  required
                >
                  <option value="">Select Treatment</option>
                  <option value="implants">Dental Implants</option>
                  <option value="smile-makeover">Smile Makeover</option>
                  <option value="root-canal">Root Canal</option>
                  <option value="full-mouth">Full Mouth Restoration</option>
                  <option value="veneers">Veneers</option>
                  <option value="whitening">Teeth Whitening</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-mint focus:border-transparent"
                placeholder="Tell us about your dental needs..."
              ></textarea>
            </div>
            
            <div className="text-center">
              <button 
                type="submit"
                className="bg-gradient-to-r from-mint-600 to-mint-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-mint-700 hover:to-mint-600 transition-all duration-300 shadow-large hover:shadow-glow-lg transform hover:-translate-y-1"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );

  const renderContactPage = () => (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Sans Cavité</h1>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-mint mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Address</h3>
                  <p className="text-gray-600">1st floor, Ravi Krupa, 103, BA Khimji Rd, Matunga East, Mumbai, Maharashtra 400019</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-mint mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">Main: +91 98212 74474</p>
                  <p className="text-red-600 font-semibold">Emergency: +91 98195 74474 (24/7)</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-mint mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">info@sanscavite.com</p>
                  <p className="text-gray-600">Shaurinabhuta@sanscavite.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-mint mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Office Hours</h3>
                  <p className="text-gray-600">Monday–Friday: 8:00 AM – 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 9:00 AM – 4:00 PM</p>
                  <p className="text-red-600 font-semibold">Sunday: Emergency Only</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Schedule Consultation</h3>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-mint focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-mint focus:border-transparent"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-mint focus:border-transparent"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Treatment</label>
                <select 
                  name="treatment"
                  value={formData.treatment}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-mint focus:border-transparent"
                  required
                >
                  <option value="">Select Treatment</option>
                  <option value="implants">Dental Implants</option>
                  <option value="smile-makeover">Smile Makeover</option>
                  <option value="root-canal">Root Canal</option>
                  <option value="full-mouth">Full Mouth Restoration</option>
                  <option value="veneers">Veneers</option>
                  <option value="whitening">Teeth Whitening</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-mint focus:border-transparent"
                  placeholder="Describe your dental needs..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-mint-600 to-mint-500 text-white py-3 rounded-xl font-semibold hover:from-mint-700 hover:to-mint-600 transition-all duration-300 shadow-medium hover:shadow-glow transform hover:-translate-y-1"
              >
                Schedule Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAppointmentPage = () => (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Schedule Your Appointment</h1>
          <p className="text-xl text-gray-600">Book your consultation and start your dental tourism journey</p>
        </div>
        
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-mint focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-mint focus:border-transparent"
                required
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-mint focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
              <input 
                type="date" 
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-mint focus:border-transparent"
              />
            </div>
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Treatment of Interest *</label>
            <select 
              name="treatment"
              value={formData.treatment}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-mint focus:border-transparent"
              required
            >
              <option value="">Select Treatment</option>
              <option value="implants">Dental Implants</option>
              <option value="smile-makeover">Smile Makeover</option>
              <option value="root-canal">Root Canal + Crown</option>
              <option value="full-mouth">Full Mouth Restoration</option>
              <option value="veneers">Veneers & Cosmetic Dentistry</option>
              <option value="whitening">Teeth Whitening</option>
              <option value="consultation">General Consultation</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Additional Information</label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-mint focus:border-transparent"
              placeholder="Please describe your dental concerns..."
            ></textarea>
          </div>
          
          <div className="text-center">
            <button 
              type="submit"
              className="bg-gradient-to-r from-mint-600 to-mint-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-mint-700 hover:to-mint-600 transition-all duration-300 shadow-large hover:shadow-glow-lg transform hover:-translate-y-1"
            >
              Book My Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  const renderPage = () => {
    // Handle individual treatment pages with SEO-friendly URLs
    if (currentPage.startsWith('treatments-')) {
      const treatmentId = currentPage.replace('treatments-', '');
      
      switch (treatmentId) {
        case 'dental-implants':
          return <DentalImplantsPage onNavigate={navigateToPage} />;
        case 'teeth-whitening':
          return <TeethWhiteningPage onNavigate={navigateToPage} />;
        case 'dental-veneers':
          return <DentalVeneersPage onNavigate={navigateToPage} />;
        case 'root-canal':
          return <RootCanalPage onNavigate={navigateToPage} />;
        case 'white-fillings':
          return <WhiteFillingsPage onNavigate={navigateToPage} />;
        case 'crowns':
          return <CrownsPage onNavigate={navigateToPage} />;
        case 'bridges':
          return <BridgesPage onNavigate={navigateToPage} />;
        case 'smile-makeover':
          return <SmileMakeoverPage onNavigate={navigateToPage} />;
        case 'gum-contouring':
          return <GumContouringPage onNavigate={navigateToPage} />;
        case 'braces':
          return <BracesPage onNavigate={navigateToPage} />;
        case 'clear-aligners':
          return <ClearAlignersPage onNavigate={navigateToPage} />;
        case 'tooth-extraction':
          return <ToothExtractionPage onNavigate={navigateToPage} />;
        case 'wisdom-tooth':
          return <WisdomToothPage onNavigate={navigateToPage} />;
        case 'dentures':
          return <DenturesPage onNavigate={navigateToPage} />;
        case 'scaling-cleaning':
          return <ScalingCleaningPage onNavigate={navigateToPage} />;
        case 'retainers':
          return <RetainersPage onNavigate={navigateToPage} />;
        case 'lingual-braces':
          return <LingualBracesPage onNavigate={navigateToPage} />;
        default:
          // For treatments not yet implemented, redirect to treatments page
          return <TreatmentsPage onBookConsultation={() => navigateToPage('appointment')} onNavigate={navigateToPage} />;
      }
    }
    
    switch (currentPage) {
      case 'about':
        return <AboutPage />;
      case 'doctors':
        return <DoctorsPage onNavigate={navigateToPage} />;
      case 'treatments':
        return <TreatmentsPage onBookConsultation={() => navigateToPage('appointment')} onNavigate={navigateToPage} />;
      case 'testimonials':
        return <TestimonialsPage />;
      case 'dental-tourism':
        return <TravelPage />;
      case 'contact':
        return renderContactPage();
      case 'appointment':
        return renderAppointmentPage();
      default:
        return renderHomePage();
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center cursor-pointer" onClick={() => navigateToPage('home')}>
              <img 
                src="/Logo_sc-1.png" 
                alt="Sans Cavité Logo" 
                className="h-16 w-auto"
              />
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={() => navigateToPage('home')}
                className={`relative inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold
    transition-all duration-300 ease-in-out transform hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-mint-500 focus-visible:ring-offset-1
    ${currentPage === 'home'
      ? 'bg-gradient-to-r from-mint-600 to-mint-500 text-white shadow-md hover:shadow-lg'
      : 'text-gray-700 hover:text-mint-700 hover:bg-mint-50 hover:shadow-lg'
    }`}       >
                Home
              </button>
              <button 
                onClick={() => navigateToPage('about')}
                 className={`relative inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold
    transition-all duration-300 ease-in-out transform hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-mint-500 focus-visible:ring-offset-1
    ${currentPage === 'about'
      ? 'bg-gradient-to-r from-mint-600 to-mint-500 text-white shadow-md hover:shadow-lg'
      : 'text-gray-700 hover:text-mint-700 hover:bg-mint-50 hover:shadow-lg'
    }`}      >
                About
              </button>
              <button 
                onClick={() => navigateToPage('doctors')}
                className={`relative inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold
    transition-all duration-300 ease-in-out transform hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-mint-500 focus-visible:ring-offset-1
    ${currentPage === 'doctors'
      ? 'bg-gradient-to-r from-mint-600 to-mint-500 text-white shadow-md hover:shadow-lg'
      : 'text-gray-700 hover:text-mint-700 hover:bg-mint-50 hover:shadow-lg'
    }`}
              >
                Doctors
              </button>
              <TreatmentMegaMenu onNavigate={navigateToPage} currentPage={currentPage} />
              <button 
                onClick={() => navigateToPage('dental-tourism')}
                className={`relative inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold
    transition-all duration-300 ease-in-out transform hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-mint-500 focus-visible:ring-offset-1
    ${currentPage === 'dental-tourism'
      ? 'bg-gradient-to-r from-mint-600 to-mint-500 text-white shadow-md hover:shadow-lg'
      : 'text-gray-700 hover:text-mint-700 hover:bg-mint-50 hover:shadow-lg'
    }`}
              >
                Dental Tourism
              </button>
              <button 
                onClick={() => navigateToPage('testimonials')}
                className={`relative inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold
    transition-all duration-300 ease-in-out transform hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-mint-500 focus-visible:ring-offset-1
    ${currentPage === 'testimonials'
      ? 'bg-gradient-to-r from-mint-600 to-mint-500 text-white shadow-md hover:shadow-lg'
      : 'text-gray-700 hover:text-mint-700 hover:bg-mint-50 hover:shadow-lg'
    }`}
              >
                Testimonials
              </button>
              <button 
                onClick={() => navigateToPage('contact')}
                className={`relative inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold
    transition-all duration-300 ease-in-out transform hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-mint-500 focus-visible:ring-offset-1
    ${currentPage === 'contact'
      ? 'bg-gradient-to-r from-mint-600 to-mint-500 text-white shadow-md hover:shadow-lg'
      : 'text-gray-700 hover:text-mint-700 hover:bg-mint-50 hover:shadow-lg'
    }`}
              >
                Contact
              </button>
            </nav>

            <div className="flex items-center space-x-4">
              <a href="tel:+919821274474" className="flex items-center space-x-2 text-mint-600 hover:text-mint-700 transition-colors">
                <Phone className="h-5 w-5" />
                <span className="text-sm font-medium hidden lg:block">+91 98212 74474</span>
              </a>
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => {navigateToPage('home'); setIsMenuOpen(false);}}
                className="block w-full text-left px-5 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-mint-700 hover:bg-mint-100 active:bg-mint-200 transition-all duration-200 ease-in-out"


              >
                Home
              </button>
              <button 
                onClick={() => {navigateToPage('about'); setIsMenuOpen(false);}}
                className="block w-full text-left px-5 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-mint-700 hover:bg-mint-100 active:bg-mint-200 transition-all duration-200 ease-in-out"

              >
                About
              </button>
              <button 
                onClick={() => {navigateToPage('doctors'); setIsMenuOpen(false);}}
                className="block w-full text-left px-5 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-mint-700 hover:bg-mint-100 active:bg-mint-200 transition-all duration-200 ease-in-out"

              >
                Doctors
              </button>
              <button 
                onClick={() => {navigateToPage('treatments'); setIsMenuOpen(false);}}
                className="block w-full text-left px-5 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-mint-700 hover:bg-mint-100 active:bg-mint-200 transition-all duration-200 ease-in-out"

              >
                Treatments
              </button>
              <button 
                onClick={() => {navigateToPage('dental-tourism'); setIsMenuOpen(false);}}
                className="block w-full text-left px-5 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-mint-700 hover:bg-mint-100 active:bg-mint-200 transition-all duration-200 ease-in-out"

              >
                Dental Tourism
              </button>
              <button 
                onClick={() => {navigateToPage('testimonials'); setIsMenuOpen(false);}}
                className="block w-full text-left px-5 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-mint-700 hover:bg-mint-100 active:bg-mint-200 transition-all duration-200 ease-in-out"

              >
                Testimonials
              </button>
              <button 
                onClick={() => {navigateToPage('contact'); setIsMenuOpen(false);}}
                className="block w-full text-left px-5 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-mint-700 hover:bg-mint-100 active:bg-mint-200 transition-all duration-200 ease-in-out"

              >
                Contact
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Page Content */}
      {renderPage()}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img 
                  src="/Logo_sc-1.png" 
                  alt="Sans Cavité Logo" 
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-gray-400 mb-4">
                Premium dental care in Mumbai with international standards and affordable pricing for dental tourism.
              </p>
              <div className="flex space-x-4">
                <a href="tel:+919821274474" className="bg-mint text-white px-4 py-2 rounded-lg hover:bg-mint-dark transition-colors text-sm">
                  Call Now
                </a>
                <a href="mailto:info@sanscavite.com" className="border border-mint text-mint px-4 py-2 rounded-lg hover:bg-mint hover:text-white transition-colors text-sm">
                  Email Us
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => navigateToPage('about')} className="hover:text-mint-400 transition-colors">About Us</button></li>
                <li><button onClick={() => navigateToPage('treatments')} className="hover:text-mint-400 transition-colors">Treatments</button></li>
                <li><button onClick={() => navigateToPage('testimonials')} className="hover:text-mint-400 transition-colors">Testimonials</button></li>
                <li><button onClick={() => navigateToPage('blog')} className="hover:text-mint-400 transition-colors">Blog</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <p>1st floor, Ravi Krupa, 103, BA Khimji Rd</p>
                <p>Matunga East, Mumbai 400019</p>
                <p>Phone: +91 98212 74474</p>
                <p className="text-red-400">Emergency: +91 98195 74474</p>
                <p>info@sanscavite.com</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Office Hours</h3>
              <div className="space-y-2 text-gray-400">
                <p>Monday–Friday: 8:00 AM – 6:00 PM</p>
                <p>Saturday: 9:00 AM – 4:00 PM</p>
                <p className="text-red-400">Sunday: Emergency Only</p>
                <div className="mt-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Award className="h-4 w-4 text-mint-400" />
                    <span className="text-sm">ISO Certified</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-mint-400" />
                    <span className="text-sm">NABH Accredited</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-center md:text-left">
                &copy; 2024 Sans Cavité Dental Clinic. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-mint-400 transition-colors text-sm">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-mint-400 transition-colors text-sm">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}

export default App;