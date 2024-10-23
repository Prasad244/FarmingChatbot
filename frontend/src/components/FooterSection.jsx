import React from "react";
import { SocialIcon } from "react-social-icons";

const FooterSection = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-4">
          <h3 className="text-lg font-bold">Stay Connected</h3>
          <div className="flex justify-center space-x-4 mt-2">
            <SocialIcon url="www.facebook.com" />
            <SocialIcon url="www.instagram.com" />
            <SocialIcon url="www.x.com" />
          </div>
        </div>

        <div className="mb-4">
          <p>
            © {new Date().getFullYear()} Agricultural AI Chatbot. All rights
            reserved.
          </p>
        </div>

        <div>
          <p>
            <a href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </a>{" "}
            |
            <a href="/terms-of-service" className="hover:underline">
              {" "}
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
