import React from 'react';
import { Award, Users, Star, Clock, Heart, Shield, CheckCircle, Phone, MessageCircle, Stethoscope, GraduationCap, Trophy } from 'lucide-react';

interface DoctorsPageProps {
  onNavigate: (page: string) => void;
}

const DoctorsPage = ({ onNavigate }: DoctorsPageProps) => {
  const doctors = [
    {
      name: "Dr. Shaurin Ajay Bhuta",
      title: "Chief Dental Surgeon & Founder",
      qualification: "BDS, MDS (Oral & Maxillofacial Surgery)",
      experience: "17+ years",
      specialization: "Modern Dental Procedures, Oral Surgery, Dental Implants",
      image: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Dr. Shaurin Ajay Bhuta is the chief dental surgeon of Sans Cavité dental clinic, specializing in modern dental procedures with over 17 years of experience in the field. Having treated more than 10,000+ patients including many celebrities, HNI clients, and international patients, Dr. Bhuta brings world-class expertise to every treatment.",
      achievements: [
        "10,000+ successful treatments",
        "Celebrity and HNI clientele",
        "International patient expertise",
        "Advanced surgical procedures",
        "Modern dental technology pioneer"
      ],
      expertise: [
        "Dental Implants",
        "Oral & Maxillofacial Surgery",
        "Smile Makeovers",
        "Complex Reconstructive Surgery",
        "International Patient Care"
      ]
    },
    {
      name: "Dr. Avani Shaurin Bhuta",
      title: "Head Dental Surgeon",
      qualification: "BDS, MDS (Conservative Dentistry)",
      experience: "7+ years",
      specialization: "Modern Dental Procedures, Conservative Dentistry",
      image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Dr. Avani Shaurin Bhuta is the head dental surgeon of Sans Cavité dental clinic with more than 7 years of experience catering to modern day dental procedures. Her expertise in conservative dentistry ensures patients receive the most advanced and minimally invasive treatments available.",
      achievements: [
        "Modern dental procedure specialist",
        "Conservative treatment approach",
        "Advanced restorative techniques",
        "Patient comfort focused",
        "Aesthetic dentistry expert"
      ],
      expertise: [
        "Conservative Dentistry",
        "Aesthetic Restorations",
        "Root Canal Therapy",
        "Cosmetic Dentistry",
        "Preventive Care"
      ]
    },
    {
      name: "Dr. Aweg Saxena",
      title: "Senior Orthodontist",
      qualification: "BDS, MDS (Orthodontics)",
      experience: "20+ years",
      specialization: "Orthodontics, Smile Design, Clear Aligners",
      image: "https://images.pexels.com/photos/6812634/pexels-photo-6812634.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Dr. Aweg Saxena is an orthodontist and integral team member of Sans Cavité dental clinic having more than 20 years of experience in creating and designing smiles all over the world. Having treated celebrities, actors, and pageant winners, he is on the panel of Invisalign and specializes in modern day smile makeovers.",
      achievements: [
        "20+ years global experience",
        "Celebrity and actor clientele",
        "Pageant winner treatments",
        "Invisalign panel member",
        "International smile designer"
      ],
      expertise: [
        "Invisalign Clear Aligners",
        "Traditional Braces",
        "Smile Makeovers",
        "Celebrity Orthodontics",
        "Advanced Smile Design"
      ]
    },
    {
      name: "Dr. Siddharth Raut",
      title: "Senior Endodontist",
      qualification: "BDS, MDS (Endodontics)",
      experience: "17+ years",
      specialization: "Root Canal Procedures, Single Visit Treatments",
      image: "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Dr. Siddharth Raut is an endodontist and integral team member of Sans Cavité having more than 17 years of experience and specializes in root canal procedures with the latest systems which gives patients a comforting experience. Single visit root canals is his forte, having treated thousands of patients for the same.",
      achievements: [
        "17+ years endodontic expertise",
        "Single visit root canal specialist",
        "Thousands of successful treatments",
        "Latest technology integration",
        "Pain-free procedure expert"
      ],
      expertise: [
        "Single Visit Root Canals",
        "Advanced Endodontics",
        "Pain Management",
        "Microscopic Dentistry",
        "Complex Root Canal Cases"
      ]
    }
  ];

  const clinicFeatures = [
    {
      icon: Shield,
      title: "State-of-the-Art Facility",
      description: "Comforting clinic with latest technology and modern machinery"
    },
    {
      icon: Award,
      title: "3D Dental Technology",
      description: "Advanced 3D facilities for better, quicker, and effective procedures"
    },
    {
      icon: Heart,
      title: "Strict Sterilization Protocol",
      description: "Highest care for patient safety with international standards"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced specialists in all dental disciplines"
    }
  ];

  const stats = [
    { number: "50+", label: "Years Combined Experience" },
    { number: "15,000+", label: "Successful Treatments" },
    { number: "25+", label: "Countries Served" },
    { number: "100%", label: "Patient Satisfaction" }
  ];

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-mint mb-6">Meet Our Expert Dental Team</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our world-class team of dental specialists brings decades of combined experience, 
            advanced training, and a commitment to excellence in every treatment. From celebrities 
            to international patients, we provide the highest standard of dental care.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-mint/5 rounded-2xl">
              <div className="text-4xl font-bold text-mint mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Doctors Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Our Dental Specialists</h2>
          <div className="space-y-16">
            {doctors.map((doctor, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <img 
                    src={doctor.image} 
                    alt={doctor.name}
                    className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                  />
                </div>
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="bg-mint/10 text-mint px-4 py-2 rounded-full text-sm font-semibold w-fit mb-4">
                    {doctor.title}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{doctor.name}</h3>
                  <p className="text-lg text-mint font-semibold mb-2">{doctor.qualification}</p>
                  <p className="text-gray-600 mb-4">{doctor.experience} • {doctor.specialization}</p>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">{doctor.description}</p>
                  
                  {/* Expertise */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Areas of Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {doctor.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className="bg-mint/10 text-mint px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Achievements */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {doctor.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-center text-gray-600">
                          <CheckCircle className="h-4 w-4 text-mint mr-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Clinic Features */}
        <div className="bg-mint/5 rounded-3xl p-12 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">World-Class Dental Facility</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sans Cavité dental clinic is a comforting state-of-the-art clinic with the latest technology 
              and modern machinery, ensuring the best possible care for our patients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clinicFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg">
                  <div className="bg-mint/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-mint" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why Choose Our Team */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Why Choose Our Dental Team?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <GraduationCap className="h-12 w-12 text-mint mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Advanced Training</h3>
              <p className="text-gray-600">Our doctors are trained in the latest dental techniques and technologies, ensuring you receive the most advanced care available.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <Trophy className="h-12 w-12 text-mint mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Celebrity Clientele</h3>
              <p className="text-gray-600">Trusted by celebrities, actors, and pageant winners, our team delivers Hollywood-level dental care and smile transformations.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 text-mint mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">International Experience</h3>
              <p className="text-gray-600">With extensive experience treating international patients, we understand diverse needs and provide culturally sensitive care.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <Stethoscope className="h-12 w-12 text-mint mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Specialized Expertise</h3>
              <p className="text-gray-600">Each doctor specializes in specific areas, ensuring you receive expert care from the most qualified professional for your needs.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <Clock className="h-12 w-12 text-mint mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Efficient Treatment</h3>
              <p className="text-gray-600">Our expertise allows for efficient, single-visit treatments when possible, minimizing your time away from home.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <Heart className="h-12 w-12 text-mint mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Patient-Centered Care</h3>
              <p className="text-gray-600">We prioritize patient comfort and satisfaction, ensuring every treatment is as comfortable and stress-free as possible.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-mint/10 to-mint/5 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Meet Our Expert Team?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Schedule your consultation with our world-class dental specialists and experience the difference 
            that expertise, technology, and personalized care can make for your smile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
              onClick={() => onNavigate('appointment')}
              className="bg-mint text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-mint-dark transition-colors shadow-lg"
            >
              Schedule Consultation
            </button>
            <a 
              href="tel:+919821274474"
              className="border-2 border-mint text-mint px-8 py-4 rounded-xl text-lg font-semibold hover:bg-mint hover:text-white transition-colors text-center"
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
  );
};

export default DoctorsPage;