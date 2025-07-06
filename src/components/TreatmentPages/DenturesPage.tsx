import React from 'react';
import { ArrowLeft, Clock, Calendar, CheckCircle, Star, Phone, MessageCircle, RefreshCw } from 'lucide-react';
import AmazingTransformations from '../AmazingTransformations';

interface TreatmentPageProps {
  onNavigate: (page: string) => void;
}

const DenturesPage = ({ onNavigate }: TreatmentPageProps) => {
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
                  Oral Surgery
                </div>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Dentures</h1>
              <p className="text-2xl font-bold text-mint mb-6">From ₹15,000</p>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Custom-fitted complete and partial dentures that restore your ability to eat, speak, and smile with confidence using premium materials and precise craftsmanship.
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
                src="/Full mouth rehabilitation.jpeg" 
                alt="Dentures Treatment"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What are Dentures?</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Dentures are removable prosthetic devices designed to replace missing teeth and surrounding tissues. They can be complete (replacing all teeth) or partial (replacing some teeth) and are custom-made to fit your mouth comfortably.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Modern dentures are made from high-quality materials that look natural and provide excellent function for eating and speaking. They're an affordable solution for tooth replacement that can dramatically improve your quality of life.
            </p>
          </div>

          {/* Quick Info */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-mint/5 p-6 rounded-2xl text-center">
              <Clock className="h-8 w-8 text-mint mb-3 mx-auto" />
              <h3 className="font-semibold text-gray-900 mb-2">Duration</h3>
              <p className="text-gray-600">1-2 hours per visit</p>
            </div>
            <div className="bg-mint/5 p-6 rounded-2xl text-center">
              <Calendar className="h-8 w-8 text-mint mb-3 mx-auto" />
              <h3 className="font-semibold text-gray-900 mb-2">Sessions</h3>
              <p className="text-gray-600">4-6 visits over 4-6 weeks</p>
            </div>
            <div className="bg-mint/5 p-6 rounded-2xl text-center">
              <Star className="h-8 w-8 text-mint mb-3 mx-auto" />
              <h3 className="font-semibold text-gray-900 mb-2">Lifespan</h3>
              <p className="text-gray-600">5-10 years</p>
            </div>
          </div>

          {/* How is it performed? */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">How is the Treatment Performed?</h2>
            <div className="space-y-4">
              {[
                'Comprehensive oral examination and treatment planning',
                'Precise impressions and measurements of your mouth',
                'Bite registration to determine proper jaw alignment',
                'Wax try-in for shape, size, and color approval',
                'Final denture fabrication in specialized laboratory',
                'Careful fitting and adjustment for optimal comfort',
                'Instructions for care, cleaning, and maintenance',
                'Follow-up appointments for fine-tuning and adjustments'
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Benefits of Quality Dentures</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Restores ability to eat and speak properly',
                'Improves facial support and appearance',
                'Boosts confidence and self-esteem',
                'More affordable than implant solutions',
                'Can be adjusted and relined as needed',
                'Immediate tooth replacement option',
                'Custom-made for optimal fit and comfort',
                'Natural-looking aesthetic results'
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-mint/5 rounded-xl">
                  <CheckCircle className="h-6 w-6 text-mint flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Types of Dentures */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Types of Dentures We Offer</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Complete Dentures</h3>
                <p className="text-gray-600 mb-4">Full replacement of all upper or lower teeth for patients with complete tooth loss.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Conventional (after healing)</li>
                  <li>• Immediate (same day as extraction)</li>
                  <li>• Implant-supported for stability</li>
                  <li>• Premium aesthetic options</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Partial Dentures</h3>
                <p className="text-gray-600 mb-4">Replacement of some missing teeth while preserving remaining natural teeth.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Removable partial dentures</li>
                  <li>• Flexible partial dentures</li>
                  <li>• Precision attachment partials</li>
                  <li>• Metal-free aesthetic options</li>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Restore Your Smile with Quality Dentures</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get back to eating, speaking, and smiling with confidence. Our custom dentures provide comfortable, natural-looking tooth replacement at an affordable price.
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

export default DenturesPage;