import React from 'react';

// Enhanced blog posts data
const blogPosts = [
  {
    title: "How AI is Revolutionizing Agriculture",
    excerpt: "Discover how artificial intelligence is transforming the agricultural landscape with data-driven insights, predictive analysis, and real-time recommendations.",
    date: "September 25, 2024",
    author: "John Doe",
    link: "#",
  },
  {
    title: "Sustainable Farming: Adopting AI for a Greener Future",
    excerpt: "Learn how sustainable farming practices combined with AI are helping to conserve resources, reduce waste, and increase yield productivity.",
    date: "October 1, 2024",
    author: "Jane Smith",
    link: "#",
  },
  {
    title: "Precision Agriculture: Using AI to Optimize Crop Management",
    excerpt: "Explore the world of precision agriculture and how AI is enabling farmers to make more informed decisions on irrigation, fertilization, and pest control.",
    date: "October 3, 2024",
    author: "Mike Johnson",
    link: "#",
  },
];

// Sample weather info (can be replaced by a real-time API)
const weatherInfo = {
  location: "California, USA",
  temperature: "26°C",
  conditions: "Sunny",
  humidity: "45%",
};

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-green-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">Our Agricultural Services</h1>
          <p className="text-lg mb-12">
            Empowering farmers with AI-driven insights, real-time weather data, and personalized recommendations for better yields and sustainable practices.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8">What We Offer</h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Our services are designed to address the diverse needs of modern agriculture, from precision farming to sustainability and yield optimization. Using the power of AI and real-time data, we provide tailored solutions that help farmers achieve the best possible outcomes.
          </p>
          
          {/* Services Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Chatbot Assistance */}
            <div className="bg-green-100 rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-green-600">AI Chatbot Assistance</h3>
              <p className="text-gray-700 mb-4">
                Our AI chatbot provides instant, personalized advice on crop management, soil health, pest control, and more. Accessible 24/7, the chatbot learns from your farm's data and gives real-time insights to optimize your farming practices.
              </p>
              <ul className="list-disc list-inside text-left text-gray-700">
                <li>Personalized recommendations based on your farm's history</li>
                <li>Instant answers to common agricultural queries</li>
                <li>Adaptable advice that evolves with your needs</li>
              </ul>
            </div>

            {/* Crop Yield Predictions */}
            <div className="bg-green-100 rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-green-600">AI-Driven Crop Yield Predictions</h3>
              <p className="text-gray-700 mb-4">
                Using advanced machine learning algorithms, our system provides accurate predictions of crop yields based on historical data, weather patterns, and other real-time factors, helping you make informed decisions to maximize productivity.
              </p>
              <ul className="list-disc list-inside text-left text-gray-700">
                <li>Accurate yield predictions based on real-time data</li>
                <li>Insights into optimal planting and harvesting times</li>
                <li>Data-driven recommendations for improving crop health</li>
              </ul>
            </div>

            {/* Precision Farming Insights */}
            <div className="bg-green-100 rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-green-600">Precision Farming Insights</h3>
              <p className="text-gray-700 mb-4">
                Leverage precision farming techniques with AI to make smarter decisions about irrigation, fertilization, and pest control. Our system analyzes soil, crop, and weather data to give precise recommendations that improve efficiency and sustainability.
              </p>
              <ul className="list-disc list-inside text-left text-gray-700">
                <li>Real-time monitoring of soil and crop conditions</li>
                <li>Optimized irrigation schedules and water usage</li>
                <li>Targeted pest control and fertilization strategies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Latest Blog Posts</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <p className="text-sm text-gray-500 mb-4">By {post.author} on {post.date}</p>
                <a href={post.link} className="text-green-500 hover:underline">Read more</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weather Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Real-Time Weather Information</h2>
          
          <div className="bg-green-500 text-white rounded-lg p-8 max-w-md mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Current Conditions in {weatherInfo.location}</h3>
            <p className="text-lg">Temperature: {weatherInfo.temperature}</p>
            <p className="text-lg">Conditions: {weatherInfo.conditions}</p>
            <p className="text-lg">Humidity: {weatherInfo.humidity}</p>
          </div>
          <p className="text-gray-600 mt-6">Get real-time weather updates and forecasts to optimize your farming strategies.</p>
        </div>
      </section>
    </div>
  );
};

export default Services;
