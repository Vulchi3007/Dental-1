import React from 'react';
import { ArrowLeft, Clock, Calendar, CheckCircle, Star, Phone, MessageCircle, Bluetooth as Tooth } from 'lucide-react';
import AmazingTransformations from '../AmazingTransformations';

interface TreatmentPageProps {
  onNavigate: (page: string) => void;
}

const WisdomToothPage = ({ onNavigate }: TreatmentPageProps) => {
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
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Wisdom Tooth Removal</h1>
              <p className="text-2xl font-bold text-mint mb-6">From ₹8,000</p>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Expert wisdom tooth extraction using advanced surgical techniques and sedation options for comfortable removal of impacted or problematic wisdom teeth.
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
                src="/Main page.png" 
                alt="Wisdom Tooth Removal Treatment"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Wisdom Tooth Removal?</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Wisdom tooth removal is a surgical procedure to extract one or more wisdom teeth (third molars) that are impacted, causing pain, or creating problems for other teeth. These teeth typically emerge in late teens or early twenties.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our oral surgeons specialize in complex wisdom tooth extractions, using advanced imaging and surgical techniques to ensure safe, comfortable removal with minimal complications and faster healing.
            </p>
          </div>

          {/* Quick Info */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-mint/5 p-6 rounded-2xl text-center">
              <Clock className="h-8 w-8 text-mint mb-3 mx-auto" />
              <h3 className="font-semibold text-gray-900 mb-2">Duration</h3>
              <p className="text-gray-600">30-90 minutes per tooth</p>
            </div>
            <div className="bg-mint/5 p-6 rounded-2xl text-center">
              <Calendar className="h-8 w-8 text-mint mb-3 mx-auto" />
              <h3 className="font-semibold text-gray-900 mb-2">Sessions</h3>
              <p className="text-gray-600">1-2 visits</p>
            </div>
            <div className="bg-mint/5 p-6 rounded-2xl text-center">
              <Star className="h-8 w-8 text-mint mb-3 mx-auto" />
              <h3 className="font-semibold text-gray-900 mb-2">Recovery</h3>
              <p className="text-gray-600">5-10 days</p>
            </div>
          </div>

          {/* How is it performed? */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">How is the Treatment Performed?</h2>
            <div className="space-y-4">
              {[
                'Comprehensive examination with 3D imaging and X-rays',
                'Pre-surgical consultation and sedation planning',
                'Local anesthesia and sedation administration',
                'Surgical access through gum tissue if needed',
                'Careful sectioning of tooth if impacted',
                'Complete removal with minimal tissue trauma',
                'Socket cleaning and suturing for optimal healing',
                'Post-operative care instructions and follow-up scheduling'
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Benefits of Wisdom Tooth Removal</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Prevents crowding of other teeth',
                'Eliminates pain from impacted teeth',
                'Reduces risk of gum disease and decay',
                'Prevents cyst formation around impacted teeth',
                'Improves overall oral hygiene access',
                'Advanced surgical techniques for minimal trauma',
                'Multiple sedation options for comfort',
                'Faster healing with proper post-operative care'
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-mint/5 rounded-xl">
                  <CheckCircle className="h-6 w-6 text-mint flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* When is removal needed? */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">When is Wisdom Tooth Removal Needed?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Signs You Need Removal</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Severe pain or discomfort</li>
                  <li>• Swelling and inflammation</li>
                  <li>• Difficulty opening mouth</li>
                  <li>• Bad breath or taste</li>
                  <li>• Crowding of other teeth</li>
                  <li>• Recurring infections</li>
                </ul>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Preventive Removal</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Insufficient space for eruption</li>
                  <li>• Impacted or partially erupted</li>
                  <li>• Difficult to clean properly</li>
                  <li>• Risk of future complications</li>
                  <li>• Orthodontic treatment planning</li>
                  <li>• Professional recommendation</li>
                </ul>
              </div>
            </div>
          </div>


          {/* Call to Action */}
          <div className="bg-gradient-to-r from-mint/10 to-mint/5 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Wisdom Tooth Causing Problems?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Don't let wisdom tooth pain affect your daily life. Our expert oral surgeons provide comfortable, safe wisdom tooth removal with advanced techniques.
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

export default WisdomToothPage;