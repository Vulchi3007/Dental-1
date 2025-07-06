import React, { useState } from 'react';
import { X } from 'lucide-react';

interface AmazingTransformationsProps {
  showTitle?: boolean;
  showStats?: boolean;
  showCTA?: boolean;
  onNavigate?: (page: string) => void;
}

const AmazingTransformations = ({ 
  showTitle = true, 
  showStats = true, 
  showCTA = true,
  onNavigate 
}: AmazingTransformationsProps) => {
  const [selectedImage, setSelectedImage] = useState<{
    combinedImage: string;
    treatment: string;
    patient: string;
    description: string;
    price: string;
    duration: string;
  } | null>(null);

  const transformations = [
    {
      combinedImage: "/smile makeover.jpeg",
      treatment: "Complete Smile Makeover",
      patient: "Sarah J., Australia",
      description: "Porcelain veneers and teeth whitening transformation",
      price: "₹1,20,000",
      duration: "7 days treatment"
    },
    {
      combinedImage: "/Dental implant.jpeg",
      treatment: "Dental Implant Restoration",
      patient: "James M., UK",
      description: "Single tooth replacement with titanium implant",
      price: "₹25,000",
      duration: "3 days treatment"
    },
    {
      combinedImage: "/Full mouth rehabilitation.jpeg",
      treatment: "Full Mouth Rehabilitation",
      patient: "Robert W., Ireland",
      description: "Complete oral restoration with implants and crowns",
      price: "₹2,50,000",
      duration: "10 days treatment"
    },
    {
      combinedImage: "/teeth-whitening.jpg",
      treatment: "Professional Teeth Whitening",
      patient: "Emily D., USA",
      description: "Laser whitening for dramatically brighter smile",
      price: "₹8,000",
      duration: "1 hour treatment"
    },
    {
      combinedImage: "/aligners.jpg",
      treatment: "Clear Aligner Treatment",
      patient: "Lisa T., New Zealand",
      description: "Invisible orthodontic correction for perfect alignment",
      price: "₹95,000",
      duration: "12 months treatment"
    },
    {
      combinedImage: "/Gum Treatment.jpeg",
      treatment: "Advanced Gum Treatment",
      patient: "Michael B., Canada",
      description: "Laser therapy for healthy gums and fresh breath",
      price: "₹15,000",
      duration: "3 days treatment"
    }
  ];

  const stats = [
    { number: "5000+", label: "Successful Transformations" },
    { number: "98%", label: "Patient Satisfaction" },
    { number: "25+", label: "Countries Served" },
    { number: "15+", label: "Years Experience" }
  ];

  const openModal = (transformation: typeof transformations[0]) => {
    setSelectedImage({
      combinedImage: transformation.combinedImage,
      treatment: transformation.treatment,
      patient: transformation.patient,
      description: transformation.description,
      price: transformation.price,
      duration: transformation.duration
    });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
        {showTitle && (
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Amazing Transformations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the incredible results our patients have achieved with our expert dental treatments. 
              Each image showcases the dramatic improvement from before to after treatment.
            </p>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {transformations.map((transformation, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => openModal(transformation)}
            >
              <div className="relative">
                <img 
                  src={transformation.combinedImage} 
                  alt={`${transformation.treatment} before and after transformation`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-mint-600 to-mint-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-medium">
                  Before & After
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
                    Click to view larger
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{transformation.treatment}</h3>
                <p className="text-mint-600 font-semibold mb-2">{transformation.patient}</p>
                <p className="text-gray-600 text-sm mb-3">{transformation.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-mint-600 font-semibold">{transformation.price}</span>
                  <span className="text-gray-500 text-sm">{transformation.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {showStats && (
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-mint-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        )}

        {showCTA && (
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready for Your Own Transformation?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied patients who have achieved their dream smile with our expert dental care. 
              Your transformation story could be next!
            </p>
            {onNavigate ? (
              <button 
                onClick={() => onNavigate('contact')}
                className="bg-gradient-to-r from-mint-600 to-mint-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-mint-700 hover:to-mint-600 transition-all duration-300 shadow-large hover:shadow-glow-lg transform hover:-translate-y-1"
              >
                Start Your Smile Journey
              </button>
            ) : (
              <a 
                href="tel:+919821274474" 
                className="bg-gradient-to-r from-mint-600 to-mint-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-mint-700 hover:to-mint-600 transition-all duration-300 shadow-large hover:shadow-glow-lg transform hover:-translate-y-1 text-center inline-block"
              >
                Start Your Smile Journey
              </a>
            )}
          </div>
        )}
      </div>

      {/* Modal for Enlarged Before/After Image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{selectedImage.treatment}</h3>
                <p className="text-mint-600 font-semibold">{selectedImage.patient}</p>
                <p className="text-gray-600">{selectedImage.description}</p>
              </div>
              <button 
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-8 w-8" />
              </button>
            </div>

            {/* Single Combined Before/After Image */}
            <div className="p-6">
              <div className="text-center mb-4">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">
                  Before & After Transformation
                </h4>
                <p className="text-gray-600">
                  Complete transformation showing dramatic improvement
                </p>
              </div>

              <div className="flex justify-center">
                <img 
                  src={selectedImage.combinedImage} 
                  alt={`${selectedImage.treatment} before and after transformation`}
                  className="max-w-full h-auto rounded-xl shadow-lg"
                />
              </div>

              {/* Treatment Details */}
              <div className="mt-6 grid md:grid-cols-2 gap-6 bg-gray-50 rounded-xl p-6">
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Treatment Details</h5>
                  <p className="text-gray-600 mb-1"><strong>Procedure:</strong> {selectedImage.treatment}</p>
                  <p className="text-gray-600 mb-1"><strong>Patient:</strong> {selectedImage.patient}</p>
                  <p className="text-gray-600"><strong>Description:</strong> {selectedImage.description}</p>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Investment & Timeline</h5>
                  <p className="text-gray-600 mb-1"><strong>Cost:</strong> {selectedImage.price}</p>
                  <p className="text-gray-600"><strong>Duration:</strong> {selectedImage.duration}</p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t bg-gray-50 rounded-b-2xl">
              <div className="text-center">
                <p className="text-gray-600 mb-4">
                  Interested in a similar transformation? Contact us for a free consultation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:+919821274474"
                    className="bg-gradient-to-r from-mint-600 to-mint-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-mint-700 hover:to-mint-600 transition-all duration-300 shadow-medium hover:shadow-glow transform hover:-translate-y-1"
                  >
                    Call +91 98212 74474
                  </a>
                  <a 
                    href="https://wa.me/919821274474"
                    className="border-2 border-mint-500 text-mint-600 px-6 py-3 rounded-xl font-semibold hover:bg-mint-500 hover:text-white transition-all duration-300 hover:shadow-medium transform hover:-translate-y-1"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AmazingTransformations;