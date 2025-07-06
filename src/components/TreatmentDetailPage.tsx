import React from 'react';
import { ArrowLeft, Clock, Calendar, CheckCircle, Star, Phone, MessageCircle } from 'lucide-react';

interface TreatmentDetailPageProps {
  treatmentId: string;
  onNavigate: (page: string) => void;
}

const TreatmentDetailPage = ({ treatmentId, onNavigate }: TreatmentDetailPageProps) => {
  const treatmentData: { [key: string]: any } = {
    'root-canal': {
      icon: '🦷',
      name: 'Root Canal Treatment',
      price: 'From ₹4,000',
      category: 'General Dentistry',
      heroImage: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Root canal treatment is a dental procedure used to treat infected or severely damaged teeth. It involves removing the infected pulp from inside the tooth, cleaning and disinfecting the root canals, and then filling and sealing the space to prevent further infection.',
      detailedDescription: 'Root canal therapy is one of the most effective ways to save a natural tooth that has been severely damaged by decay, trauma, or infection. The procedure involves accessing the inner chamber of the tooth (pulp chamber) and carefully removing the infected or inflamed tissue. Our advanced techniques and modern equipment ensure a comfortable, pain-free experience.',
      procedure: [
        'Local anesthesia is administered to numb the treatment area completely',
        'Small access hole is carefully drilled into the affected tooth',
        'Infected pulp and bacteria are completely removed from root canals',
        'Root canals are thoroughly cleaned, disinfected, and shaped using specialized instruments',
        'Canals are filled with biocompatible gutta-percha material for permanent sealing',
        'Access hole is sealed with temporary or permanent filling material',
        'Crown placement may be recommended for additional protection and strength'
      ],
      benefits: [
        'Saves your natural tooth from extraction',
        'Eliminates severe pain and infection completely',
        'Prevents spread of infection to surrounding teeth and tissues',
        'Restores normal chewing and biting function',
        'Cost-effective compared to extraction and replacement options',
        'Maintains proper jaw alignment and facial structure',
        'High success rate of 85-97% with proper care'
      ],
      duration: '60-90 minutes per session',
      sessions: '1-3 visits depending on complexity',
      recovery: 'Most patients experience relief within 24-48 hours. Complete healing takes 1-2 weeks.',
      aftercare: [
        'Take prescribed antibiotics and pain medication as directed',
        'Avoid chewing on the treated tooth until permanent restoration',
        'Maintain excellent oral hygiene with gentle brushing',
        'Attend follow-up appointments as scheduled',
        'Consider crown placement for long-term protection'
      ],
      cost: {
        consultation: '₹500',
        treatment: '₹4,000 - ₹8,000',
        crown: '₹3,000 - ₹15,000',
        total: '₹7,500 - ₹23,500'
      }
    },
    'dental-implants': {
      icon: '🦷',
      name: 'Dental Implants',
      price: 'From ₹20,000',
      category: 'Oral Surgery',
      heroImage: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Dental implants are revolutionary artificial tooth roots made of biocompatible titanium that are surgically placed into the jawbone to replace missing teeth. They provide the most natural-looking and permanent solution for tooth replacement available today.',
      detailedDescription: 'Dental implants represent the gold standard in tooth replacement technology. Made from medical-grade titanium, these artificial roots integrate with your jawbone through a process called osseointegration, creating a stable foundation that can last a lifetime with proper care.',
      procedure: [
        'Comprehensive 3D examination and detailed imaging (CBCT scan)',
        'Personalized treatment planning and implant selection',
        'Precise surgical placement of titanium implant into jawbone',
        'Healing period for osseointegration (bone fusion) - 3-6 months',
        'Abutment placement procedure to connect implant and crown',
        'Custom crown fabrication using advanced materials',
        'Final adjustments and bite verification for perfect function'
      ],
      benefits: [
        'Permanent, lifetime tooth replacement solution',
        'Looks, feels, and functions exactly like natural teeth',
        'Preserves jawbone density and prevents bone loss',
        'No negative impact on adjacent healthy teeth',
        'Exceptional success rate of 95-98%',
        'Improved chewing efficiency and speech clarity',
        'Enhanced facial support and youthful appearance'
      ],
      duration: '1-2 hours per implant placement',
      sessions: '3-4 visits over 4-6 months',
      recovery: 'Initial healing: 7-10 days. Complete osseointegration: 3-6 months.',
      aftercare: [
        'Follow post-surgical instructions carefully',
        'Take prescribed medications as directed',
        'Maintain excellent oral hygiene around implant site',
        'Avoid hard foods during initial healing period',
        'Attend all follow-up appointments for monitoring'
      ],
      cost: {
        consultation: '₹1,000',
        implant: '₹20,000 - ₹35,000',
        abutment: '₹5,000 - ₹10,000',
        crown: '₹8,000 - ₹20,000',
        total: '₹34,000 - ₹66,000'
      }
    },
    'teeth-whitening': {
      icon: '✨',
      name: 'Professional Teeth Whitening',
      price: 'From ₹5,000',
      category: 'Cosmetic Dentistry',
      heroImage: 'https://images.pexels.com/photos/6812634/pexels-photo-6812634.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Professional teeth whitening is an advanced cosmetic dental treatment that safely removes stains and discoloration from teeth, resulting in a dramatically brighter, more confident smile.',
      detailedDescription: 'Our professional whitening system uses advanced LED technology and pharmaceutical-grade whitening gel to achieve results that are impossible with over-the-counter products. The treatment is safe, effective, and can lighten teeth by 3-8 shades in a single session.',
      procedure: [
        'Comprehensive consultation and current shade assessment',
        'Professional teeth cleaning to remove surface stains and plaque',
        'Gums and soft tissues are carefully protected with special barrier',
        'Professional-strength whitening gel is precisely applied to teeth',
        'Gel is activated using advanced LED light technology',
        'Process is repeated 2-3 times in one session for optimal results',
        'Final shade is recorded and detailed aftercare instructions provided'
      ],
      benefits: [
        'Immediate visible results in just one session',
        'Safe and effective treatment under professional supervision',
        'Dramatically boosts confidence and self-esteem',
        'Professional monitoring ensures optimal safety',
        'Long-lasting results with proper maintenance',
        'Customized treatment for your specific needs',
        'No damage to tooth enamel when done professionally'
      ],
      duration: '60-90 minutes per session',
      sessions: '1-2 sessions for optimal results',
      recovery: 'No downtime required. Some sensitivity may occur for 24-48 hours.',
      aftercare: [
        'Avoid staining foods and drinks for 48 hours',
        'Use provided desensitizing gel if needed',
        'Maintain good oral hygiene',
        'Consider touch-up treatments every 6-12 months',
        'Use whitening toothpaste to maintain results'
      ],
      cost: {
        consultation: '₹500',
        inOffice: '₹5,000 - ₹12,000',
        takeHome: '₹3,000 - ₹8,000',
        maintenance: '₹2,000 - ₹5,000',
        total: '₹5,500 - ₹25,500'
      }
    },
    'braces': {
      icon: '🦷',
      name: 'Traditional Braces',
      price: 'From ₹40,000',
      category: 'Orthodontics',
      heroImage: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Traditional metal braces use high-grade stainless steel brackets and wires to gradually move teeth into proper alignment. They remain the most effective method for correcting complex orthodontic issues.',
      detailedDescription: 'Metal braces are the time-tested solution for achieving perfectly straight teeth. Using advanced bracket and wire technology, they can correct even the most complex orthodontic problems including severe crowding, spacing issues, and bite irregularities.',
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
        'Suitable for patients of all ages',
        'Can correct severe bite problems and jaw misalignment'
      ],
      duration: '30-45 minutes per adjustment appointment',
      sessions: '18-36 months total treatment duration',
      recovery: 'Mild discomfort for 2-3 days after each adjustment.',
      aftercare: [
        'Maintain excellent oral hygiene with special brushes',
        'Avoid hard, sticky, and sugary foods',
        'Wear rubber bands as prescribed',
        'Attend all scheduled adjustment appointments',
        'Protect teeth during sports with mouthguard'
      ],
      cost: {
        consultation: '₹1,000',
        treatment: '₹40,000 - ₹80,000',
        retainers: '₹5,000 - ₹10,000',
        maintenance: '₹2,000 per visit',
        total: '₹46,000 - ₹90,000'
      }
    },
    'clear-aligners': {
      icon: '👁️',
      name: 'Clear Aligners',
      price: 'From ₹80,000',
      category: 'Orthodontics',
      heroImage: 'https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Clear aligners are virtually invisible, custom-made removable orthodontic devices that gradually straighten teeth using gentle, controlled force.',
      detailedDescription: 'Clear aligners represent the latest advancement in orthodontic technology. Using 3D computer modeling and precision manufacturing, each set of aligners is custom-designed to move your teeth incrementally toward their ideal position.',
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
        'Better oral hygiene maintenance during treatment',
        'No dietary restrictions or food limitations'
      ],
      duration: '15-30 minutes per progress check-up',
      sessions: '12-24 months total treatment duration',
      recovery: 'Mild pressure for 2-3 days with each new aligner set.',
      aftercare: [
        'Wear aligners 20-22 hours per day',
        'Remove only for eating, drinking, and cleaning',
        'Clean aligners daily with special cleaning crystals',
        'Maintain excellent oral hygiene',
        'Store aligners in provided case when not wearing'
      ],
      cost: {
        consultation: '₹1,500',
        treatment: '₹80,000 - ₹1,50,000',
        retainers: '₹8,000 - ₹15,000',
        refinements: '₹10,000 - ₹20,000',
        total: '₹99,500 - ₹1,86,500'
      }
    },
    'veneers': {
      icon: '⭐',
      name: 'Porcelain Veneers',
      price: 'From ₹8,000',
      category: 'Cosmetic Dentistry',
      heroImage: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Porcelain veneers are ultra-thin, custom-made shells of tooth-colored porcelain that are bonded to the front surface of teeth to create a beautiful, natural-looking smile.',
      detailedDescription: 'Porcelain veneers are the ultimate solution for achieving a perfect smile. These wafer-thin shells are crafted from high-quality dental porcelain that mimics the natural translucency and color of tooth enamel, providing stunning, long-lasting results.',
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
        'Immediate confidence boost and enhanced appearance',
        'Corrects multiple cosmetic issues simultaneously'
      ],
      duration: '2-3 hours per appointment',
      sessions: '2-3 visits over 2-3 weeks',
      recovery: 'No downtime. Avoid hard foods for first 24 hours.',
      aftercare: [
        'Maintain excellent oral hygiene',
        'Avoid biting hard objects or using teeth as tools',
        'Wear nightguard if you grind your teeth',
        'Regular dental check-ups and cleanings',
        'Avoid excessive force on veneered teeth'
      ],
      cost: {
        consultation: '₹1,000',
        perVeneer: '₹8,000 - ₹20,000',
        temporaries: '₹1,000 per tooth',
        maintenance: '₹500 per visit',
        total: '₹9,500 - ₹21,500 per tooth'
      }
    }
  };

  const treatment = treatmentData[treatmentId];

  if (!treatment) {
    return (
      <div className="min-h-screen bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Treatment Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">The requested treatment information is not available.</p>
          <button 
            onClick={() => onNavigate('treatments')}
            className="bg-mint text-white px-8 py-3 rounded-xl font-semibold hover:bg-mint-dark transition-colors"
          >
            View All Treatments
          </button>
        </div>
      </div>
    );
  }

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
                <span className="text-4xl mr-4">{treatment.icon}</span>
                <div className="bg-mint/10 text-mint px-4 py-2 rounded-full text-sm font-semibold">
                  {treatment.category}
                </div>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">{treatment.name}</h1>
              <p className="text-2xl font-bold text-mint mb-6">{treatment.price}</p>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {treatment.description}
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
                src={treatment.heroImage} 
                alt={treatment.name}
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Treatment Details */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Overview */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Treatment Overview</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {treatment.detailedDescription}
            </p>
          </div>

          {/* Quick Info */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-mint/5 p-6 rounded-2xl text-center">
              <Clock className="h-8 w-8 text-mint mb-3 mx-auto" />
              <h3 className="font-semibold text-gray-900 mb-2">Duration</h3>
              <p className="text-gray-600">{treatment.duration}</p>
            </div>
            <div className="bg-mint/5 p-6 rounded-2xl text-center">
              <Calendar className="h-8 w-8 text-mint mb-3 mx-auto" />
              <h3 className="font-semibold text-gray-900 mb-2">Sessions</h3>
              <p className="text-gray-600">{treatment.sessions}</p>
            </div>
            <div className="bg-mint/5 p-6 rounded-2xl text-center">
              <Star className="h-8 w-8 text-mint mb-3 mx-auto" />
              <h3 className="font-semibold text-gray-900 mb-2">Recovery</h3>
              <p className="text-gray-600">{treatment.recovery}</p>
            </div>
          </div>

          {/* Procedure Steps */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">How We Perform the Treatment</h2>
            <div className="space-y-4">
              {treatment.procedure.map((step: string, index: number) => (
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Treatment Benefits</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {treatment.benefits.map((benefit: string, index: number) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-mint/5 rounded-xl">
                  <CheckCircle className="h-6 w-6 text-mint flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Aftercare */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Post-Treatment Care</h2>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-xl">
              <ul className="space-y-3">
                {treatment.aftercare.map((instruction: string, index: number) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{instruction}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Cost Breakdown */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Cost Breakdown</h2>
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
              <div className="bg-mint text-white px-6 py-4">
                <h3 className="text-xl font-bold">Treatment Costs</h3>
                <p className="text-mint-light">Transparent pricing with no hidden fees</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {Object.entries(treatment.cost).map(([item, cost]) => (
                    <div key={item} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                      <span className="text-gray-700 capitalize font-medium">
                        {item.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                      <span className="text-mint font-bold text-lg">{cost}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-mint/10 to-mint/5 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Schedule your free consultation today and take the first step towards your perfect smile. 
              Our expert team is ready to help you achieve the results you've always wanted.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button 
                onClick={() => onNavigate('appointment')}
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

export default TreatmentDetailPage;