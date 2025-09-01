import React from 'react';
import { Award, Shield, Users, Star, CheckCircle, Globe, Heart, Clock } from 'lucide-react';

const AboutPage = () => {
  const dentists = [
    {
      name: "Dr. Shaurin Abhuta",
      qualification: "BDS, MDS (Oral & Maxillofacial Surgery)",
      experience: "15+ years",
      specialization: "Dental Implants, Oral Surgery, Smile Makeovers",
      image: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Leading dental surgeon with extensive experience in complex oral surgeries and dental implants. Trained internationally and specializes in advanced implant techniques."
    },
    {
      name: "Dr. Priya Sharma",
      qualification: "BDS, MDS (Conservative Dentistry)",
      experience: "12+ years",
      specialization: "Root Canal, Cosmetic Dentistry, Veneers",
      image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Expert in pain-free root canal treatments and cosmetic dentistry. Known for her gentle approach and precision in aesthetic dental procedures."
    },
    {
      name: "Dr. Rajesh Kumar",
      qualification: "BDS, MDS (Orthodontics)",
      experience: "10+ years",
      specialization: "Braces, Clear Aligners, Smile Correction",
      image: "https://images.pexels.com/photos/6812634/pexels-photo-6812634.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Orthodontic specialist with expertise in traditional braces and modern clear aligner treatments. Focuses on creating perfect smiles for patients of all ages."
    }
  ];

  const certifications = [
    { 
      name: "Expert Care", 
      description: "World-Class Dental Standards",
      details: "Ensures consistent quality in all our dental procedures and patient care protocols."
    },
    { 
      name: "Safety First", 
      description: "Highest Safety Standards",
      details: "Highest standard of healthcare quality and patient safety protocols."
    },
    { 
      name: "International Standards", 
      description: "Global Quality Compliance",
      details: "International healthcare standards for quality and patient safety."
    },
    { 
      name: "Advanced Technology", 
      description: "Modern Equipment Standards",
      details: "Safe use of advanced equipment and modern technology with proper safety protocols."
    }
  ];

  const milestones = [
    { year: "2010", event: "Sans Cavité Dental Clinic Established", description: "Started with a vision to provide world-class dental care" },
    { year: "2012", event: "First International Patient", description: "Welcomed our first patient from Australia" },
    { year: "2015", event: "Quality Standards Achieved", description: "Received recognition for healthcare quality excellence" },
    { year: "2018", event: "5000+ International Patients", description: "Milestone achievement in dental tourism" },
    { year: "2020", event: "Advanced Technology Integration", description: "Introduced latest dental equipment and digital systems" },
    { year: "2024", event: "25+ Countries Served", description: "Expanded reach to patients worldwide" }
  ];

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-mint mb-6">About Sans Cavité</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Established in 2010, Sans Cavité has been Mumbai's premier destination for international dental tourism. 
            Our state-of-the-art facility combines cutting-edge technology with compassionate care, serving patients 
            from over 25 countries worldwide with exceptional results and significant cost savings.
          </p>
        </div>

        {/* Our Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded with a vision to make world-class dental care accessible to everyone, Sans Cavité has grown 
              from a small clinic to Mumbai's most trusted dental tourism destination. Our journey began when 
              Dr. Shaurin Abhuta recognized the need for affordable, high-quality dental care for international patients.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Today, we've successfully treated over 5,000 international patients, maintaining a 98% satisfaction rate 
              and building lasting relationships that span continents. Our commitment to excellence has made us a 
              preferred choice for patients seeking premium dental care at affordable prices.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We believe that everyone deserves a healthy, beautiful smile regardless of their location or budget. 
              This philosophy drives us to continuously improve our services and maintain the highest standards of care.
            </p>
            
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 bg-mint/5 rounded-xl">
                <div className="text-3xl font-bold text-mint mb-2">5000+</div>
                <div className="text-sm text-gray-600">International Patients</div>
              </div>
              <div className="text-center p-4 bg-mint/5 rounded-xl">
                <div className="text-3xl font-bold text-mint mb-2">98%</div>
                <div className="text-sm text-gray-600">Satisfaction Rate</div>
              </div>
              <div className="text-center p-4 bg-mint/5 rounded-xl">
                <div className="text-3xl font-bold text-mint mb-2">25+</div>
                <div className="text-sm text-gray-600">Countries Served</div>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Sans Cavité dental clinic interior" 
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
        </div>

        {/* Our Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-mint/5 p-8 rounded-2xl">
            <Heart className="h-12 w-12 text-mint mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To provide world-class dental care that combines advanced technology, expert skills, and compassionate service 
              at affordable prices, making quality dental treatment accessible to patients worldwide while ensuring their 
              comfort and satisfaction throughout their dental tourism journey.
            </p>
          </div>
          <div className="bg-mint/5 p-8 rounded-2xl">
            <Globe className="h-12 w-12 text-mint mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be the leading dental tourism destination globally, recognized for excellence in patient care, 
              innovative treatments, and outstanding results. We envision a world where geographical boundaries 
              don't limit access to quality dental care and beautiful smiles.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-mint/20"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg">
                      <div className="text-2xl font-bold text-mint mb-2">{milestone.year}</div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{milestone.event}</h3>
                      <p className="text-gray-600 text-sm">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10 w-4 h-4 bg-mint rounded-full border-4 border-white shadow-lg"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Meet Our Team */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Meet Our Expert Dentists</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {dentists.map((dentist, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={dentist.image} 
                  alt={dentist.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{dentist.name}</h3>
                  <p className="text-mint font-semibold mb-2">{dentist.qualification}</p>
                  <p className="text-gray-600 mb-2">{dentist.experience} Experience</p>
                  <p className="text-sm text-gray-600 mb-4">{dentist.specialization}</p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{dentist.description}</p>
                  <div className="flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Accreditations */}
        <div className="bg-mint/5 rounded-2xl p-8 mb-20">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Our Quality Standards</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {certifications.map((standard, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-mint/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8 text-mint" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{standard.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{standard.description}</p>
                <p className="text-xs text-gray-500">{standard.details}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our quality standards ensure that we maintain the highest levels of safety, quality, and patient care 
              in accordance with international healthcare protocols. These standards reflect our commitment 
              to excellence and continuous improvement in all aspects of dental care.
            </p>
          </div>
        </div>

        {/* Why Patients Choose Us */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Why International Patients Choose Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <Shield className="h-12 w-12 text-mint mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Safety First</h3>
              <p className="text-gray-600 text-sm">International safety standards with strict protocols and sterilization protocols</p>
            </div>
            <div className="text-center p-6">
              <Users className="h-12 w-12 text-mint mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Expert Team</h3>
              <p className="text-gray-600 text-sm">Internationally trained dentists with 15+ years of experience treating global patients</p>
            </div>
            <div className="text-center p-6">
              <Star className="h-12 w-12 text-mint mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Advanced Technology</h3>
              <p className="text-gray-600 text-sm">State-of-the-art equipment and latest dental techniques for optimal results</p>
            </div>
            <div className="text-center p-6">
              <Clock className="h-12 w-12 text-mint mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">24/7 Support</h3>
              <p className="text-gray-600 text-sm">Round-the-clock patient support and emergency care during your stay</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-mint/10 to-mint/5 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Experience World-Class Dental Care?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied patients who have transformed their smiles with Sans Cavité. 
            Let our expert team help you achieve the perfect smile you've always wanted.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919821274474" className="bg-mint text-mint px-8 py-4 rounded-xl text-lg font-semibold hover:bg-mint-dark transition-colors shadow-lg text-center">
              Schedule Free Consultation
            </a>
            <a href="tel:+919821274474" className="border-2 border-mint text-mint px-8 py-4 rounded-xl text-lg font-semibold hover:bg-mint hover:text-white transition-colors text-center">
              Call +91 98212 74474
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;