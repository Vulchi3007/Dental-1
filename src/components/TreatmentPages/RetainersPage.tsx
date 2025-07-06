import React from 'react';
import { ArrowLeft, Clock, Calendar, CheckCircle, Star, Phone, MessageCircle, RefreshCw } from 'lucide-react';
import AmazingTransformations from '../AmazingTransformations';

interface TreatmentPageProps {
  onNavigate: (page: string) => void;
}

const RetainersPage = ({ onNavigate }: TreatmentPageProps) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-mint/10 to-mint/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => onNavigate('treatments')}
            className="flex items-center text-mint hover:text-mint-dark transition-colors mb-8"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to All Treatments
          </button>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <RefreshCw className="h-12 w-12 text-mint mr-4" />
                <div className="bg-mint/10 text-mint px-4 py-2 rounded-full text-sm font-semibold">
                  Orthodontics
                </div>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Retainers</h1>
              <p className="text-2xl font-bold text-mint mb-6">From ₹5,000</p>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Custom-made retainers to maintain your perfect smile after orthodontic treatment, ensuring your teeth stay in their ideal positions for life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => onNavigate('appointment')}
                  className="bg-mint text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-mint-dark transition-colors shadow-lg"
                >
                  Book Free Consultation
                </button>
                <a 
                  href="tel:+919821274474"
                  className="border-2 border-mint text-mint px-8 py-4 rounded-xl text-lg font-semibold hover:bg-mint hover:text-white transition-colors text-center"
                >
                  Call +91 98212 74474
                </a>
              </div>
            </div>
            <div>
              <img 
                src="/Retainers.jpg" 
                alt="Retainers Treatment"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Treatment Details */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* What is this treatment? */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What are Retainers?</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Retainers are custom-made orthodontic devices designed to maintain the position of your teeth after completing braces or aligner treatment. They prevent your teeth from shifting back to their original positions, ensuring your investment in orthodontic treatment lasts a lifetime.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Available in both removable and fixed options, retainers are essential for maintaining your perfect smile. We offer various types including clear plastic retainers, wire retainers, and permanent bonded retainers to suit your lifestyle and preferences.
            </p>
          </div>

          {/* Quick Info */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-mint/5 p-6 rounded-2xl text-center">
              <Clock className="h-8 w-8 text-mint mb-3 mx-auto" />
              <h3 className="font-semibold text-gray-900 mb-2">Duration</h3>
              <p className="text-gray-600">30-45 minutes fitting</p>
            </div>
            <div className="bg-mint/5 p-6 rounded-2xl text-center">
              <Calendar className="h-8 w-8 text-mint mb-3 mx-auto" />
              <h3 className="font-semibold text-gray-900 mb-2">Sessions</h3>
              <p className="text-gray-600">1-2 visits</p>
            </div>
            <div className="bg-mint/5 p-6 rounded-2xl text-center">
              <Star className="h-8 w-8 text-mint mb-3 mx-auto" />
              <h3 className="font-semibold text-gray-900 mb-2">Wear Time</h3>
              <p className="text-gray-600">Lifelong maintenance</p>
            </div>
          </div>

          {/* How is it performed? */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">How is the Treatment Performed?</h2>
            <div className="space-y-4">
              {[
                'Comprehensive examination of teeth alignment and bite',
                'Precise impressions or digital scans of your teeth',
                'Selection of appropriate retainer type based on your needs',
                'Custom fabrication in specialized orthodontic laboratory',
                'Careful fitting and adjustment for optimal comfort',
                'Detailed instructions for wear schedule and care',
                'Regular follow-up appointments to monitor retention'
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                  <div className="bg-mint text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Benefits of Retainers</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Maintains perfect teeth alignment permanently',
                'Protects your orthodontic investment',
                'Prevents costly re-treatment in the future',
                'Available in removable and fixed options',
                'Custom-made for optimal fit and comfort',
                'Clear options for aesthetic appeal',
                'Easy maintenance and cleaning',
                'Long-lasting with proper care'
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-mint/5 rounded-xl">
                  <CheckCircle className="h-6 w-6 text-mint flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Types of Retainers */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Types of Retainers We Offer</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Clear Retainers</h3>
                <p className="text-gray-600 mb-4">Transparent, removable retainers that are virtually invisible when worn.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Nearly invisible appearance</li>
                  <li>• Easy to clean and maintain</li>
                  <li>• Comfortable to wear</li>
                  <li>• Removable for eating</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Wire Retainers</h3>
                <p className="text-gray-600 mb-4">Traditional retainers with wire and acrylic for reliable retention.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Durable and long-lasting</li>
                  <li>• Adjustable if needed</li>
                  <li>• Cost-effective option</li>
                  <li>• Proven effectiveness</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Fixed Retainers</h3>
                <p className="text-gray-600 mb-4">Permanent wire bonded behind teeth for continuous retention.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Permanent retention</li>
                  <li>• No compliance required</li>
                  <li>• Invisible from front view</li>
                  <li>• Ideal for lower front teeth</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Amazing Transformations */}
          <div className="mb-16">
            <AmazingTransformations showTitle={false} showStats={false} showCTA={false} />
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-mint/10 to-mint/5 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Protect Your Perfect Smile</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Don't let your teeth shift back after orthodontic treatment. Get custom retainers to maintain your beautiful, straight smile for life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button 
                onClick={() => onNavigate('appointment')}
                className="bg-mint text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-mint-dark transition-colors shadow-lg"
              >
                Schedule Free Consultation
              </button>
              <a 
                href="tel:+919821274474"
                className="border-2 border-mint text-mint px-8 py-4 rounded-xl text-lg font-semibold hover:bg-mint hover:text-white transition-colors"
              >
                <Phone className="h-5 w-5 inline mr-2" />
                Call +91 98212 74474
              </a>
            </div>
            <div className="flex justify-center">
              <a 
                href="https://wa.me/919821274474"
                className="bg-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors inline-flex items-center"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetainersPage;