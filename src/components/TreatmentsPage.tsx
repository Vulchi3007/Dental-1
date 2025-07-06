import React from 'react';
import { Heart, Sparkles, Shield, Smile, Star, Activity, Scissors, Bluetooth as Tooth, Braces, Eye, RefreshCw } from 'lucide-react';
import AmazingTransformations from './AmazingTransformations';

interface TreatmentsPageProps {
  onBookConsultation: () => void;
  onNavigate: (page: string) => void;
}

const TreatmentsPage = ({ onBookConsultation, onNavigate }: TreatmentsPageProps) => {
  const treatments = [
    {
      id: 'root-canal',
      icon: Heart,
      name: "Root Canal Treatment",
      description: "Advanced endodontic therapy to save infected teeth with painless, precision treatment using modern techniques.",
      benefits: [
        "Pain-free procedure",
        "Tooth preservation", 
        "Single visit option"
      ],
      price: "From ₹4,000 Onwards"
    },
    {
      id: 'white-fillings',
      icon: Sparkles,
      name: "White Fillings",
      description: "Tooth-colored composite fillings that blend seamlessly with your natural teeth for lasting restoration.",
      benefits: [
        "Natural appearance",
        "Mercury-free",
        "Durable materials"
      ],
      price: "From ₹1,000 Onwards"
    },
    {
      id: 'scaling-cleaning',
      icon: Shield,
      name: "Scaling & Cleaning",
      description: "Professional deep cleaning to remove plaque and tartar buildup for optimal oral health.",
      benefits: [
        "Deep cleaning",
        "Gum health",
        "Fresh breath"
      ],
      price: "From ₹1,000 Onwards"
    },
    {
      id: 'dental-implants',
      icon: Tooth,
      name: "Dental Implants",
      description: "Premium titanium implants for permanent tooth replacement with natural look and feel.",
      benefits: [
        "Permanent solution",
        "Natural appearance",
        "Durable materials"
      ],
      price: "From ₹20,000 Onwards"
    },
    {
      id: 'teeth-whitening',
      icon: Smile,
      name: "Teeth Whitening",
      description: "Professional whitening treatments for a dramatically brighter, more confident smile in just one visit.",
      benefits: [
        "Instant results",
        "Safe procedure",
        "Long-lasting"
      ],
      price: "From ₹5,000 Onwards"
    },
    {
      id: 'crowns',
      icon: Shield,
      name: "Dental Crowns",
      description: "Custom-crafted crowns using premium materials for perfect fit and natural appearance.",
      benefits: [
        "Perfect fit",
        "Natural look",
        "Long-lasting"
      ],
      price: "From ₹3,000 Onwards"
    },
    {
      id: 'dental-veneers',
      icon: Star,
      name: "Dental Veneers",
      description: "Ultra-thin porcelain shells that create a beautiful, natural-looking smile transformation.",
      benefits: [
        "Natural appearance",
        "Stain resistant",
        "Long-lasting"
      ],
      price: "From ₹8,000 Onwards"
    },
    {
      id: 'smile-makeover',
      icon: Sparkles,
      name: "Smile Makeover",
      description: "Complete smile transformation combining multiple treatments for optimal function and aesthetics.",
      benefits: [
        "Complete makeover",
        "Customized plan",
        "Life-changing results"
      ],
      price: "From ₹80,000 Onwards"
    },
    {
      id: 'braces',
      icon: Braces,
      name: "Traditional Braces",
      description: "Traditional and ceramic braces for comprehensive orthodontic treatment and perfect smile alignment.",
      benefits: [
        "Effective alignment",
        "Multiple options",
        "Expert care"
      ],
      price: "From ₹40,000 Onwards"
    },
    {
      id: 'clear-aligners',
      icon: Eye,
      name: "Clear Aligners",
      description: "Invisible aligners for discreet orthodontic treatment that fits seamlessly into your lifestyle.",
      benefits: [
        "Nearly invisible",
        "Removable",
        "Comfortable"
      ],
      price: "From ₹80,000 Onwards"
    },
    {
      id: 'bridges',
      icon: Shield,
      name: "Dental Bridges",
      description: "Custom bridges that replace missing teeth by anchoring to adjacent teeth.",
      benefits: [
        "Fixed solution",
        "Natural appearance",
        "Restores function"
      ],
      price: "From ₹8,000 Onwards"
    },
    {
      id: 'tooth-extraction',
      icon: Scissors,
      name: "Tooth Extraction",
      description: "Expert surgical tooth extraction with minimal discomfort using advanced techniques.",
      benefits: [
        "Minimal pain",
        "Quick healing",
        "Sedation available"
      ],
      price: "From ₹2,000 Onwards"
    }
  ];

  const handleTreatmentClick = (treatmentId: string) => {
    onNavigate(`treatments-${treatmentId}`);
  };
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-transparent bg-gradient-to-r from-mint-600 to-mint-500 bg-clip-text mb-6">Our Dental Treatments</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive dental care with world-class treatments at affordable prices. 
            Experience the highest standards of dental excellence in Mumbai.
          </p>
        </div>

        {/* Treatments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => {
            const IconComponent = treatment.icon;
            return (
              <div key={index} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-soft hover:shadow-large transition-all duration-300 hover:-translate-y-2 group">
                {/* Icon */}
                <div className="bg-gradient-to-br from-mint-100 to-mint-50 p-4 rounded-2xl w-fit mb-4 group-hover:from-mint-200 group-hover:to-mint-100 transition-all duration-300">
                  <IconComponent className="h-8 w-8 text-mint-600 group-hover:text-mint-700 transition-colors duration-300" />
                </div>
                
                {/* Title */}
                <h2 className="text-xl font-bold text-mint-600 mb-3 group-hover:text-mint-700 transition-colors duration-300">{treatment.name}</h2>
                
                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{treatment.description}</p>
                
                {/* Benefits */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Key Benefits:</h3>
                  <ul className="space-y-2">
                    {treatment.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-mint-500 rounded-full mr-2 flex-shrink-0"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Price */}
                <div className="bg-gradient-to-r from-mint-50 to-mint-100 rounded-xl p-4 mb-4 group-hover:from-mint-100 group-hover:to-mint-200 transition-all duration-300">
                  <div className="text-lg font-bold text-mint-600 text-center group-hover:text-mint-700 transition-colors duration-300">{treatment.price}</div>
                </div>
                
                {/* CTA Button */}
                <div className="space-y-3">
                  <button 
                    onClick={() => handleTreatmentClick(treatment.id)}
                    className="w-full bg-gradient-to-r from-mint-600 to-mint-500 text-white py-3 rounded-xl font-semibold hover:from-mint-700 hover:to-mint-600 transition-all duration-300 shadow-medium hover:shadow-glow transform hover:-translate-y-1"
                  >
                    Learn More & Book 🦷
                  </button>
                  <button 
                    onClick={onBookConsultation}
                    className="w-full border-2 border-mint-500 text-mint-600 py-3 rounded-xl font-semibold hover:bg-mint-500 hover:text-white transition-all duration-300 hover:shadow-medium transform hover:-translate-y-1"
                  >
                    Quick Consultation
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Amazing Transformations - Reusable Component */}
        <div className="mt-20">
          <AmazingTransformations onNavigate={onNavigate} />
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 bg-gradient-to-r from-mint/5 to-mint/10 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Smile?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Schedule your free consultation today and discover how our expert dental team can help you achieve the perfect smile you've always wanted.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={onBookConsultation}
              className="bg-gradient-to-r from-mint-600 to-mint-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-mint-700 hover:to-mint-600 transition-all duration-300 shadow-large hover:shadow-glow-lg transform hover:-translate-y-1"
            >
              Schedule Free Consultation
            </button>
            <button className="border-2 border-mint-500 text-mint-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-mint-500 hover:text-white transition-all duration-300 hover:shadow-medium transform hover:-translate-y-1">
              Call +91 98212 74474
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="bg-gradient-to-br from-mint-100 to-mint-50 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center hover:from-mint-200 hover:to-mint-100 transition-all duration-300">
              <Shield className="h-8 w-8 text-mint-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Safe & Sterile</h3>
            <p className="text-gray-600 text-sm">International safety standards with NABH accreditation</p>
          </div>
          
          <div className="text-center p-6">
            <div className="bg-gradient-to-br from-mint-100 to-mint-50 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center hover:from-mint-200 hover:to-mint-100 transition-all duration-300">
              <Star className="h-8 w-8 text-mint-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Care</h3>
            <p className="text-gray-600 text-sm">15+ years of experience with international patients</p>
          </div>
          
          <div className="text-center p-6">
            <div className="bg-gradient-to-br from-mint-100 to-mint-50 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center hover:from-mint-200 hover:to-mint-100 transition-all duration-300">
              <Heart className="h-8 w-8 text-mint-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Patient First</h3>
            <p className="text-gray-600 text-sm">Personalized care with 24/7 support during your stay</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreatmentsPage;