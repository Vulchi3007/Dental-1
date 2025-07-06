import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Heart, Sparkles, Shield, Smile, Star, Scissors, Bluetooth as Tooth, Braces, Eye, RefreshCw } from 'lucide-react';

interface MegaMenuProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const MegaMenu = ({ onNavigate, currentPage }: MegaMenuProps) => {
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
        { icon: Heart, name: "Root Canal Treatment", price: "From ₹4,000" },
        { icon: Sparkles, name: "Dental Fillings", price: "From ₹1,000" },
        { icon: Shield, name: "Crowns & Bridges", price: "From ₹3,000" },
        { icon: Shield, name: "Scaling & Cleaning", price: "From ₹1,000" }
      ]
    },
    {
      category: "Cosmetic Dentistry",
      treatments: [
        { icon: Smile, name: "Teeth Whitening", price: "From ₹5,000" },
        { icon: Star, name: "Veneers", price: "From ₹8,000" },
        { icon: Sparkles, name: "Smile Makeover", price: "From ₹80,000" },
        { icon: Shield, name: "Gum Contouring", price: "From ₹10,000" }
      ]
    },
    {
      category: "Orthodontics",
      treatments: [
        { icon: Braces, name: "Traditional Braces", price: "From ₹40,000" },
        { icon: Eye, name: "Clear Aligners", price: "From ₹80,000" },
        { icon: RefreshCw, name: "Retainers", price: "From ₹5,000" },
        { icon: Smile, name: "Lingual Braces", price: "From ₹1,20,000" }
      ]
    },
    {
      category: "Oral Surgery",
      treatments: [
        { icon: Tooth, name: "Dental Implants", price: "From ₹20,000" },
        { icon: Scissors, name: "Tooth Extraction", price: "From ₹2,000" },
        { icon: Tooth, name: "Wisdom Tooth Removal", price: "From ₹8,000" },
        { icon: RefreshCw, name: "Full Mouth Rehabilitation", price: "From ₹1,50,000" }
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
      }, 150);
    }
  };

  const handleClick = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    } else {
      onNavigate('treatments');
    }
  };

  const handleTreatmentClick = () => {
    setIsOpen(false);
    onNavigate('treatments');
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
        className={`flex items-center space-x-1 transition-colors ${
          currentPage === 'treatments' ? 'text-mint' : 'text-gray-600 hover:text-mint'
        } ${isOpen ? 'text-mint' : ''}`}
      >
        <span>Treatments</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Simple Mega Menu Dropdown */}
      {isOpen && (
        <div 
          className="fixed left-1/2 top-full transform -translate-x-1/2 w-screen bg-white border border-gray-200 rounded-2xl shadow-xl z-50 max-h-[80vh] overflow-y-auto"
          style={{
            maxWidth: '1024px',
            width: 'calc(100vw - 2rem)',
            marginTop: '8px',
            animation: 'slideInFromTop 0.2s ease-out'
          }}
        >
          {/* Header */}
          <div className="bg-mint text-white px-6 py-4 rounded-t-2xl">
            <h3 className="text-xl font-bold">Our Dental Treatments</h3>
            <p className="text-mint-light text-sm">World-class care with up to 85% savings</p>
          </div>

          {/* Treatment Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {treatments.map((category, categoryIndex) => (
              <div key={categoryIndex} className="p-6 border-r border-gray-100 ">
                <h4 className="font-bold text-gray-900 mb-4 text-center">
                  {category.category}
                </h4>
                
                <div className="space-y-3">
                  {category.treatments.map((treatment, treatmentIndex) => {
                    const IconComponent = treatment.icon;
                    
                    return (
                      <button
                        key={treatmentIndex}
                        onClick={handleTreatmentClick}
                        className="w-full text-left p-3 rounded-xl hover:bg-mint/5 transition-colors group"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="p-2 rounded-lg bg-mint/10 group-hover:bg-mint group-hover:text-white transition-colors">
                            <IconComponent className="h-4 w-4 text-mint group-hover:text-white" />
                          </div>
                          <div className="flex-1">
                            <h5 className="font-medium text-gray-900 text-sm group-hover:text-mint transition-colors">
                              {treatment.name}
                            </h5>
                            <p className="text-xs text-mint font-semibold">
                              {treatment.price}
                            </p>
                          </div>
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
                  className="bg-mint text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-mint-dark transition-colors"
                >
                  Book Consultation
                </button>
                <a 
                  href="tel:+919821274474"
                  className="border border-mint text-mint px-4 py-2 rounded-lg text-sm font-semibold hover:bg-mint hover:text-white transition-colors"
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

export default MegaMenu;