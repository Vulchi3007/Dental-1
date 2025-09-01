import React, { useState } from 'react';
import { Menu, X, Phone, MapPin, Clock, Bluetooth as Tooth } from 'lucide-react';
import TreatmentMegaMenu from './components/TreatmentMegaMenu';
import WhatsAppButton from './components/WhatsAppButton';
import TreatmentsPage from './components/TreatmentsPage';
import TestimonialsPage from './components/TestimonialsPage';
import TravelPage from './components/TravelPage';
import AboutPage from './components/AboutPage';
import DoctorsPage from './components/DoctorsPage';
import TreatmentDetailPage from './components/TreatmentDetailPage';
import RootCanalPage from './components/TreatmentPages/RootCanalPage';
import WhiteFillingsPage from './components/TreatmentPages/WhiteFillingsPage';
import TeethWhiteningPage from './components/TreatmentPages/TeethWhiteningPage';
import DentalImplantsPage from './components/TreatmentPages/DentalImplantsPage';
import BracesPage from './components/TreatmentPages/BracesPage';
import ClearAlignersPage from './components/TreatmentPages/ClearAlignersPage';
import DentalVeneersPage from './components/TreatmentPages/DentalVeneersPage';
import SmileMakeoverPage from './components/TreatmentPages/SmileMakeoverPage';
import CrownsPage from './components/TreatmentPages/CrownsPage';
import BridgesPage from './components/TreatmentPages/BridgesPage';
import ScalingCleaningPage from './components/TreatmentPages/ScalingCleaningPage';
import ToothExtractionPage from './components/TreatmentPages/ToothExtractionPage';
import WisdomToothPage from './components/TreatmentPages/WisdomToothPage';
import GumContouringPage from './components/TreatmentPages/GumContouringPage';
import LingualBracesPage from './components/TreatmentPages/LingualBracesPage';
import RetainersPage from './components/TreatmentPages/RetainersPage';
import DenturesPage from './components/TreatmentPages/DenturesPage';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const handleBookConsultation = () => {
    setShowAppointmentModal(true);
  };

  const closeAppointmentModal = () => {
    setShowAppointmentModal(false);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'treatments':
        return <TreatmentsPage onBookConsultation={handleBookConsultation} onNavigate={handleNavigation} />;
      case 'testimonials':
        return <TestimonialsPage />;
      case 'travel':
        return <TravelPage />;
      case 'about':
        return <AboutPage />;
      case 'doctors':
        return <DoctorsPage onNavigate={handleNavigation} />;
      case 'treatments-root-canal':
        return <RootCanalPage onNavigate={handleNavigation} />;
      case 'treatments-white-fillings':
        return <WhiteFillingsPage onNavigate={handleNavigation} />;
      case 'treatments-teeth-whitening':
        return <TeethWhiteningPage onNavigate={handleNavigation} />;
      case 'treatments-dental-implants':
        return <DentalImplantsPage onNavigate={handleNavigation} />;
      case 'treatments-braces':
        return <BracesPage onNavigate={handleNavigation} />;
      case 'treatments-clear-aligners':
        return <ClearAlignersPage onNavigate={handleNavigation} />;
      case 'treatments-dental-veneers':
        return <DentalVeneersPage onNavigate={handleNavigation} />;
      case 'treatments-smile-makeover':
        return <SmileMakeoverPage onNavigate={handleNavigation} />;
      case 'treatments-crowns':
        return <CrownsPage onNavigate={handleNavigation} />;
      case 'treatments-bridges':
        return <BridgesPage onNavigate={handleNavigation} />;
      case 'treatments-scaling-cleaning':
        return <ScalingCleaningPage onNavigate={handleNavigation} />;
      case 'treatments-tooth-extraction':
        return <ToothExtractionPage onNavigate={handleNavigation} />;
      case 'treatments-wisdom-tooth':
        return <WisdomToothPage onNavigate={handleNavigation} />;
      case 'treatments-gum-contouring':
        return <GumContouringPage onNavigate={handleNavigation} />;
      case 'treatments-lingual-braces':
        return <LingualBracesPage onNavigate={handleNavigation} />;
      case 'treatments-retainers':
        return <RetainersPage onNavigate={handleNavigation} />;
      case 'treatments-dentures':
        return <DenturesPage onNavigate={handleNavigation} />;
      default:
        return <HomePage onNavigate={handleNavigation} onBookConsultation={handleBookConsultation} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center cursor-pointer" onClick={() => handleNavigation('home')}>
              <Tooth className="h-8 w-8 text-mint mr-3" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Sans Cavité</h1>
                <p className="text-xs text-gray-600">Premium Dental Tourism</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => handleNavigation('home')}
                className={`transition-all duration-200 px-3 py-2 rounded-lg ${currentPage === 'home' ? 'text-mint bg-mint/10' : 'text-gray-600 hover:text-mint hover:bg-mint/5 active:bg-mint/20'}`}
              >
                Home
              </button>
              <TreatmentMegaMenu onNavigate={handleNavigation} currentPage={currentPage} />
              <button 
                onClick={() => handleNavigation('doctors')}
                className={`transition-all duration-200 px-3 py-2 rounded-lg ${currentPage === 'doctors' ? 'text-mint bg-mint/10' : 'text-gray-600 hover:text-mint hover:bg-mint/5 active:bg-mint/20'}`}
              >
                Doctors
              </button>
              <button 
                onClick={() => handleNavigation('testimonials')}
                className={`transition-all duration-200 px-3 py-2 rounded-lg ${currentPage === 'testimonials' ? 'text-mint bg-mint/10' : 'text-gray-600 hover:text-mint hover:bg-mint/5 active:bg-mint/20'}`}
              >
                Testimonials
              </button>
              <button 
                onClick={() => handleNavigation('travel')}
                className={`transition-all duration-200 px-3 py-2 rounded-lg ${currentPage === 'travel' ? 'text-mint bg-mint/10' : 'text-gray-600 hover:text-mint hover:bg-mint/5 active:bg-mint/20'}`}
              >
                Travel Guide
              </button>
              <button 
                onClick={() => handleNavigation('about')}
                className={`transition-all duration-200 px-3 py-2 rounded-lg ${currentPage === 'about' ? 'text-mint bg-mint/10' : 'text-gray-600 hover:text-mint hover:bg-mint/5 active:bg-mint/20'}`}
              >
                About
              </button>
            </nav>

            {/* Contact Info & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <a href="tel:+919821274474" className="hidden lg:flex items-center text-mint hover:text-mint-dark transition-all duration-200 px-3 py-2 rounded-lg hover:bg-mint/5 active:bg-mint/20">
                <Phone className="h-4 w-4 mr-2" />
                <span className="font-semibold">+91 98212 74474</span>
              </a>
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-gray-600 hover:text-mint transition-all duration-200 p-2 rounded-lg hover:bg-mint/5 active:bg-mint/20"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-1">
              <button 
                onClick={() => handleNavigation('home')}
                className={`block w-full text-left px-3 py-2 rounded-md transition-all duration-200 ${
                  currentPage === 'home' ? 'text-mint bg-mint/10' : 'text-gray-600 hover:text-mint hover:bg-mint/5 active:bg-mint/20'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => handleNavigation('treatments')}
                className={`block w-full text-left px-3 py-2 rounded-md transition-all duration-200 ${
                  currentPage === 'treatments' ? 'text-mint bg-mint/10' : 'text-gray-600 hover:text-mint hover:bg-mint/5 active:bg-mint/20'
                }`}
              >
                Treatments
              </button>
              <button 
                onClick={() => handleNavigation('doctors')}
                className={`block w-full text-left px-3 py-2 rounded-md transition-all duration-200 ${
                  currentPage === 'doctors' ? 'text-mint bg-mint/10' : 'text-gray-600 hover:text-mint hover:bg-mint/5 active:bg-mint/20'
                }`}
              >
                Doctors
              </button>
              <button 
                onClick={() => handleNavigation('testimonials')}
                className={`block w-full text-left px-3 py-2 rounded-md transition-all duration-200 ${
                  currentPage === 'testimonials' ? 'text-mint bg-mint/10' : 'text-gray-600 hover:text-mint hover:bg-mint/5 active:bg-mint/20'
                }`}
              >
                Testimonials
              </button>
              <button 
                onClick={() => handleNavigation('travel')}
                className={`block w-full text-left px-3 py-2 rounded-md transition-all duration-200 ${
                  currentPage === 'travel' ? 'text-mint bg-mint/10' : 'text-gray-600 hover:text-mint hover:bg-mint/5 active:bg-mint/20'
                }`}
              >
                Travel Guide
              </button>
              <button 
                onClick={() => handleNavigation('about')}
                className={`block w-full text-left px-3 py-2 rounded-md transition-all duration-200 ${
                  currentPage === 'about' ? 'text-mint bg-mint/10' : 'text-gray-600 hover:text-mint hover:bg-mint/5 active:bg-mint/20'
                }`}
              >
                About
              </button>
              <a href="tel:+919821274474" className="block w-full text-left px-3 py-2 text-mint font-semibold hover:bg-mint/5 active:bg-mint/20 rounded-md transition-all duration-200">
                Call +91 98212 74474
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>
        {renderPage()}
      </main>

      {/* Footer */}
      <Footer />

      {/* WhatsApp Button */}
      <WhatsAppButton />

      {/* Appointment Modal */}
      {showAppointmentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Book Your Consultation</h3>
            <p className="text-gray-600 mb-6">
              Ready to transform your smile? Contact us directly to schedule your free consultation.
            </p>
            <div className="space-y-4">
              <a 
                href="tel:+919821274474"
                className="block w-full bg-mint text-white text-center py-3 rounded-xl font-semibold hover:bg-mint-dark active:bg-mint-800 transition-all duration-200 transform active:scale-95"
              >
                Call +91 98212 74474
              </a>
              <a 
                href="https://wa.me/919821274474"
                className="block w-full bg-green-500 text-white text-center py-3 rounded-xl font-semibold hover:bg-green-600 active:bg-green-700 transition-all duration-200 transform active:scale-95"
              >
                WhatsApp Us
              </a>
              <button 
                onClick={closeAppointmentModal}
                className="block w-full border border-gray-300 text-gray-600 text-center py-3 rounded-xl font-semibold hover:bg-gray-50 active:bg-gray-100 transition-all duration-200 transform active:scale-95"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// HomePage Component
const HomePage = ({ onNavigate, onBookConsultation }: { onNavigate: (page: string) => void; onBookConsultation: () => void }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-mint/10 to-mint/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-from-left">
              <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Transform Your Smile in 
                <span className="text-transparent bg-gradient-to-r from-mint-600 to-mint-500 bg-clip-text"> Mumbai</span>
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Save up to 85% on world-class dental treatments. Experience premium dental tourism 
                with ISO-certified care, 24/7 support, and stunning results that last a lifetime.
              </p>
              
              {/* Key Benefits */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-mint rounded-full"></div>
                  <span className="text-gray-700 font-medium">Save up to 85%</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-mint rounded-full"></div>
                  <span className="text-gray-700 font-medium">ISO Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-mint rounded-full"></div>
                  <span className="text-gray-700 font-medium">24/7 Support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-mint rounded-full"></div>
                  <span className="text-gray-700 font-medium">English Speaking</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={onBookConsultation}
                  className="bg-gradient-to-r from-mint-600 to-mint-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-mint-700 hover:to-mint-600 active:from-mint-800 active:to-mint-700 transition-all duration-300 shadow-large hover:shadow-glow-lg transform hover:-translate-y-1 active:translate-y-0"
                >
                  Book Free Consultation 🦷
                </button>
                <a 
                  href="tel:+919821274474"
                  className="border-2 border-mint-500 text-mint-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-mint-500 hover:text-white active:bg-mint-600 transition-all duration-300 hover:shadow-medium transform hover:-translate-y-1 active:translate-y-0 text-center"
                >
                  Call +91 98212 74474
                </a>
              </div>
            </div>
            
            <div className="animate-slide-in-from-right">
              <img 
                src="/Main page.png" 
                alt="Sans Cavité Dental Clinic - Premium dental care in Mumbai" 
                className="rounded-3xl shadow-2xl w-full hover:shadow-glow-lg transition-shadow duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-mint-50 to-mint-100 rounded-2xl hover:from-mint-100 hover:to-mint-200 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-large">
              <div className="text-4xl font-bold text-mint-600 mb-2">5000+</div>
              <div className="text-gray-600">International Patients</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-mint-50 to-mint-100 rounded-2xl hover:from-mint-100 hover:to-mint-200 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-large">
              <div className="text-4xl font-bold text-mint-600 mb-2">85%</div>
              <div className="text-gray-600">Cost Savings</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-mint-50 to-mint-100 rounded-2xl hover:from-mint-100 hover:to-mint-200 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-large">
              <div className="text-4xl font-bold text-mint-600 mb-2">25+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-mint-50 to-mint-100 rounded-2xl hover:from-mint-100 hover:to-mint-200 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-large">
              <div className="text-4xl font-bold text-mint-600 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-br from-mint/5 to-mint/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why International Patients Choose Sans Cavité</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience world-class dental care with significant cost savings and exceptional service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-large transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-mint-100 to-mint-50 p-4 rounded-2xl w-fit mb-6 hover:from-mint-200 hover:to-mint-100 transition-all duration-300">
                <Phone className="h-8 w-8 text-mint-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Patient Support</h3>
              <p className="text-gray-600 leading-relaxed">Round-the-clock assistance for international patients with emergency support and multilingual staff.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-large transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-mint-100 to-mint-50 p-4 rounded-2xl w-fit mb-6 hover:from-mint-200 hover:to-mint-100 transition-all duration-300">
                <MapPin className="h-8 w-8 text-mint-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Prime Mumbai Location</h3>
              <p className="text-gray-600 leading-relaxed">Conveniently located near international airport with easy access to hotels and tourist attractions.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-large transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-mint-100 to-mint-50 p-4 rounded-2xl w-fit mb-6 hover:from-mint-200 hover:to-mint-100 transition-all duration-300">
                <Clock className="h-8 w-8 text-mint-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quick Treatment</h3>
              <p className="text-gray-600 leading-relaxed">Complete most treatments in 3-7 days, perfect for combining with your Indian vacation experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Treatments Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Dental Treatments</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most sought-after treatments with transparent pricing and exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Dental Implants", price: "From ₹20,000", savings: "Save ₹1,80,000", image: "/Dental implant.jpeg" },
              { name: "Smile Makeover", price: "From ₹80,000", savings: "Save ₹7,20,000", image: "/smile makeover.jpeg" },
              { name: "Teeth Whitening", price: "From ₹5,000", savings: "Save ₹15,000", image: "/teeth-whitening.jpg" }
            ].map((treatment, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-soft hover:shadow-large transition-all duration-300 transform hover:-translate-y-2 group">
                <img 
                  src={treatment.image} 
                  alt={treatment.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-mint-600 transition-colors">{treatment.name}</h3>
                  <p className="text-2xl font-bold text-mint-600 mb-2">{treatment.price}</p>
                  <p className="text-green-600 font-semibold text-sm mb-4">{treatment.savings}</p>
                  <button 
                    onClick={() => onNavigate('treatments')}
                    className="w-full bg-gradient-to-r from-mint-600 to-mint-500 text-white py-3 rounded-xl font-semibold hover:from-mint-700 hover:to-mint-600 active:from-mint-800 active:to-mint-700 transition-all duration-300 shadow-medium hover:shadow-glow transform hover:-translate-y-1 active:translate-y-0"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => onNavigate('treatments')}
              className="bg-gradient-to-r from-mint-600 to-mint-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-mint-700 hover:to-mint-600 active:from-mint-800 active:to-mint-700 transition-all duration-300 shadow-large hover:shadow-glow-lg transform hover:-translate-y-1 active:translate-y-0"
            >
              View All Treatments
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-mint/10 to-mint/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Transform Your Smile?</h2>
          <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
            Join thousands of satisfied international patients who have saved money and achieved beautiful smiles with Sans Cavité.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={onBookConsultation}
              className="bg-gradient-to-r from-mint-600 to-mint-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-mint-700 hover:to-mint-600 active:from-mint-800 active:to-mint-700 transition-all duration-300 shadow-large hover:shadow-glow-lg transform hover:-translate-y-1 active:translate-y-0"
            >
              Get Free Consultation
            </button>
            <a 
              href="tel:+919821274474"
              className="border-2 border-mint-500 text-mint-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-mint-500 hover:text-white active:bg-mint-600 transition-all duration-300 hover:shadow-medium transform hover:-translate-y-1 active:translate-y-0 text-center"
            >
              Call +91 98212 74474
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;