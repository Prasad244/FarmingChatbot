import React from 'react';

const steps = [
  {
    title: "Step 1 - Ask a Question",
    description: "Type in your farming-related query, whether it’s about crops, weather, or pricing.",
    icon: "❓", // You can replace these with icons or images
  },
  {
    title: "Step 2 - Receive Instant Answers",
    description: "The chatbot analyzes your input and provides expert advice.",
    icon: "🤖",
  },
  {
    title: "Step 3 - Take Action",
    description: "Use the insights to make informed decisions for your farm.",
    icon: "🚜",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">How It Works</h2>
        
        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-6 shadow-md transition-transform transform hover:scale-105">
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
