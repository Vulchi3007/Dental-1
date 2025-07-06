import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Heart, Sparkles, Shield, Smile, Star, Scissors, Bluetooth as Tooth, Braces, Eye, RefreshCw, Clock, CheckCircle, Calendar, Phone, ArrowRight, X } from 'lucide-react';

interface InteractiveTreatmentMenuProps {
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
  category: string;
}

const InteractiveTreatmentMenu = ({ onNavigate, currentPage }: InteractiveTreatmentMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
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
      category: 'General Dentistry',
      description: 'Root canal treatment is a dental procedure used to treat infected or severely damaged teeth. It involves removing the infected pulp from inside the tooth, cleaning and disinfecting the root canals, and then filling and sealing the space to prevent further infection.',
      procedure: [
        'Local anesthesia is administered to numb the treatment area',
        'Small access hole is carefully drilled into the affected tooth',
        'Infected pulp and bacteria are completely removed from root canals',
        'Root canals are thoroughly cleaned, disinfected, and shaped',
        'Canals are filled with biocompatible gutta-percha material',
        'Access hole is sealed with temporary or permanent filling',
        'Crown placement may be recommended for additional protection'
      ],
      benefits: [
        'Saves your natural tooth from extraction',
        'Eliminates severe pain and infection',
        'Prevents spread of infection to surrounding teeth',
        'Restores normal chewing and biting function',
        'Cost-effective compared to extraction and replacement',
        'Maintains proper jaw alignment and facial structure'
      ],
      duration: '60-90 minutes per session',
      sessions: '1-3 visits depending on complexity'
    },
    'dental-fillings': {
      id: 'dental-fillings',
      icon: Sparkles,
      name: 'Dental Fillings',
      price: 'From ₹1,000',
      category: 'General Dentistry',
      description: 'Dental fillings are used to restore teeth damaged by decay back to their normal function and shape. We use advanced tooth-colored composite materials that blend seamlessly with your natural teeth for an invisible repair.',
      procedure: [
        'Local anesthesia is applied if needed for comfort',
        'Decayed or damaged tooth material is carefully removed',
        'Tooth cavity is cleaned and properly prepared',
        'Composite filling material is applied in precise layers',
        'Each layer is hardened using specialized curing light',
        'Filling is shaped and polished to match natural tooth contour',
        'Bite is checked and adjusted for optimal comfort'
      ],
      benefits: [
        'Natural tooth-colored appearance that blends invisibly',
        'Mercury-free and completely safe for all patients',
        'Bonds directly to tooth structure for strength',
        'Preserves more of your natural healthy tooth',
        'Immediate function and comfort after treatment',
        'Long-lasting durability with proper care'
      ],
      duration: '30-60 minutes per filling',
      sessions: '1 visit per filling'
    },
    'teeth-whitening': {
      id: 'teeth-whitening',
      name: 'Professional Teeth Whitening',
      icon: Smile,
      price: 'From ₹5,000',
      category: 'Cosmetic Dentistry',
      description: 'Professional teeth whitening is an advanced cosmetic dental treatment that safely removes stains and discoloration from teeth, resulting in a dramatically brighter, more confident smile. Our state-of-the-art whitening systems can lighten teeth by 3-8 shades in a single session.',
      procedure: [
        'Comprehensive consultation and current shade assessment',
        'Professional teeth cleaning to remove surface stains and plaque',
        'Gums and soft tissues are carefully protected with special barrier',
        'Professional-strength whitening gel is precisely applied to teeth',
        'Gel is activated using advanced LED light or laser technology',
        'Process is repeated 2-3 times in one session for optimal results',
        'Final shade is recorded and detailed aftercare instructions provided'
      ],
      benefits: [
        'Immediate visible results in just one session',
        'Safe and effective treatment under professional supervision',
        'Dramatically boosts confidence and self-esteem',
        'Professional monitoring ensures optimal safety',
        'Long-lasting results with proper maintenance',
        'Customized treatment for your specific needs'
      ],
      duration: '60-90 minutes per session',
      sessions: '1-2 sessions for optimal results'
    },
    'dental-implants': {
      id: 'dental-implants',
      icon: Tooth,
      name: 'Dental Implants',
      price: 'From ₹20,000',
      category: 'Oral Surgery',
      description: 'Dental implants are revolutionary artificial tooth roots made of biocompatible titanium that are surgically placed into the jawbone to replace missing teeth. They provide the most natural-looking and permanent solution for tooth replacement available today.',
      procedure: [
        'Comprehensive 3D examination and detailed imaging',
        'Personalized treatment planning and implant selection',
        'Precise surgical placement of titanium implant into jawbone',
        'Healing period for osseointegration (bone fusion) - 3-6 months',
        'Abutment placement procedure to connect implant and crown',
        'Custom crown fabrication and precise fitting',
        'Final adjustments and bite verification for perfect function'
      ],
      benefits: [
        'Permanent, lifetime tooth replacement solution',
        'Looks, feels, and functions exactly like natural teeth',
        'Preserves jawbone density and facial structure',
        'No negative impact on adjacent healthy teeth',
        'Exceptional success rate of 95-98%',
        'Improved chewing efficiency and speech clarity'
      ],
      duration: '1-2 hours per implant placement',
      sessions: '3-4 visits over 4-6 months'
    },
    'braces': {
      id: 'braces',
      icon: Braces,
      name: 'Traditional Braces',
      price: 'From ₹40,000',
      category: 'Orthodontics',
      description: 'Traditional metal braces use high-grade stainless steel brackets and wires to gradually move teeth into proper alignment. They remain the most effective and reliable method for correcting complex orthodontic issues including severe crowding, spacing, and bite problems.',
      procedure: [
        'Comprehensive orthodontic consultation and detailed records',
        'Personalized treatment planning and timeline development',
        'Precise bonding of brackets to teeth using dental adhesive',
        'Placement of archwires and securing with colorful elastic ties',
        'Regular adjustment appointments every 4-6 weeks',
        'Continuous monitoring of progress and wire changes',
        'Careful removal of braces and custom retainer fitting'
      ],
      benefits: [
        'Most effective treatment for complex orthodontic cases',
        'Precise control over individual tooth movement',
        'Extremely durable and reliable treatment method',
        'Most cost-effective orthodontic solution available',
        'Proven track record with decades of successful results',
        'Suitable for patients of all ages'
      ],
      duration: '30-45 minutes per adjustment appointment',
      sessions: '18-36 months total treatment duration'
    },
    'clear-aligners': {
      id: 'clear-aligners',
      icon: Eye,
      name: 'Clear Aligners',
      price: 'From ₹80,000',
      category: 'Orthodontics',
      description: 'Clear aligners are virtually invisible, custom-made removable orthodontic devices that gradually straighten teeth using gentle, controlled force. Each set of aligners is precisely engineered to move teeth incrementally toward their ideal position.',
      procedure: [
        'Advanced digital scanning or precise impressions of teeth',
        'Sophisticated 3D treatment planning and outcome simulation',
        'Custom aligner fabrication using cutting-edge technology',
        'Fitting of first set of aligners with detailed instructions',
        'Regular progress monitoring appointments every 6-8 weeks',
        'Systematic progression through aligner series every 1-2 weeks',
        'Refinement aligners if needed and retainer phase'
      ],
      benefits: [
        'Nearly invisible appearance for discreet treatment',
        'Completely removable for eating, drinking, and cleaning',
        'Significantly more comfortable than traditional braces',
        'Fewer required office visits for busy lifestyles',
        'Highly predictable treatment outcomes with 3D planning',
        'Better oral hygiene maintenance during treatment'
      ],
      duration: '15-30 minutes per progress check-up',
      sessions: '12-24 months total treatment duration'
    },
    'veneers': {
      id: 'veneers',
      icon: Star,
      name: 'Porcelain Veneers',
      price: 'From ₹8,000',
      category: 'Cosmetic Dentistry',
      description: 'Porcelain veneers are ultra-thin, custom-made shells of tooth-colored porcelain that are bonded to the front surface of teeth to create a beautiful, natural-looking smile. They can dramatically improve the appearance of stained, chipped, or misaligned teeth.',
      procedure: [
        'Comprehensive smile analysis and treatment planning',
        'Minimal tooth preparation (0.5mm enamel removal)',
        'Precise impressions or digital scans for custom fabrication',
        'Temporary veneers placed for protection and aesthetics',
        'Custom porcelain veneers crafted in specialized laboratory',
        'Careful bonding of veneers using advanced adhesive techniques',
        'Final polishing and bite adjustment for perfect fit'
      ],
      benefits: [
        'Dramatic smile transformation in just 2-3 visits',
        'Natural-looking results that blend with existing teeth',
        'Stain-resistant porcelain maintains color permanently',
        'Minimal tooth structure removal required',
        'Long-lasting results with 10-15 year lifespan',
        'Immediate confidence boost and enhanced appearance'
      ],
      duration: '2-3 hours per appointment',
      sessions: '2-3 visits over 2-3 weeks'
    },
    'crowns-bridges': {
      id: 'crowns-bridges',
      icon: Shield,
      name: 'Crowns & Bridges',
      price: 'From ₹3,000',
      category: 'General Dentistry',
      description: 'Dental crowns and bridges are custom-crafted restorations that protect damaged teeth and replace missing teeth. Crowns cap individual teeth while bridges span gaps, both restoring function and appearance with natural-looking results.',
      procedure: [
        'Thorough examination and treatment planning',
        'Tooth preparation and shaping for optimal fit',
        'Precise impressions or digital scans taken',
        'Temporary restoration placed for protection',
        'Custom crown or bridge fabricated in laboratory',
        'Careful fitting and adjustment for perfect bite',
        'Permanent cementation and final polishing'
      ],
      benefits: [
        'Restores full chewing and speaking function',
        'Protects weakened teeth from further damage',
        'Natural appearance that matches existing teeth',
        'Long-lasting solution with proper care',
        'Prevents adjacent teeth from shifting',
        'Maintains facial support and jaw alignment'
      ],
      duration: '1-2 hours per appointment',
      sessions: '2-3 visits over 2-3 weeks'
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
        { id: 'veneers', icon: Star, name: "Porcelain Veneers", price: "From ₹8,000" },
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
    // Close the mega menu and navigate to individual treatment page
    setIsOpen(false);
    onNavigate(`treatment-${treatmentId}`);
  };

  const handleBookNow = () => {
    onNavigate('appointment');
  };

  const closeTreatmentDetails = () => {
    setSelectedTreatment(null);
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

    {isOpen && (
  <div className="absolute top-full inset-x-0 mt-2 mx-auto max-w-4xl bg-white border border-gray-200 rounded-2xl shadow-xl z-50 max-h-[80vh] overflow-y-auto">
            {/* Header */}
            <div className="bg-gradient-to-r from-mint to-mint-dark text-white px-6 py-4 rounded-t-2xl">
              <h3 className="text-xl font-bold">Our Dental Treatments</h3>
              <p className="text-mint-light text-sm">Click on any treatment to learn more</p>
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
                          className="w-full text-left p-3 rounded-xl hover:bg-mint/5 transition-all duration-200 group hover:shadow-md border border-transparent hover:border-mint/20"
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
                            <ArrowRight className="h-3 w-3 text-gray-400 group-hover:text-mint transition-colors" />
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

      {/* Treatment Details Section */}
      {selectedTreatment && (
          <div 
            className="fixed left-1/2 top-full transform -translate-x-1/2 w-screen bg-white border border-gray-200 rounded-2xl shadow-xl z-50 max-h-[80vh] overflow-y-auto"
              isAnimating ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
          >
              width: 'calc(100vw - 2rem)',
              marginTop: '8px',
              animation: 'slideInFromTop 0.2s ease-out'
              <button
                onClick={closeTreatmentDetails}
                className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-white/20 p-3 rounded-xl">
                  <selectedTreatment.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold">{selectedTreatment.name}</h2>
                  <p className="text-mint-light text-lg font-semibold">{selectedTreatment.price}</p>
                </div>
              </div>
              <div className="bg-white/10 px-4 py-2 rounded-lg inline-block">
                <span className="text-sm font-medium">{selectedTreatment.category}</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-8">
              {/* What is it? */}
              <div className="animate-slide-in-from-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <div className="bg-mint/10 p-2 rounded-lg mr-3">
                    <CheckCircle className="h-6 w-6 text-mint" />
                  </div>
                  What is {selectedTreatment.name}?
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {selectedTreatment.description}
                </p>
              </div>

              {/* How we perform it */}
              <div className="animate-slide-in-from-right">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <div className="bg-mint/10 p-2 rounded-lg mr-3">
                    <Calendar className="h-6 w-6 text-mint" />
                  </div>
                  How We Perform It
                </h3>
                <div className="space-y-3">
                  {selectedTreatment.procedure.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                      <div className="bg-mint text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="animate-slide-in-from-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <div className="bg-mint/10 p-2 rounded-lg mr-3">
                    <Star className="h-6 w-6 text-mint" />
                  </div>
                  Benefits
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedTreatment.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-mint/5 rounded-xl">
                      <CheckCircle className="h-5 w-5 text-mint flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Duration & Sessions */}
              <div className="grid md:grid-cols-2 gap-6 animate-slide-in-from-right">
                <div className="bg-gradient-to-br from-mint/10 to-mint/5 p-6 rounded-xl">
                  <div className="flex items-center space-x-3 mb-3">
                    <Clock className="h-6 w-6 text-mint" />
                    <h4 className="text-lg font-bold text-gray-900">Duration</h4>
                  </div>
                  <p className="text-gray-700 font-semibold">{selectedTreatment.duration}</p>
                </div>
                <div className="bg-gradient-to-br from-mint/10 to-mint/5 p-6 rounded-xl">
                  <div className="flex items-center space-x-3 mb-3">
                    <Calendar className="h-6 w-6 text-mint" />
                    <h4 className="text-lg font-bold text-gray-900">Sessions</h4>
                  </div>
                  <p className="text-gray-700 font-semibold">{selectedTreatment.sessions}</p>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-mint/10 to-mint/5 p-8 rounded-2xl text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Schedule your free consultation today and take the first step towards your perfect smile. 
                  Our expert team is ready to help you achieve the results you've always wanted.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={handleBookNow}
                    className="bg-mint text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-mint-dark transition-colors shadow-lg"
                  >
                    Book Free Consultation
                  </button>
                  <a 
                    href="tel:+919821274474"
                    className="border-2 border-mint text-mint px-8 py-4 rounded-xl text-lg font-semibold hover:bg-mint hover:text-white transition-colors"
                  >
                    <Phone className="h-5 w-5 inline mr-2" />
                    Call +91 98212 74474
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

export default InteractiveTreatmentMenu;