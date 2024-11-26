import React from "react";

function About() {
  return (
    <div className="w-[90%] m-auto p-10 mb-32 text-white rounded-3xl border border-gray-700 bg-gray-900">
      <h1 className="text-4xl font-[anzo2] leading-snug text-center mb-6">
        About Us
      </h1>
      <p className="text-lg font-[anzo2] text-gray-400 text-center mb-12">
        “I am a passionate Full-Stack Web Developer and a BCA student at IIMT
        College, Aligarh, set to graduate in 2025. Proficient in modern
        technologies like React, Node.js, Express, and MongoDB, I excel in
        building responsive websites and scalable applications. My strong
        foundation in JavaScript and web design enables me to create seamless
        user experiences and innovative solutions. Dedicated to continuous
        learning, I stay updated with industry trends to deliver future-ready
        projects that drive success for businesses and users.”
      </p>
      <div className="flex flex-wrap justify-center gap-10">
        {/* Individual feature cards */}
        <div className="feature-card group w-[300px] bg-gray-800 p-6 rounded-xl shadow-lg relative overflow-hidden hover:bg-gradient-to-br hover:from-purple-500 hover:to-indigo-500 transition-all duration-300">
          <h2 className="text-2xl font-[anzo5] mb-4 text-center group-hover:text-white transition-colors duration-300">
            Our Mission
          </h2>
          <p className="text-gray-400 font-[anzo2] text-center group-hover:text-gray-200 transition-colors duration-300">
            To provide innovative and scalable solutions that bridge the gap
            between technology and user needs.
          </p>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </div>
        <div className="feature-card group w-[300px] bg-gray-800 p-6 rounded-xl shadow-lg relative overflow-hidden hover:bg-gradient-to-br hover:from-green-500 hover:to-blue-500 transition-all duration-300">
          <h2 className="text-2xl font-[anzo5] mb-4 text-center group-hover:text-white transition-colors duration-300">
            Our Vision
          </h2>
          <p className="text-gray-400 font-[anzo2] text-center group-hover:text-gray-200 transition-colors duration-300">
            To become a leading technology provider recognized for quality and
            commitment.
          </p>
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </div>
        <div className="feature-card group w-[300px] bg-gray-800 p-6 rounded-xl shadow-lg relative overflow-hidden hover:bg-gradient-to-br hover:from-red-500 hover:to-yellow-500 transition-all duration-300">
          <h2 className="text-2xl font-[anzo5] mb-4 text-center group-hover:text-white transition-colors duration-300">
            Why Choose Us
          </h2>
          <p className="text-gray-400 text-center font-[anzo2] group-hover:text-gray-200 transition-colors duration-300">
            With years of experience and a customer-centric approach, we ensure
            that every project is delivered to perfection.
          </p>
          <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-yellow-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </div>
      </div>
    </div>
  );
}

export default About;
