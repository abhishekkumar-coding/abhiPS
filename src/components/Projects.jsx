import React from "react";
import zerodhaClone from "../assets/Zerodha_clone.png";
import foodApp from "../assets/food_app.png";
import userManegement from "../assets/user-manegement.png";

function Projects() {
  // Static array of project objects
  const projects = [
    {
      id: 1,
      title: "Food Delivery Website",
      description: "An app to order food and track delivery status.",
      link: "https://myportfolio.com",
      imageUrl: foodApp,
    },
    {
      id: 2,
      title: "Zerodha Clone",
      description:
        "A full-stack financial platform replicating Zerodha, allowing users to trade stocks, manage portfolios, and track market performance.",
      link: "https://fooddelivery.com",
      imageUrl: zerodhaClone,
    },
    {
      id: 3,
      title: "User Management App",
      description:
        "A full-stack user management app to handle user registration, authentication, and profile management with role-based access control.",
      link: "https://weatherapp.com",
      imageUrl: userManegement,
    },
  ];

  return (
    <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] m-auto p-10 mb-32 text-white rounded-3xl border border-gray-700 bg-gray-900">
      <h1 className="text-4xl font-bold text-center mb-6">My Projects</h1>
      <p className="text-lg text-gray-400 text-center mb-8">
        Check out some of the projects I have worked on.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative rounded-xl overflow-hidden shadow-lg bg-gray-800 border border-gray-700"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2 font-[anzo3]">{project.title}</h2>
              <p className="text-gray-400 mb-4 font-[anzo3]">{project.description}</p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
