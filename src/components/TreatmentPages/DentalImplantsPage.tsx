import React from 'react';
import { ArrowLeft, Clock, Calendar, CheckCircle, Star, Phone, MessageCircle, Bluetooth as Tooth } from 'lucide-react';
import AmazingTransformations from '../AmazingTransformations';

interface TreatmentPageProps {
  onNavigate: (page: string) => void;
}

const DentalImplantsPage = ({ onNavigate }: TreatmentPageProps) => {
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
                <Tooth className="h-12 w-12 text-mint mr-4" />
                <div className="bg-mint/10 text-mint px-4 py-2 rounded-full text-sm font-semibold">
                  Oral Surgery
                </div>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Dental Implants</h1>
              <p className="text-2xl font-bold text-mint mb-6">From ₹20,000</p>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Dental implants are revolutionary artificial tooth roots made of biocompatible titanium that provide the most natural-looking and permanent solution for tooth replacement.
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
                src="/Dental implant.jpeg" 
                alt="Dental Implants Treatment"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What are Dental Implants?</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Dental implants are artificial tooth roots made of biocompatible titanium that are surgically placed into the jawbone to replace missing teeth. They provide a permanent, natural-looking solution that functions exactly like your natural teeth.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Unlike dentures or bridges, dental implants integrate with your jawbone through a process called osseointegration, creating a stable foundation that can last a lifetime with proper care. They preserve jawbone density and maintain facial structure while providing superior chewing function.
            </p>
          </div>

          {/* Quick Info */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-mint/5 p-6 rounded-2xl text-center">
              <Clock className="h-8 w-8 text-mint mb-3 mx-auto" />
              <h3 className="font-semibold text-gray-900 mb-2">Duration</h3>
              <p className="text-gray-600">1-2 hours per implant</p>
            </div>
            <div className="bg-mint/5 p-6 rounded-2xl text-center">
              <Calendar className="h-8 w-8 text-mint mb-3 mx-auto" />
              <h3 className="font-semibold text-gray-900 mb-2">Sessions</h3>
              <p className="text-gray-600">3-4 visits over 4-6 months</p>
            </div>
            <div className="bg-mint/5 p-6 rounded-2xl text-center">
              <Star className="h-8 w-8 text-mint mb-3 mx-auto" />
              <h3 className="font-semibold text-gray-900 mb-2">Success Rate</h3>
              <p className="text-gray-600">95-98% success rate</p>
            </div>
          </div>

          {/* How is it performed? */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">How is the Treatment Performed?</h2>
            <div className="space-y-4">
              {[
                'Comprehensive 3D examination and detailed imaging (CBCT scan)',
                'Personalized treatment planning and implant selection',
                'Precise surgical placement of titanium implant into jawbone',
                'Healing period for osseointegration (bone fusion) - 3-6 months',
                'Abutment placement procedure to connect implant and crown',
                'Custom crown fabrication using advanced materials',
                'Final adjustments and bite verification for perfect function'
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Benefits of Dental Implants</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Permanent, lifetime tooth replacement solution',
                'Looks, feels, and functions exactly like natural teeth',
                'Preserves jawbone density and prevents bone loss',
                'No negative impact on adjacent healthy teeth',
                'Exceptional success rate of 95-98%',
                'Improved chewing efficiency and speech clarity',
                'Enhanced facial support and youthful appearance',
                'No dietary restrictions after healing'
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-mint/5 rounded-xl">
                  <CheckCircle className="h-6 w-6 text-mint flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>


          {/* Amazing Transformations */}
          <div className="mb-16">
            <AmazingTransformations showTitle={false} showStats={false} showCTA={false} />
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-mint/10 to-mint/5 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Restore Your Smile?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Schedule your free consultation today and discover how dental implants can give you back your confidence and natural smile.
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

export default DentalImplantsPage;