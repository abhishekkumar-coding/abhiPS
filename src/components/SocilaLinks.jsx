import React from "react";
import { FaXTwitter } from "react-icons/fa6";

function SocialLinks() {
  return (
    <div className="socialLinks fixed left-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-8 p-4">
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/abhishek-codecraft/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-3xl transform hover:scale-125 hover:rotate-12 hover:shadow-2xl hover:shadow-blue-500 transition-all duration-500 ease-in-out"
      >
        <i className="fab fa-linkedin"></i>
      </a>
      
      {/* Discord */}
      <a
        href="https://discord.com/channels/1065816140837822484/1065816140837822487"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-3xl transform hover:scale-125 hover:rotate-12 hover:shadow-2xl hover:shadow-indigo-600 transition-all duration-500 ease-in-out"
      >
        <i className="fab fa-discord"></i>
      </a>
      
      {/* Instagram */}
      <a
        href="https://www.instagram.com/__pratapabhi__/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-3xl transform hover:scale-125 hover:rotate-12 hover:shadow-2xl hover:shadow-pink-500 transition-all duration-500 ease-in-out"
      >
        <i className="fab fa-instagram"></i>
      </a>
      
      {/* Facebook */}
      <a
        href="https://www.facebook.com/profile.php?id=100056473689744"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-3xl transform hover:scale-125 hover:rotate-12 hover:shadow-2xl hover:shadow-blue-600 transition-all duration-500 ease-in-out"
      >
        <i className="fab fa-facebook"></i>
      </a>
      
      {/* GitHub */}
      <a
        href="https://github.com/abhishekkumar-coding"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-3xl transform hover:scale-125 hover:rotate-12 hover:shadow-2xl hover:shadow-gray-600 transition-all duration-500 ease-in-out"
      >
        <i className="fab fa-github"></i>
      </a>
      
      {/* Twitter */}
      <a
        href="https://x.com/abhiwebdev2_0"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-3xl transform hover:scale-125 hover:rotate-12 hover:shadow-2xl hover:shadow-blue-400 transition-all duration-500 ease-in-out"
      >
        <FaXTwitter/>
      </a>
    </div>
  );
}

export default SocialLinks;
