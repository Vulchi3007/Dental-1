import React from 'react';
import { Plane, MapPin, Hotel, Camera, Utensils, Shield, Clock, Users, FileText, CreditCard, Phone, Globe, Star, CheckCircle, Heart, Award, Calculator, Calendar } from 'lucide-react';

const TravelPage = () => {
  const heroStats = [
    { number: "70%", label: "Cost Savings", description: "Save thousands compared to Australia, USA, and UK" },
    { number: "Expert", label: "Dental Care", description: "World-class standards and safety protocols" },
    { number: "0", label: "Waiting Lists", description: "Same week treatment available" },
    { number: "100%", label: "English Speaking", description: "Clear communication throughout" }
  ];

  const costComparison = [
    {
      treatment: "Single Dental Implant",
      indiaPrice: "₹20,000 - ₹35,000",
      australiaPrice: "₹2,00,000 - ₹3,50,000",
      savings: "Up to 85%",
      duration: "3-5 days"
    },
    {
      treatment: "Full Mouth Restoration",
      indiaPrice: "₹1,50,000 - ₹3,00,000",
      australiaPrice: "₹15,00,000 - ₹25,00,000",
      savings: "Up to 80%",
      duration: "7-10 days"
    },
    {
      treatment: "Smile Makeover",
      indiaPrice: "₹80,000 - ₹1,50,000",
      australiaPrice: "₹8,00,000 - ₹12,00,000",
      savings: "Up to 75%",
      duration: "5-7 days"
    },
    {
      treatment: "Root Canal + Crown",
      indiaPrice: "₹8,000 - ₹15,000",
      australiaPrice: "₹80,000 - ₹1,20,000",
      savings: "Up to 85%",
      duration: "2-3 days"
    }
  ];

  const planningSteps = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "Send us your dental X-rays and photos for preliminary assessment and treatment planning.",
      icon: FileText,
      details: [
        "Free virtual consultation",
        "Treatment plan development",
        "Cost estimation",
        "Timeline planning"
      ]
    },
    {
      step: "2",
      title: "Travel Planning",
      description: "We assist with visa guidance, accommodation recommendations, and airport transfers.",
      icon: Plane,
      details: [
        "Medical visa assistance",
        "Flight booking guidance",
        "Hotel recommendations",
        "Airport pickup arrangement"
      ]
    },
    {
      step: "3",
      title: "Treatment Schedule",
      description: "Customized treatment timeline to maximize your stay and ensure optimal results.",
      icon: Calendar,
      details: [
        "Optimized appointment scheduling",
        "Recovery time planning",
        "Sightseeing coordination",
        "Follow-up appointments"
      ]
    },
    {
      step: "4",
      title: "Post-Treatment Care",
      description: "Comprehensive aftercare instructions and follow-up support for your return home.",
      icon: Heart,
      details: [
        "Detailed aftercare instructions",
        "24/7 support hotline",
        "Home dentist coordination",
        "Long-term follow-up"
      ]
    }
  ];

  const whyIndiaReasons = [
    {
      icon: Award,
      title: "World-class dental education system",
      description: "India produces some of the world's finest dentists with rigorous training standards"
    },
    {
      icon: Star,
      title: "Latest technology and equipment",
      description: "State-of-the-art facilities with cutting-edge dental technology"
    },
    {
      icon: Users,
      title: "Experienced, internationally trained dentists",
      description: "Our dentists have international exposure and advanced certifications"
    },
    {
      icon: Shield,
      title: "Strict sterilization and safety protocols",
      description: "ISO certified clinics following international safety standards"
    },
    {
      icon: Camera,
      title: "Rich cultural experience and tourism opportunities",
      description: "Combine your treatment with an incredible cultural journey"
    },
    {
      icon: Heart,
      title: "Excellent hospitality and patient care",
      description: "Renowned Indian hospitality ensures comfortable treatment experience"
    }
  ];

  const mumbaiAttractions = [
    {
      name: "Gateway of India",
      description: "Iconic monument and Mumbai's most famous landmark overlooking the Arabian Sea",
      image: "https://assets.simplotel.com/simplotel/image/upload/x_0,y_1208,w_3492,h_1968,r_0,c_crop,q_80,fl_progressive/w_500,f_auto,c_fit/theory9---premium-service-apts/mumbai_gateway_of_india",
      highlights: ["Historic architecture", "Boat rides to Elephanta", "Street food", "Photography"]
    },
    {
      name: "Marine Drive",
      description: "Beautiful 3.6 km seafront promenade perfect for evening walks and sunset views",
      image: "https://www.trawell.in/admin/images/upload/955980391Mumbai_Marine_Drive_Main.jpg",
      highlights: ["Sunset views", "Queen's Necklace", "Chowpatty Beach", "Local snacks"]
    },
    {
      name: "Bollywood Studios",
      description: "Behind-the-scenes tours of India's film industry and movie sets",
      image: "https://www.pelago.com/img/products/IN-India/bollywood-studio-tour-with-slum-city-tour/daf880ac-bec4-4f55-ac48-ce75af99d62f_bollywood-studio-tour-with-slum-city-tour.jpg",
      highlights: ["Film sets", "Celebrity spotting", "Dance shows", "Souvenir shopping"]
    }
  ];

  const services = [
    {
      icon: FileText,
      title: "Visa Assistance",
      description: "Complete support for medical visa applications and documentation",
      details: [
        "Medical visa (M Visa) guidance",
        "Document preparation checklist",
        "Embassy appointment assistance",
        "Fast-track processing support"
      ]
    },
    {
      icon: Plane,
      title: "Flight & Airport Services",
      description: "Seamless travel arrangements and airport assistance",
      details: [
        "Flight booking assistance",
        "Airport pickup & drop-off",
        "Meet & greet service",
        "Luggage assistance"
      ]
    },
    {
      icon: Hotel,
      title: "Accommodation",
      description: "Comfortable stays near our clinic with patient-friendly amenities",
      details: [
        "Budget to luxury options",
        "Walking distance to clinic",
        "Patient-friendly amenities",
        "Special negotiated rates"
      ]
    },
    {
      icon: Users,
      title: "Personal Coordinator",
      description: "Dedicated patient coordinator for seamless experience",
      details: [
        "24/7 personal support",
        "Language assistance",
        "Emergency coordination",
        "Treatment scheduling"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-mint/10 to-mint/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold text-gray-900 mb-6">
              World-Class Dental Care in India
            </h1>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Experience premium dental treatments at a fraction of the cost. Combine your dental care 
              with an incredible cultural journey in beautiful Mumbai, India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-mint-500 text-white px-8 py-4 rounded-xl text-lg font-semibold">
                Get Your Custom Quote
              </button>
              <a href="tel:+919821274474" className="border-2 border-mint text-mint px-8 py-4 rounded-xl text-lg font-semibold hover:bg-mint hover:text-white transition-colors text-center">
                Call +91 98212 74474
              </a>
            </div>
          </div>

          {/* Hero Stats */}
          <div className="grid md:grid-cols-4 gap-6">
            {heroStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg">
                <div className="text-3xl font-bold text-mint mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cost Comparison Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Treatment Cost Comparison</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how much you can save with dental tourism to India
            </p>
          </div>

          {/* Highlight Box */}
          <div className="bg-gradient-to-r from-mint/10 to-mint/5 rounded-2xl p-8 mb-12 text-center">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Cost Savings up to 85%</h3>
                <p className="text-lg text-gray-600">Save thousands on dental treatments compared to Australia, USA, and UK prices while receiving world-class care.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-mint mb-2">₹20,000 vs ₹2,00,000</div>
                <div className="text-gray-600">Dental Implant Cost Comparison</div>
              </div>
            </div>
          </div>

          {/* Cost Comparison Table */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-mint text-Black px-6 py-4">
              <h3 className="text-xl font-bold">Detailed Cost Comparison</h3>
              <p className="text-mint-light text-sm">*Prices include consultation, treatment, and basic accommodation assistance</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold text-gray-900">Treatment</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-900">India Price</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-900">Australia Price</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-900">Your Savings</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-900">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {costComparison.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">{item.treatment}</td>
                      <td className="px-6 py-4 text-mint font-semibold">{item.indiaPrice}</td>
                      <td className="px-6 py-4 text-gray-600">{item.australiaPrice}</td>
                      <td className="px-6 py-4">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                          {item.savings}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{item.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Planning Your Dental Trip */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Planning Your Dental Trip</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We handle every aspect of your dental tourism journey for a seamless experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {planningSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="bg-mint text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                    {step.step}
                  </div>
                  <div className="bg-mint/10 p-3 rounded-xl w-fit mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-mint" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-mint mr-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Why Choose India */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose India for Dental Care?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              India has become the world's leading destination for dental tourism, offering unmatched quality and value
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyIndiaReasons.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <div className="bg-mint/10 p-3 rounded-xl w-fit mb-4">
                    <IconComponent className="h-8 w-8 text-mint" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              );
            })}
          </div>

          {/* Additional Stats */}
          <div className="mt-16 grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-mint/5 rounded-2xl">
              <div className="text-3xl font-bold text-mint mb-2">Expert</div>
              <div className="text-gray-600">Dental Care</div>
            </div>
            <div className="text-center p-6 bg-mint/5 rounded-2xl">
              <div className="text-3xl font-bold text-mint mb-2">24/7</div>
              <div className="text-gray-600">Emergency Support</div>
            </div>
            <div className="text-center p-6 bg-mint/5 rounded-2xl">
              <div className="text-3xl font-bold text-mint mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Mumbai - Your Dental Destination */}
      <div className="py-20 bg-mint/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Mumbai - Your Dental Destination</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Located in the heart of Mumbai, our clinic is easily accessible from international airports and 
              surrounded by excellent hotels, restaurants, and tourist attractions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {mumbaiAttractions.map((attraction, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={attraction.image} 
                  alt={attraction.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{attraction.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{attraction.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {attraction.highlights.map((highlight, highlightIndex) => (
                      <span key={highlightIndex} className="bg-mint/10 text-mint px-2 py-1 rounded-full text-xs">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Popular Mumbai Attractions</h3>
              <div className="flex flex-wrap justify-center gap-4 text-lg text-mint font-semibold">
                <span>Gateway of India</span>
                <span>•</span>
                <span>Marine Drive</span>
                <span>•</span>
                <span>Bollywood Studios</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Complete Travel Support</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We handle every aspect of your dental tourism journey so you can focus on your treatment and recovery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <div className="bg-mint/10 p-3 rounded-xl w-fit mb-4">
                    <IconComponent className="h-8 w-8 text-mint" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-mint rounded-full mr-2 flex-shrink-0"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-gradient-to-r from-mint/10 to-mint/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Start Your Dental Tourism Journey?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied patients who have transformed their smiles while experiencing the incredible 
            culture and hospitality of India. Let us help you plan your perfect dental vacation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="bg-mint-500 text-white px-8 py-4 rounded-xl text-lg font-semibold">
              Get Your Custom Quote
            </button>
            <a href="tel:+919821274474" className="border-2 border-mint text-mint px-8 py-4 rounded-xl text-lg font-semibold hover:bg-mint hover:text-white transition-colors text-center">
              Call +91 98212 74474
            </a>
          </div>
          <div className="flex justify-center">
            <a 
              href="https://wa.me/919821274474"
              className="bg-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors inline-flex items-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelPage;