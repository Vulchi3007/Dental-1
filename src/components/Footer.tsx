import React from 'react';
import { Bluetooth as Tooth, Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Tooth className="h-8 w-8 text-mint mr-3" />
              <div>
                <h3 className="text-2xl font-bold">Sans Cavité</h3>
                <p className="text-sm text-gray-400">Premium Dental Tourism</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Mumbai's premier destination for international dental tourism. We provide world-class dental care 
              with significant cost savings, combining advanced technology with compassionate service for patients 
              from over 25 countries worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-mint transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-mint transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-mint transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-mint transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-mint mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+919821274474" className="text-gray-300 hover:text-mint transition-colors">
                    +91 98212 74474
                  </a>
                  <p className="text-sm text-gray-400">24/7 Emergency Support</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-mint mt-0.5 flex-shrink-0" />
                <div>
                  <a href="mailto:info@sanscavite.com" className="text-gray-300 hover:text-mint transition-colors">
                    info@sanscavite.com
                  </a>
                  <p className="text-sm text-gray-400">General Inquiries</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-mint mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Mumbai, Maharashtra</p>
                  <p className="text-sm text-gray-400">India</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-mint mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Mon - Sat: 9:00 AM - 8:00 PM</p>
                  <p className="text-sm text-gray-400">Sunday: By Appointment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-mint transition-colors">About Us</a>
              <a href="#" className="block text-gray-300 hover:text-mint transition-colors">Our Doctors</a>
              <a href="#" className="block text-gray-300 hover:text-mint transition-colors">Treatments</a>
              <a href="#" className="block text-gray-300 hover:text-mint transition-colors">Testimonials</a>
              <a href="#" className="block text-gray-300 hover:text-mint transition-colors">Travel Guide</a>
              <a href="#" className="block text-gray-300 hover:text-mint transition-colors">Book Consultation</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} Sans Cavité Dental Clinic. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Premium Dental Tourism | Mumbai, India
              </p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-mint transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-mint transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-mint transition-colors">Medical Disclaimer</a>
              <a href="#" className="text-gray-400 hover:text-mint transition-colors">Sitemap</a>
            </div>
          </div>
          
          {/* Additional Legal Information */}
          <div className="mt-4 pt-4 border-t border-gray-800">
            <div className="text-center">
              <p className="text-gray-500 text-xs leading-relaxed">
                Sans Cavité is a registered dental clinic in Mumbai, India. All treatments are performed by licensed dental professionals. 
                Results may vary from patient to patient. This website is for informational purposes only and does not constitute medical advice. 
                Please consult with our qualified dentists for personalized treatment recommendations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;