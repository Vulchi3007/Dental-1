import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Heart, Sparkles, Shield, Smile, Star, Scissors, Bluetooth as Tooth, Braces, Eye, RefreshCw, Clock, CheckCircle, Calendar, Phone } from 'lucide-react';

interface InteractiveMegaMenuProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

interface Treatment {
  id: string;
  icon: React.ComponentType<any>;
  name: string;
  price: string;
  description: string;
  procedure: string[];
  benefits: string[];
  duration: string;
  sessions: string;
}

const InteractiveMegaMenu = ({ onNavigate, currentPage }: InteractiveMegaMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);
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

  const treatmentData: { [key: string]: Treatment } = {
    'root-canal': {
      id: 'root-canal',
      icon: Heart,
      name: 'Root Canal Treatment',
      price: 'From ₹4,000',
      description: 'Root canal treatment is a dental procedure used to treat infected or severely damaged teeth. It involves removing the infected pulp from inside the tooth, cleaning and disinfecting the root canals, and then filling and sealing the space.',
      procedure: [
        'Local anesthesia is administered to numb the area',
        'Small access hole is drilled into the tooth',
        'Infected pulp and bacteria are removed from root canals',
        'Root canals are cleaned, disinfected, and shaped',
        'Canals are filled with biocompatible material',
        'Access hole is sealed with temporary or permanent filling',
        'Crown placement may be recommended for protection'
      ],
      benefits: [
        'Saves your natural tooth',
        'Eliminates pain and infection',
        'Prevents spread of infection',
        'Restores normal chewing function',
        'Cost-effective compared to extraction and replacement'
      ],
      duration: '60-90 minutes per session',
      sessions: '1-3 visits depending on complexity'
    },
    'dental-fillings': {
      id: 'dental-fillings',
      icon: Sparkles,
      name: 'Dental Fillings',
      price: 'From ₹1,000',
      description: 'Dental fillings are used to restore teeth damaged by decay back to their normal function and shape. We use tooth-colored composite materials that blend seamlessly with your natural teeth.',
      procedure: [
        'Local anesthesia is applied if needed',
        'Decayed tooth material is removed',
        'Tooth is cleaned and prepared',
        'Composite filling material is applied in layers',
        'Each layer is hardened with special light',
        'Filling is shaped and polished to match natural tooth',
        'Bite is checked and adjusted if necessary'
      ],
      benefits: [
        'Natural tooth-colored appearance',
        'Mercury-free and safe',
        'Bonds directly to tooth structure',
        'Preserves more natural tooth',
        'Immediate function after treatment'
      ],
      duration: '30-60 minutes',
      sessions: '1 visit per filling'
    },
    'teeth-whitening': {
      id: 'teeth-whitening',
      name: 'Professional Teeth Whitening',
      icon: Smile,
      price: 'From ₹5,000',
      description: 'Professional teeth whitening is a cosmetic dental treatment that removes stains and discoloration from teeth, resulting in a brighter, more confident smile. Our advanced whitening systems can lighten teeth by several shades.',
      procedure: [
        'Initial consultation and shade assessment',
        'Teeth cleaning to remove surface stains',
        'Gums are protected with special barrier',
        'Professional whitening gel is applied to teeth',
        'Gel is activated with special light or laser',
        'Process is repeated 2-3 times in one session',
        'Final shade is recorded and aftercare instructions given'
      ],
      benefits: [
        'Immediate visible results',
        'Safe and effective treatment',
        'Boosts confidence and self-esteem',
        'Professional supervision ensures safety',
        'Long-lasting results with proper care'
      ],
      duration: '60-90 minutes',
      sessions: '1-2 sessions for optimal results'
    },
    'dental-implants': {
      id: 'dental-implants',
      icon: Tooth,
      name: 'Dental Implants',
      price: 'From ₹20,000',
      description: 'Dental implants are artificial tooth roots made of titanium that are surgically placed into the jawbone to replace missing teeth. They provide a permanent, natural-looking solution for tooth replacement.',
      procedure: [
        'Comprehensive examination and 3D imaging',
        'Treatment planning and implant selection',
        'Surgical placement of titanium implant',
        'Healing period for osseointegration (3-6 months)',
        'Abutment placement procedure',
        'Custom crown fabrication and fitting',
        'Final adjustments and bite verification'
      ],
      benefits: [
        'Permanent tooth replacement solution',
        'Looks and feels like natural teeth',
        'Preserves jawbone and facial structure',
        'No impact on adjacent teeth',
        'High success rate (95-98%)'
      ],
      duration: '1-2 hours per implant',
      sessions: '3-4 visits over 4-6 months'
    },
    'braces': {
      id: 'braces',
      icon: Braces,
      name: 'Traditional Braces',
      price: 'From ₹40,000',
      description: 'Traditional braces use metal brackets and wires to gradually move teeth into proper alignment. They are highly effective for correcting various orthodontic issues including crowding, spacing, and bite problems.',
      procedure: [
        'Initial orthodontic consultation and records',
        'Treatment planning and bracket placement',
        'Bonding brackets to teeth with special adhesive',
        'Placing archwires and securing with elastic ties',
        'Regular adjustment appointments every 4-6 weeks',
        'Monitoring progress and making wire changes',
        'Removal of braces and retainer fitting'
      ],
      benefits: [
        'Effective for complex orthodontic cases',
        'Precise control over tooth movement',
        'Durable and reliable treatment',
        'Cost-effective orthodontic solution',
        'Proven track record of success'
      ],
      duration: '30-45 minutes per appointment',
      sessions: '18-36 months treatment duration'
    },
    'clear-aligners': {
      id: 'clear-aligners',
      icon: Eye,
      name: 'Clear Aligners',
      price: 'From ₹80,000',
      description: 'Clear aligners are virtually invisible, removable orthodontic devices that gradually straighten teeth. Custom-made for each patient, they offer a discreet alternative to traditional braces.',
      procedure: [
        'Digital scanning or impressions of teeth',
        '3D treatment planning and simulation',
        'Custom aligner fabrication (series of trays)',
        'Fitting of first set of aligners',
        'Regular progress check-ups every 6-8 weeks',
        'Switching to new aligners every 1-2 weeks',
        'Refinement aligners if needed and retainer phase'
      ],
      benefits: [
        'Nearly invisible appearance',
        'Removable for eating and cleaning',
        'More comfortable than traditional braces',
        'Fewer office visits required',
        'Predictable treatment outcomes'
      ],
      duration: '15-30 minutes per check-up',
      sessions: '12-24 months treatment duration'
    }
  };

  const treatments = [
    {
      category: "General Dentistry",
      treatments: [
        { id: 'root-canal', icon: Heart, name: "Root Canal Treatment", price: "From ₹4,000" },
        { id: 'dental-fillings', icon: Sparkles, name: "Dental Fillings", price: "From ₹1,000" },
        { id: 'crowns-bridges', icon: Shield, name: "Crowns & Bridges", price: "From ₹3,000" },
        { id: 'scaling-cleaning', icon: Shield, name: "Scaling & Cleaning", price: "From ₹1,000" }
      ]
    },
    {
      category: "Cosmetic Dentistry",
      treatments: [
        { id: 'teeth-whitening', icon: Smile, name: "Teeth Whitening", price: "From ₹5,000" },
        { id: 'veneers', icon: Star, name: "Veneers", price: "From ₹8,000" },
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
        { id: 'full-mouth', icon: RefreshCw, name: "Full Mouth Rehabilitation", price: "From ₹1,50,000" }
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

  const handleTreatmentClick = (treatmentId: string) => {
    // Close the mega menu and navigate to treatments page
    setIsOpen(false);
    onNavigate('treatments');
  };

  const handleBookNow = () => {
    onNavigate('appointment');
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
    <>
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

        {/* Mega Menu Dropdown */}
        {isOpen && (
          <div 
  className="fixed left-2 top-[100%] transform -translate-x-1/2 w-screen max-w-5xl bg-white border border-gray-200 rounded-2xl shadow-xl z-50 max-h-[80vh] overflow-y-auto"
            style={{
              maxWidth: '1024px',
              width: 'calc(100vw - 2rem)',
              marginTop: '8px',
              animation: 'slideInFromTop 0.2s ease-out'
            }}
          >
            {/* Header */}
            <div className="relative">
            <div className="bg-mint text-white px-6 py-4 rounded-t-2xl">
              <h3 className="text-xl font-bold">Our Dental Treatments</h3>
              <p className="text-mint-light text-sm">Click on any treatment to learn more</p>
            </div>
<div
    className="absolute left-1/2 top-full mt-2 transform -translate-x-1/2 w-[320px] rounded-2xl bg-white shadow-xl z-50"
    style={{
      maxHeight: '1024px',
      width: 'calc(100vw - 24px)',
      marginTop: '8px',
      animation: 'slideInFromTop 0.2s ease-out',
    }}
            {/* Treatment Categories */}
            <div className="grid md:grid-cols-4 gap-0">
              {treatments.map((category, categoryIndex) => (
                <div key={categoryIndex} className="p-6 border-r border-gray-100 last:border-r-0">
                  <h4 className="font-bold text-gray-900 mb-4 text-center">
                    {category.category}
                  </h4>
                  
                  <div className="space-y-3">
                    {category.treatments.map((treatment, treatmentIndex) => {
                      const IconComponent = treatment.icon;
                      
                      return (
                        <button
                          key={treatmentIndex}
                          onClick={() => handleTreatmentClick(treatment.id)}
                          className="w-full text-left p-3 rounded-xl hover:bg-mint/5 transition-all duration-200 group hover:shadow-md"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="p-2 rounded-lg bg-mint/10 group-hover:bg-mint group-hover:text-white transition-all duration-200">
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

    </>
  );
};

export default InteractiveMegaMenu;