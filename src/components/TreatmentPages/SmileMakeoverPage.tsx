import React from 'react';
import { ArrowLeft, Clock, Calendar, CheckCircle, Star, Phone, MessageCircle, Sparkles } from 'lucide-react';
import AmazingTransformations from '../AmazingTransformations';

interface TreatmentPageProps {
  onNavigate: (page: string) => void;
}

const SmileMakeoverPage = ({ onNavigate }: TreatmentPageProps) => {
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
                <Sparkles className="h-12 w-12 text-mint mr-4" />
                <div className="bg-mint/10 text-mint px-4 py-2 rounded-full text-sm font-semibold">
                  Cosmetic Dentistry
                </div>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Smile Makeover</h1>
              <p className="text-2xl font-bold text-mint mb-6">From ₹80,000</p>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Complete smile transformation combining multiple cosmetic treatments to create your perfect, Hollywood-worthy smile in just one trip.
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
                src="/smile makeover.jpeg" 
                alt="Smile Makeover Treatment"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What is a Smile Makeover?</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              A smile makeover is a comprehensive cosmetic dental treatment that combines multiple procedures to completely transform your smile. It's customized to your unique facial features, personality, and lifestyle to create the perfect smile you've always dreamed of.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our smile makeovers can include teeth whitening, veneers, crowns, orthodontics, gum contouring, and more - all coordinated to achieve optimal aesthetics, function, and long-lasting results.
            </p>
          </div>

          {/* Quick Info */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-mint/5 p-6 rounded-2xl text-center">
              <Clock className="h-8 w-8 text-mint mb-3 mx-auto" />
              <h3 className="font-semibold text-gray-900 mb-2">Duration</h3>
              <p className="text-gray-600">Multiple sessions over 7-14 days</p>
            </div>
            <div className="bg-mint/5 p-6 rounded-2xl text-center">
              <Calendar className="h-8 w-8 text-mint mb-3 mx-auto" />
              <h3 className="font-semibold text-gray-900 mb-2">Sessions</h3>
              <p className="text-gray-600">4-8 visits depending on complexity</p>
            </div>
            <div className="bg-mint/5 p-6 rounded-2xl text-center">
              <Star className="h-8 w-8 text-mint mb-3 mx-auto" />
              <h3 className="font-semibold text-gray-900 mb-2">Results</h3>
              <p className="text-gray-600">Complete smile transformation</p>
            </div>
          </div>

          {/* How is it performed? */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">How is the Treatment Performed?</h2>
            <div className="space-y-4">
              {[
                'Comprehensive smile analysis and digital smile design',
                'Detailed treatment planning with 3D imaging and mockups',
                'Professional teeth cleaning and gum health assessment',
                'Teeth whitening to achieve optimal base shade',
                'Porcelain veneers or crowns for shape and alignment',
                'Gum contouring if needed for perfect gum line',
                'Final adjustments and bite optimization',
                'Detailed aftercare instructions and follow-up plan'
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Benefits of Smile Makeover</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Complete smile transformation in one trip',
                'Customized to your facial features and personality',
                'Combines multiple treatments for optimal results',
                'Dramatically boosts confidence and self-esteem',
                'Corrects multiple cosmetic issues simultaneously',
                'Long-lasting results with proper maintenance',
                'Professional photography and documentation',
                'Significant cost savings compared to home country'
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-mint/5 rounded-xl">
                  <CheckCircle className="h-6 w-6 text-mint flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Treatment Options */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">What's Included in Your Makeover</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Teeth Whitening</h3>
                <p className="text-gray-600 text-sm">Professional whitening for optimal base shade</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Porcelain Veneers</h3>
                <p className="text-gray-600 text-sm">Custom veneers for perfect shape and color</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Gum Contouring</h3>
                <p className="text-gray-600 text-sm">Laser gum reshaping for perfect gum line</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Dental Crowns</h3>
                <p className="text-gray-600 text-sm">Premium crowns for damaged teeth</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Orthodontics</h3>
                <p className="text-gray-600 text-sm">Minor alignment corrections if needed</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Digital Design</h3>
                <p className="text-gray-600 text-sm">3D smile preview before treatment</p>
              </div>
            </div>
          </div>


          {/* Amazing Transformations */}
          <div className="mb-16">
            <AmazingTransformations showTitle={false} showStats={false} showCTA={false} />
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-mint/10 to-mint/5 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready for Your Dream Smile?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Transform your entire smile with our comprehensive makeover package. Get the Hollywood smile you've always wanted at a fraction of the cost.
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

export default SmileMakeoverPage;