import React from 'react';
import { ArrowLeft, Clock, Calendar, CheckCircle, Star, Phone, MessageCircle, Scissors } from 'lucide-react';
import AmazingTransformations from '../AmazingTransformations';

interface TreatmentPageProps {
  onNavigate: (page: string) => void;
}

const ToothExtractionPage = ({ onNavigate }: TreatmentPageProps) => {
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
                <Scissors className="h-12 w-12 text-mint mr-4" />
                <div className="bg-mint/10 text-mint px-4 py-2 rounded-full text-sm font-semibold">
                  Oral Surgery
                </div>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Tooth Extraction</h1>
              <p className="text-2xl font-bold text-mint mb-6">From ₹2,000</p>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Expert surgical tooth extraction with minimal discomfort using advanced techniques and sedation options for optimal patient comfort.
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
                alt="Tooth Extraction Treatment"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Tooth Extraction?</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Tooth extraction is the removal of a tooth from its socket in the bone. While we always try to save natural teeth, sometimes extraction is necessary due to severe decay, infection, trauma, or overcrowding.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our experienced oral surgeons use advanced techniques and sedation options to ensure the procedure is as comfortable as possible, with minimal pain and quick healing times.
            </p>
          </div>

          {/* Quick Info */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-mint/5 p-6 rounded-2xl text-center">
              <Clock className="h-8 w-8 text-mint mb-3 mx-auto" />
              <h3 className="font-semibold text-gray-900 mb-2">Duration</h3>
              <p className="text-gray-600">15-45 minutes</p>
            </div>
            <div className="bg-mint/5 p-6 rounded-2xl text-center">
              <Calendar className="h-8 w-8 text-mint mb-3 mx-auto" />
              <h3 className="font-semibold text-gray-900 mb-2">Sessions</h3>
              <p className="text-gray-600">1 visit</p>
            </div>
            <div className="bg-mint/5 p-6 rounded-2xl text-center">
              <Star className="h-8 w-8 text-mint mb-3 mx-auto" />
              <h3 className="font-semibold text-gray-900 mb-2">Recovery</h3>
              <p className="text-gray-600">3-7 days</p>
            </div>
          </div>

          {/* How is it performed? */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">How is the Treatment Performed?</h2>
            <div className="space-y-4">
              {[
                'Comprehensive examination and X-rays to assess tooth condition',
                'Local anesthesia administered for complete pain control',
                'Sedation options discussed and provided if needed',
                'Gentle loosening of tooth using specialized instruments',
                'Careful extraction with minimal tissue trauma',
                'Socket cleaning and gauze placement for bleeding control',
                'Post-operative instructions and follow-up care planning'
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Benefits of Professional Extraction</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Eliminates pain from severely damaged teeth',
                'Prevents spread of infection to other teeth',
                'Creates space for orthodontic treatment',
                'Minimally invasive surgical techniques',
                'Multiple sedation options available',
                'Quick healing with proper aftercare',
                'Immediate relief from dental pain',
                'Prevents complications from delayed treatment'
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-mint/5 rounded-xl">
                  <CheckCircle className="h-6 w-6 text-mint flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Types of Extractions */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Types of Extractions We Perform</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Simple Extraction</h3>
                <p className="text-gray-600 mb-4">For visible teeth that can be easily accessed and removed with dental forceps.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Local anesthesia only</li>
                  <li>• Quick procedure (15-30 minutes)</li>
                  <li>• Minimal post-operative discomfort</li>
                  <li>• Same-day recovery possible</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Surgical Extraction</h3>
                <p className="text-gray-600 mb-4">For impacted or broken teeth that require surgical access for safe removal.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Sedation options available</li>
                  <li>• Advanced surgical techniques</li>
                  <li>• Careful tissue preservation</li>
                  <li>• Comprehensive aftercare support</li>
                </ul>
              </div>
            </div>
          </div>


          {/* Call to Action */}
          <div className="bg-gradient-to-r from-mint/10 to-mint/5 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Need a Tooth Extraction?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Our experienced oral surgeons provide comfortable, pain-free tooth extractions with advanced techniques and sedation options for your comfort.
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

export default ToothExtractionPage;