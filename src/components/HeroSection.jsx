import React from 'react';
import farm from '../assets/farm.jpeg';
import chatbotLogo from '../assets/logo.webp'; // Import your chatbot logo

const HeroSection = () => {
  const scrollToChatbot = () => {
    document.getElementById('chatbot-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-cover bg-center h-screen flex items-center relative" style={{ backgroundImage: `url(${farm})` }}>
      <div className="container mx-auto px-6 text-center lg:text-left">
        
        {/* Headline */}
        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
          Agricultural Insights Made Simple with AI Chatbot
        </h1>

        {/* Subtitle */}
        <p className="text-lg lg:text-xl text-gray-200 mb-6 max-w-2xl">
          Get real-time farming advice, weather updates, pest control tips, and market prices directly from your personalized AI assistant. Start chatting now to make smart decisions for your farm.
        </p>

        {/* Call to Action Button */}
        {/* <a
          onClick={scrollToChatbot}
          className="bg-green-600 text-white px-6 py-3 rounded-md font-semibold text-lg hover:bg-green-500 transition duration-300 ease-in-out cursor-pointer"
        >
          Start Chatting Now
        </a> */}
      </div>

      {/* Chatbot Logo */}
      <div
        className="absolute top-20 right-10 cursor-pointer w-16 h-16 rounded-full bg-white bg-opacity-60 flex items-center justify-center border-2 border-white hover:opacity-80 transition-opacity duration-300"
        onClick={scrollToChatbot}
        title="Start Chatting with the Bot"
      >
        <img src={chatbotLogo} alt="Chatbot Logo" className="w-10 h-10 rounded-full" />
      </div>
    </section>
  );
};

export default HeroSection;
