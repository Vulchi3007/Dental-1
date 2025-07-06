import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Heart, Sparkles, Shield, Smile, Star, Scissors, Bluetooth as Tooth, Braces, Eye, RefreshCw, ArrowRight } from 'lucide-react';

interface TreatmentMegaMenuProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const TreatmentMegaMenu = ({ onNavigate, currentPage }: TreatmentMegaMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const treatments = [
    {
      category: "General Dentistry",
      treatments: [
        { id: 'root-canal', icon: Heart, name: "Root Canal", price: "From ₹4,000" },
        { id: 'white-fillings', icon: Sparkles, name: "White Fillings", price: "From ₹1,000" },
        { id: 'crowns', icon: Shield, name: "Crowns", price: "From ₹3,000" },
        { id: 'scaling-cleaning', icon: Shield, name: "Scaling & Cleaning", price: "From ₹1,000" }
      ]
    },
    {
      category: "Cosmetic Dentistry",
      treatments: [
        { id: 'teeth-whitening', icon: Smile, name: "Teeth Whitening", price: "From ₹5,000" },
        { id: 'dental-veneers', icon: Star, name: "Dental Veneers", price: "From ₹8,000" },
        { id: 'smile-makeover', icon: Sparkles, name: "Smile Makeover", price: "From ₹80,000" },
        { id: 'gum-contouring', icon: Shield, name: "Gum Contouring", price: "From ₹10,000" }
      ]
    },
    {
      category: "Orthodontics",
      treatments: [
        { id: 'braces', icon: Braces, name: "Traditional Braces", price: "From ₹40,000" },
        { id: 'clear-aligners', icon: Eye, name: "Clear Aligners", price: "From ₹80,000" },
        { id: 'retainers', icon: RefreshCw, name: "Retainers", price: "From ₹5,000" },
        { id: 'lingual-braces', icon: Smile, name: "Lingual Braces", price: "From ₹1,20,000" }
      ]
    },
    {
      category: "Oral Surgery",
      treatments: [
        { id: 'dental-implants', icon: Tooth, name: "Dental Implants", price: "From ₹20,000" },
        { id: 'tooth-extraction', icon: Scissors, name: "Tooth Extraction", price: "From ₹2,000" },
        { id: 'wisdom-tooth', icon: Tooth, name: "Wisdom Tooth Removal", price: "From ₹8,000" },
        { id: 'bridges', icon: Shield, name: "Bridges", price: "From ₹8,000" }
      ]
    }
  ];

  const handleMouseEnter = () => {
    if (!isMobile) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      timeoutRef.current = setTimeout(() => {
        setIsOpen(false);
      }, 200);
    }
  };

  const handleClick = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  const handleTreatmentClick = (treatmentId: string) => {
    setIsOpen(false);
    onNavigate(`treatments-${treatmentId}`);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen && isMobile) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isOpen, isMobile]);

  return (
    <div 
      ref={menuRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button 
        onClick={handleClick}
        className={`flex items-center space-x-1 transition-colors px-4 py-3 rounded-lg hover:bg-mint/5 ${
          currentPage === 'treatments' || currentPage.startsWith('treatments-') ? 'text-mint-600' : 'text-gray-600 hover:text-mint-600'
        } ${isOpen ? 'text-mint-600' : ''} font-medium`}
      >
        <span>Treatments</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Mega Menu Dropdown */}
      {isOpen && (
<div
  className="absolute left-1/2 top-full mt-2 transform -translate-x-1/2 w-[100vw] max-w-[1280px] bg-white border border-gray-200 rounded-2xl shadow-xl z-50 max-h-[80vh] overflow-y-auto animate-fade-in-fast"
>
          {/* Header */}
          <div className="bg-gradient-to-r from-mint-600 to-mint-700 text-white px-6 py-4 rounded-t-2xl">
            <h3 className="text-xl font-bold">Our Dental Treatments</h3>
            <p className="text-mint-100 text-sm">Click on any treatment to learn more and book consultation</p>
          </div>

          {/* Treatment Categories */}
          <div className="grid md:grid-cols-4 gap-0">
            {treatments.map((category, categoryIndex) => (
              <div key={categoryIndex} className="p-6 border-r border-gray-100 last:border-r-0">
                <h4 className="font-bold text-gray-900 mb-4 text-center text-sm">
                  {category.category}
                </h4>
                
                <div className="space-y-3">
                  {category.treatments.map((treatment, treatmentIndex) => {
                    const IconComponent = treatment.icon;
                    
                    return (
                      <button
                        key={treatmentIndex}
                        onClick={() => handleTreatmentClick(treatment.id)}
                        className="w-full text-left p-3 rounded-xl hover:bg-mint-50 transition-all duration-200 group hover:shadow-soft border border-transparent hover:border-mint-200"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="p-2 rounded-lg bg-mint-100 group-hover:bg-mint-500 group-hover:text-white transition-all duration-200">
                            <IconComponent className="h-4 w-4 text-mint-600 group-hover:text-white" />
                          </div>
                          <div className="flex-1">
                            <h5 className="font-medium text-gray-900 text-sm group-hover:text-mint-600 transition-colors">
                              {treatment.name}
                            </h5>
                            <p className="text-xs text-mint-600 font-semibold">
                              {treatment.price}
                            </p>
                          </div>
                          <ArrowRight className="h-3 w-3 text-gray-400 group-hover:text-mint-600 transition-colors" />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-6 py-4 rounded-b-2xl">
            <div className="text-center mb-4">
              <button 
                onClick={() => {
                  setIsOpen(false);
                  onNavigate('treatments');
                }}
                className="text-mint-600 hover:text-mint-700 font-semibold text-lg inline-flex items-center transition-colors"
              >
                View All Treatments
                <ArrowRight className="h-5 w-5 ml-2" />
              </button>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <p className="text-sm text-gray-600">Ready to transform your smile?</p>
                <p className="text-xs text-gray-500">Free consultation for international patients</p>
              </div>
              <div className="flex gap-3">
                <button 
                  onClick={() => {
                    setIsOpen(false);
                    onNavigate('appointment');
                  }}
                  className="bg-gradient-to-r from-mint-600 to-mint-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-mint-700 hover:to-mint-600 transition-all duration-300 shadow-medium hover:shadow-glow transform hover:-translate-y-0.5"
                >
                  Book Consultation
                </button>
                <a 
                  href="tel:+919821274474"
                  className="border border-mint-500 text-mint-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-mint-500 hover:text-white transition-all duration-300 hover:shadow-medium transform hover:-translate-y-0.5"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TreatmentMegaMenu;