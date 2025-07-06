import React, { useState } from 'react';
import { Star, Quote, Play, MapPin, Calendar } from 'lucide-react';

const TestimonialsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const testimonials = [
    {
      name: "Sarah Johnson",
      country: "Australia",
      city: "Sydney",
      treatment: "Full Mouth Restoration",
      rating: 5,
      date: "March 2024",
      text: "I saved over $20,000 compared to Australia and received exceptional care. The team at Sans Cavité made my entire journey comfortable and stress-free. My new smile has completely transformed my confidence! The clinic is modern, the staff speaks perfect English, and the results exceeded my expectations.",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400",
      beforeAfter: "https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=600",
      videoTestimonial: true,
      savings: "$20,000",
      duration: "10 days"
    },
    {
      name: "James Mitchell",
      country: "United Kingdom",
      city: "London",
      treatment: "Dental Implants",
      rating: 5,
      date: "February 2024",
      text: "The quality of care exceeded my expectations. Dr. Abhuta and his team are truly world-class. The implant procedure was painless, and the results are fantastic. I would definitely recommend Sans Cavité to anyone considering dental tourism.",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400",
      beforeAfter: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600",
      videoTestimonial: false,
      savings: "$15,000",
      duration: "5 days"
    },
    {
      name: "Emily Davis",
      country: "United States",
      city: "New York",
      treatment: "Smile Makeover",
      rating: 5,
      date: "January 2024",
      text: "From the initial consultation to the final result, everything was perfect. The clinic is modern, the staff is professional, and the results speak for themselves. I'm so happy I chose dental tourism in India! The veneers look completely natural.",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400",
      beforeAfter: "https://images.pexels.com/photos/6812634/pexels-photo-6812634.jpeg?auto=compress&cs=tinysrgb&w=600",
      videoTestimonial: true,
      savings: "$12,000",
      duration: "7 days"
    },
    {
      name: "Michael Brown",
      country: "Canada",
      city: "Toronto",
      treatment: "Root Canal + Crown",
      rating: 5,
      date: "December 2023",
      text: "I was nervous about getting dental work done abroad, but Sans Cavité exceeded all my expectations. The pain-free treatment and excellent aftercare made the entire experience wonderful. The team was incredibly supportive throughout my stay.",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400",
      beforeAfter: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600",
      videoTestimonial: false,
      savings: "$3,500",
      duration: "3 days"
    },
    {
      name: "Lisa Thompson",
      country: "New Zealand",
      city: "Auckland",
      treatment: "Teeth Whitening + Veneers",
      rating: 5,
      date: "November 2023",
      text: "The transformation is incredible! I can't stop smiling. The team was so professional and made me feel comfortable throughout the entire process. The cost savings were substantial, and the quality is better than what I could get back home.",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400",
      beforeAfter: "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=600",
      videoTestimonial: true,
      savings: "$8,000",
      duration: "6 days"
    },
    {
      name: "Robert Wilson",
      country: "Ireland",
      city: "Dublin",
      treatment: "Full Mouth Rehabilitation",
      rating: 5,
      date: "October 2023",
      text: "After years of dental problems, Sans Cavité gave me my life back. The comprehensive treatment plan was explained clearly, and the execution was flawless. I can eat, speak, and smile with confidence again. Worth every penny!",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400",
      beforeAfter: "https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=600",
      videoTestimonial: false,
      savings: "$25,000",
      duration: "14 days"
    }
  ];

  const beforeAfterGallery = [
    {
      combinedImage: "/smile makeover.jpeg",
      treatment: "Complete Smile Makeover",
      patient: "Sarah J., Australia",
      description: "Porcelain veneers and teeth whitening transformation"
    },
    {
      combinedImage: "/Dental implant.jpeg",
      treatment: "Dental Implant Restoration",
      patient: "James M., UK",
      description: "Single tooth replacement with titanium implant"
    },
    {
      combinedImage: "/Full mouth rehabilitation.jpeg",
      treatment: "Full Mouth Rehabilitation",
      patient: "Robert W., Ireland",
      description: "Complete oral restoration with implants and crowns"
    },
    {
      combinedImage: "/teeth-whitening.jpg",
      treatment: "Veneers & Whitening",
      patient: "Lisa T., New Zealand",
      description: "Cosmetic enhancement with porcelain veneers"
    },
    {
      combinedImage: "/aligners.jpg",
      treatment: "Orthodontic Treatment",
      patient: "Emily D., USA",
      description: "Clear aligner treatment for perfect alignment"
    },
    {
      combinedImage: "/Gum Treatment.jpeg",
      treatment: "Gum Treatment & Crowns",
      patient: "Michael B., Canada",
      description: "Periodontal therapy with crown restoration"
    }
  ];

  const categories = ['All', 'Dental Implants', 'Smile Makeover', 'Full Mouth Restoration', 'Veneers', 'Root Canal'];

  const filteredTestimonials = selectedCategory === 'All' 
    ? testimonials 
    : testimonials.filter(testimonial => testimonial.treatment.includes(selectedCategory));

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-mint mb-6">Patient Testimonials</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from our satisfied international patients who have transformed their smiles and saved thousands 
            of dollars with our world-class dental care in Mumbai.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-6 bg-mint/5 rounded-2xl">
            <div className="text-4xl font-bold text-mint mb-2">5000+</div>
            <div className="text-gray-600">Happy International Patients</div>
          </div>
          <div className="text-center p-6 bg-mint/5 rounded-2xl">
            <div className="text-4xl font-bold text-mint mb-2">98%</div>
            <div className="text-gray-600">Patient Satisfaction Rate</div>
          </div>
          <div className="text-center p-6 bg-mint/5 rounded-2xl">
            <div className="text-4xl font-bold text-mint mb-2">25+</div>
            <div className="text-gray-600">Countries Served</div>
          </div>
          <div className="text-center p-6 bg-mint/5 rounded-2xl">
            <div className="text-4xl font-bold text-mint mb-2">15+</div>
            <div className="text-gray-600">Years of Excellence</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full transition-colors font-medium ${
                selectedCategory === category
                  ? 'bg-mint text-black shadow-lg' 
                  : 'bg-gray-100 text-gray-600 hover:bg-mint hover:text-Black'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {filteredTestimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
              <Quote className="h-8 w-8 text-mint/30 mb-4" />
              
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg">{testimonial.name}</h3>
                  <div className="flex items-center text-sm text-gray-600 mb-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    {testimonial.city}, {testimonial.country}
                  </div>
                  <div className="flex items-center text-sm text-mint font-medium">
                    <Calendar className="h-4 w-4 mr-1" />
                    {testimonial.date}
                  </div>
                </div>
                {testimonial.videoTestimonial && (
                  <div className="bg-mint/10 p-2 rounded-full">
                    <Play className="h-5 w-5 text-mint" />
                  </div>
                )}
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="bg-mint/5 px-4 py-2 rounded-lg mb-4">
                <div className="text-sm font-semibold text-mint">{testimonial.treatment}</div>
              </div>
              
              <p className="text-gray-600 italic leading-relaxed mb-6">"{testimonial.text}"</p>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-green-50 p-3 rounded-lg">
                  <div className="text-lg font-bold text-green-600">{testimonial.savings}</div>
                  <div className="text-xs text-gray-600">Saved</div>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="text-lg font-bold text-blue-600">{testimonial.duration}</div>
                  <div className="text-xs text-gray-600">Treatment Time</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Before & After Gallery */}
        <div className="bg-mint/5 rounded-3xl p-12 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Amazing Smile Transformations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the incredible results our patients have achieved with our expert dental treatments. 
              Each transformation showcases the dramatic improvement and life-changing impact of quality dental care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beforeAfterGallery.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img 
                    src={item.combinedImage} 
                    alt={`${item.treatment} transformation`}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-mint text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Before & After
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.treatment}</h3>
                  <p className="text-mint font-semibold mb-2">{item.patient}</p>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready for Your Own Transformation?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied patients who have achieved their dream smile with our expert dental care. 
              Your transformation story could be next!
            </p>
            <a href="tel:+919821274474" className="bg-mint text-mint px-8 py-3 rounded-xl font-semibold hover:bg-mint-dark transition-colors shadow-lg text-center inline-block">
              Start Your Smile Journey
            </a>
          </div>
        </div>

        {/* Video Testimonials Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Video Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.filter(t => t.videoTestimonial).map((testimonial, index) => (
              <div key={index} className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-48 bg-gradient-to-br from-mint/20 to-mint/10 flex items-center justify-center">
                  <div className="bg-white/90 p-4 rounded-full">
                    <Play className="h-8 w-8 text-mint" />
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                    Video Testimonial
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2">{testimonial.name}</h3>
                  <p className="text-mint font-semibold mb-2">{testimonial.treatment}</p>
                  <p className="text-gray-600 text-sm">{testimonial.country}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-mint/10 to-mint/5 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Success Stories</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the same exceptional care and amazing results that our patients rave about. 
            Start your dental tourism journey with Sans Cavité today.
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

export default TestimonialsPage;