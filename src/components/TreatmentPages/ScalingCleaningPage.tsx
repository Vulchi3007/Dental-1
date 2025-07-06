import React from 'react';
import { ArrowLeft, Clock, Calendar, CheckCircle, Star, Phone, MessageCircle, Shield } from 'lucide-react';
import AmazingTransformations from '../AmazingTransformations';

interface TreatmentPageProps {
  onNavigate: (page: string) => void;
}

const ScalingCleaningPage = ({ onNavigate }: TreatmentPageProps) => {
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
                <Shield className="h-12 w-12 text-mint mr-4" />
                <div className="bg-mint/10 text-mint px-4 py-2 rounded-full text-sm font-semibold">
                  General Dentistry
                </div>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Scaling & Cleaning</h1>
              <p className="text-2xl font-bold text-mint mb-6">From ₹1,000</p>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Professional deep cleaning to remove plaque and tartar buildup, promoting optimal oral health and preventing gum disease.
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
                src="/cleaning and scaling.jpg" 
                alt="Scaling and Cleaning Treatment"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Scaling & Cleaning?</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Scaling and cleaning is a professional dental procedure that removes plaque, tartar, and stains from your teeth and below the gum line. It's an essential preventive treatment that maintains oral health and prevents gum disease.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Using advanced ultrasonic scalers and hand instruments, our dental hygienists thoroughly clean areas that regular brushing and flossing cannot reach, leaving your teeth clean, smooth, and healthy.
            </p>
          </div>

          {/* Quick Info */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-mint/5 p-6 rounded-2xl text-center">
              <Clock className="h-8 w-8 text-mint mb-3 mx-auto" />
              <h3 className="font-semibold text-gray-900 mb-2">Duration</h3>
              <p className="text-gray-600">45-60 minutes</p>
            </div>
            <div className="bg-mint/5 p-6 rounded-2xl text-center">
              <Calendar className="h-8 w-8 text-mint mb-3 mx-auto" />
              <h3 className="font-semibold text-gray-900 mb-2">Frequency</h3>
              <p className="text-gray-600">Every 6 months</p>
            </div>
            <div className="bg-mint/5 p-6 rounded-2xl text-center">
              <Star className="h-8 w-8 text-mint mb-3 mx-auto" />
              <h3 className="font-semibold text-gray-900 mb-2">Results</h3>
              <p className="text-gray-600">Immediate improvement</p>
            </div>
          </div>

          {/* How is it performed? */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">How is the Treatment Performed?</h2>
            <div className="space-y-4">
              {[
                'Comprehensive oral examination and assessment',
                'Ultrasonic scaling to remove tartar and plaque',
                'Hand scaling for detailed cleaning in tight spaces',
                'Subgingival cleaning below the gum line',
                'Polishing to remove surface stains and smooth teeth',
                'Fluoride treatment for added protection',
                'Oral hygiene instructions and maintenance tips'
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Benefits of Regular Scaling & Cleaning</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Prevents gum disease and tooth decay',
                'Removes stubborn plaque and tartar buildup',
                'Eliminates bad breath and improves oral hygiene',
                'Brightens teeth by removing surface stains',
                'Early detection of dental problems',
                'Maintains overall oral and systemic health',
                'Prevents costly dental treatments in the future',
                'Leaves mouth feeling fresh and clean'
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-mint/5 rounded-xl">
                  <CheckCircle className="h-6 w-6 text-mint flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Who needs it? */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Who Needs Professional Cleaning?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Regular Maintenance</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Everyone should have cleaning every 6 months</li>
                  <li>• Preventive care for optimal oral health</li>
                  <li>• Maintenance of existing dental work</li>
                  <li>• Early detection of potential problems</li>
                </ul>
              </div>
              <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Immediate Need</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Visible tartar buildup on teeth</li>
                  <li>• Bleeding or swollen gums</li>
                  <li>• Persistent bad breath</li>
                  <li>• Gum recession or sensitivity</li>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Keep Your Smile Healthy & Bright</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Regular professional cleaning is the foundation of good oral health. Schedule your cleaning today and maintain your beautiful, healthy smile.
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

export default ScalingCleaningPage;