import React from 'react';

// Example team members data
const teamMembers = [
  {
    name: "John Doe",
    role: "Founder & CEO",
    image: "/images/employee.jpg", // Replace with actual image paths
    description: "John is passionate about leveraging AI technology to improve agriculture worldwide. With over 10 years of experience in the field, he leads the team with innovation and dedication.",
  },
  {
    name: "Jane Smith",
    role: "Lead AI Engineer",
    image: "/images/employee.jpg",
    description: "Jane specializes in machine learning and AI development. She has created the chatbot's algorithms that provide accurate and reliable farming advice.",
  },
  {
    name: "Mike Johnson",
    role: "Agricultural Expert",
    image: "/images/employee.jpg",
    description: "Mike brings over 15 years of experience in the agricultural industry. His knowledge ensures that the chatbot's recommendations are grounded in real-world farming practices.",
  },
  {
    name: "Lisa Ray",
    role: "Data Scientist",
    image: "/images/employee.jpg",
    description: "Lisa excels at data analytics and ensures the chatbot is always learning and improving. She’s dedicated to using data to help farmers achieve the best outcomes.",
  },
];

const AboutUs = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        {/* Company Mission */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-6 text-green-700">About Us</h1>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We are a team of innovators dedicated to revolutionizing the agricultural sector through AI technology. Our mission is to empower farmers with real-time insights and personalized advice to help them make informed decisions, improve yields, and promote sustainable farming practices.
          </p>
        </div>

        {/* Team Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-green-700">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 ease-in-out">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="h-40 w-full object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                  <p className="text-green-600 font-medium">{member.role}</p>
                  <p className="text-gray-600 mt-4">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Values */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-green-700">Our Values</h2>
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
            We believe in sustainability, innovation, and collaboration. Our commitment to these values drives us to create AI solutions that not only improve farming outcomes but also contribute to a more sustainable future for everyone.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
