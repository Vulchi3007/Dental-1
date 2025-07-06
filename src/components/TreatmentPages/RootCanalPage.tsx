import React from 'react';
import { ArrowLeft, Clock, Calendar, CheckCircle, Star, Phone, MessageCircle, Heart } from 'lucide-react';
import AmazingTransformations from '../AmazingTransformations';

interface TreatmentPageProps {
  onNavigate: (page: string) => void;
}

const RootCanalPage = ({ onNavigate }: TreatmentPageProps) => {
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
                <Heart className="h-12 w-12 text-mint mr-4" />
                <div className="bg-mint/10 text-mint px-4 py-2 rounded-full text-sm font-semibold">
                  General Dentistry
                </div>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Root Canal</h1>
              <p className="text-2xl font-bold text-mint mb-6">From ₹4,000</p>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Advanced endodontic therapy to save infected teeth with painless, precision treatment using modern techniques and equipment.
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
                src="/root-canal-before-and-after.webp" 
                alt="Root Canal Treatment"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Root Canal Treatment?</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Root canal treatment is a dental procedure used to treat infected or severely damaged teeth. It involves removing the infected pulp from inside the tooth, cleaning and disinfecting the root canals, and then filling and sealing the space to prevent further infection.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              This treatment is one of the most effective ways to save a natural tooth that has been severely damaged by decay, trauma, or infection. Our advanced techniques and modern equipment ensure a comfortable, pain-free experience while preserving your natural tooth.
            </p>
          </div>

          {/* Quick Info */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-mint/5 p-6 rounded-2xl text-center">
              <Clock className="h-8 w-8 text-mint mb-3 mx-auto" />
              <h3 className="font-semibold text-gray-900 mb-2">Duration</h3>
              <p className="text-gray-600">60-90 minutes</p>
            </div>
            <div className="bg-mint/5 p-6 rounded-2xl text-center">
              <Calendar className="h-8 w-8 text-mint mb-3 mx-auto" />
              <h3 className="font-semibold text-gray-900 mb-2">Sessions</h3>
              <p className="text-gray-600">1-3 visits</p>
            </div>
            <div className="bg-mint/5 p-6 rounded-2xl text-center">
              <Star className="h-8 w-8 text-mint mb-3 mx-auto" />
              <h3 className="font-semibold text-gray-900 mb-2">Success Rate</h3>
              <p className="text-gray-600">85-97%</p>
            </div>
          </div>

          {/* How is it performed? */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">How is the Treatment Performed?</h2>
            <div className="space-y-4">
              {[
                'Local anesthesia is administered to numb the treatment area completely',
                'Small access hole is carefully drilled into the affected tooth',
                'Infected pulp and bacteria are completely removed from root canals',
                'Root canals are thoroughly cleaned, disinfected, and shaped',
                'Canals are filled with biocompatible gutta-percha material',
                'Access hole is sealed with temporary or permanent filling',
                'Crown placement may be recommended for additional protection'
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Benefits of Root Canal Treatment</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Saves your natural tooth from extraction',
                'Eliminates severe pain and infection completely',
                'Prevents spread of infection to surrounding teeth',
                'Restores normal chewing and biting function',
                'Cost-effective compared to extraction and replacement',
                'Maintains proper jaw alignment and facial structure',
                'High success rate of 85-97% with proper care',
                'Pain-free procedure with modern techniques'
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Save Your Natural Tooth Today</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Don't let tooth pain control your life. Our painless root canal treatment can save your natural tooth and eliminate pain permanently.
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

export default RootCanalPage;