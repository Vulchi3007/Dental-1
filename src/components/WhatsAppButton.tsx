import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const whatsappNumber = "+919821274474";
  const message = "Hi! I'm interested in dental treatment at Sans Cavité. Could you please provide more information?";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-full shadow-large hover:from-green-600 hover:to-green-700 active:from-green-700 active:to-green-800 transition-all duration-300 z-50 animate-bounce-gentle hover:shadow-glow-lg transform hover:scale-110 active:scale-105"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
};

export default WhatsAppButton;