import React from 'react';

const features = [
  {
    title: "Crop Advice",
    description: "Get tailored recommendations for planting, fertilization, and harvesting based on your region.",
    icon: "🌱", // You can use any icon or SVG here
  },
  {
    title: "Pest Management",
    description: "Identify common pests and diseases, and learn how to protect your crops.",
    icon: "🐛",
  },
  {
    title: "Weather Forecast",
    description: "Receive real-time weather updates for your farm location to optimize your operations.",
    icon: "☀️",
  },
  {
    title: "Market Prices",
    description: "Stay informed about the latest crop prices and market trends.",
    icon: "💰",
  },
  {
    title: "Farm Management Tips",
    description: "Explore smart farming techniques to increase your productivity.",
    icon: "🌾",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">What Our AI Chatbot Can Do for You</h2>
        
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
