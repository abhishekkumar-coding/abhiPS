import React from "react";

function Header() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="header fixed w-[90%] flex justify-between m-auto items-center px-6 py-4 z-10 bg-transparent">
      {/* Logo or Title */}
      <h1 className="text-white font-bold text-2xl md:text-3xl">
        AbhiPS
      </h1>

      {/* Hire Me Button */}
      <button
        onClick={scrollToContact}
        className="bg-black text-white font-semibold border-2 border-gray-600 rounded-xl px-4 py-2 hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-500 hover:text-gray-100 transition-all duration-300"
        aria-label="Hire me button"
      >
        Hire me
      </button>
    </div>
  );
}

export default Header;
