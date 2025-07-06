import React from 'react';
import { ArrowLeft, Clock, Calendar, CheckCircle, Star, Phone, MessageCircle, Smile } from 'lucide-react';
import AmazingTransformations from '../AmazingTransformations';

interface TreatmentPageProps {
  onNavigate: (page: string) => void;
}

const LingualBracesPage = ({ onNavigate }: TreatmentPageProps) => {
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
                <Smile className="h-12 w-12 text-mint mr-4" />
                <div className="bg-mint/10 text-mint px-4 py-2 rounded-full text-sm font-semibold">
                  Orthodontics
                </div>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Lingual Braces</h1>
              <p className="text-2xl font-bold text-mint mb-6">From ₹1,20,000</p>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Completely invisible braces placed behind your teeth for discreet orthodontic treatment without compromising on effectiveness or aesthetics.
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
                src="/Traditional braces.jpg" 
                alt="Lingual Braces Treatment"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What are Lingual Braces?</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Lingual braces are a revolutionary orthodontic treatment where brackets and wires are placed on the inside (tongue-side) of your teeth, making them completely invisible from the outside. They provide the same effective tooth movement as traditional braces while maintaining complete aesthetic discretion.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Custom-made for each patient using advanced 3D technology, lingual braces are ideal for professionals, public figures, or anyone who wants to straighten their teeth without anyone knowing they're wearing braces.
            </p>
          </div>

          {/* Quick Info */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-mint/5 p-6 rounded-2xl text-center">
              <Clock className="h-8 w-8 text-mint mb-3 mx-auto" />
              <h3 className="font-semibold text-gray-900 mb-2">Duration</h3>
              <p className="text-gray-600">45-60 minutes per visit</p>
            </div>
            <div className="bg-mint/5 p-6 rounded-2xl text-center">
              <Calendar className="h-8 w-8 text-mint mb-3 mx-auto" />
              <h3 className="font-semibold text-gray-900 mb-2">Treatment Time</h3>
              <p className="text-gray-600">18-30 months</p>
            </div>
            <div className="bg-mint/5 p-6 rounded-2xl text-center">
              <Star className="h-8 w-8 text-mint mb-3 mx-auto" />
              <h3 className="font-semibold text-gray-900 mb-2">Visibility</h3>
              <p className="text-gray-600">100% invisible</p>
            </div>
          </div>

          {/* How is it performed? */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">How is the Treatment Performed?</h2>
            <div className="space-y-4">
              {[
                'Comprehensive orthodontic examination and 3D imaging',
                'Digital impressions and bite registration for custom design',
                'Laboratory fabrication of custom lingual brackets',
                'Precise placement of brackets on the inside of teeth',
                'Custom archwire insertion and initial activation',
                'Regular adjustment appointments every 6-8 weeks',
                'Careful removal and retainer fitting upon completion'
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Benefits of Lingual Braces</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Completely invisible from the outside',
                'Same effectiveness as traditional braces',
                'Custom-made for optimal fit and comfort',
                'Suitable for complex orthodontic cases',
                'No dietary restrictions or lifestyle changes',
                'Professional appearance maintained throughout treatment',
                'Advanced 3D technology for precise results',
                'Ideal for adults and image-conscious patients'
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-mint/5 rounded-xl">
                  <CheckCircle className="h-6 w-6 text-mint flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison with Other Options */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Lingual Braces?</h2>
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
              <div className="bg-mint text-white px-6 py-4">
                <h3 className="text-xl font-bold">Treatment Comparison</h3>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <h4 className="font-semibold text-gray-900 mb-3">Traditional Braces</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Visible metal brackets</li>
                      <li>• Most affordable option</li>
                      <li>• Effective for all cases</li>
                      <li>• May affect appearance</li>
                    </ul>
                  </div>
                  <div className="text-center p-4 bg-mint/5 rounded-xl border-2 border-mint">
                    <h4 className="font-semibold text-mint mb-3">Lingual Braces</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• 100% invisible treatment</li>
                      <li>• Custom-made precision</li>
                      <li>• Effective for complex cases</li>
                      <li>• Professional appearance</li>
                    </ul>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <h4 className="font-semibold text-gray-900 mb-3">Clear Aligners</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Nearly invisible</li>
                      <li>• Removable convenience</li>
                      <li>• Limited to mild cases</li>
                      <li>• Requires compliance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Amazing Transformations */}
          <div className="mb-16">
            <AmazingTransformations showTitle={false} showStats={false} showCTA={false} />
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-mint/10 to-mint/5 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Straighten Your Teeth Invisibly</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get perfectly straight teeth without anyone knowing you're wearing braces. Lingual braces offer the ultimate in discreet orthodontic treatment.
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

export default LingualBracesPage;