import React, { useEffect, useRef, useState } from "react";
import nodeImg from "../../assets/node-js-brands-solid.svg";
import expressImg from "../../assets/expressjs.png";
import nextImg from "../../assets/nextjs-removebg-preview.png";
import jwtImg from "../../assets/jwt.png";
import socketImg from "../../assets/socketio-removebg-preview.png";

function BackendTechs() {
  const scrollingRef = useRef(null);
  const containerRef = useRef(null);
  const [tiltStyle, setTiltStyle] = useState({
    transform: "perspective(2000px) rotateX(0deg) rotateY(0deg)",
  });

  useEffect(() => {
    const scrollDiv = scrollingRef.current;

    if (scrollDiv) {
      // Duplicate content for seamless scrolling
      const clone = scrollDiv.innerHTML;
      scrollDiv.innerHTML += clone;

      let scrollSpeed = 3; // Controls the smooth scrolling speed
      let scrollPosition = 0;

      const scroll = () => {
        scrollPosition += scrollSpeed;
        scrollDiv.scrollTop = scrollPosition;

        // Reset scroll position for smooth looping
        if (scrollPosition >= scrollDiv.scrollHeight / 2) {
          scrollPosition = 0;
        }

        requestAnimationFrame(scroll); // Request the next frame for smooth animation
      };

      scroll();
    }
  }, []);

  const handleMouseMove = (e) => {
    const container = containerRef.current;
    if (!container) return;

    // Get the bounding box of the container
    const { left, top, width, height } = container.getBoundingClientRect();

    // Calculate mouse position relative to the center of the container
    const offsetX = e.clientX - (left + width / 2);
    const offsetY = e.clientY - (top + height / 2);

    // Calculate tilt angles
    const tiltX = -(offsetY / height) * 20; // Up-down tilt
    const tiltY = (offsetX / width) * 20; // Left-right tilt

    // Update tilt style
    setTiltStyle({
      transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
      transition: "transform 0.1s ease-out",
    });
  };

  const handleMouseLeave = () => {
    // Reset tilt when the mouse leaves the container
    setTiltStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
      transition: "transform 0.3s ease-in-out",
    });
  };

  return (
    <div
      ref={containerRef}
      id="backend-techs"
      className="flex justify-center overflow-hidden items-center p-20 mb-32 text-white rounded-3xl w-[90%] border m-auto"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={tiltStyle}
    >
      <div className="first_div flex flex-col w-full justify-center items-center">
        <h1 className="font-[anzo2] leading-snug text-[3vw]">
          Backend Technologies
        </h1>
        <p className="font-[anzo3] text-[1.6vw] text-gray-400 w-[80%] ">
          Crafting secure, scalable, and efficient backend solutions to power
          seamless user experiences.
        </p>
      </div>
      <div
        ref={scrollingRef}
        className="h-[50vh] flex flex-col justify-center items-center gap-10 space-y-4 overflow-hidden"
      >
        {/* Individual backend tech items */}
        <div className="border-b pb-5 rounded-xl border-gray-400">
          <img className="w-[20%]" src={nodeImg} alt="Node.js" />
          <h1 className="text-3xl font-[anzo2]">Efficient Server-Side</h1>
          <h3 className="text-2xl text-gray-500">
            Building scalable and high-performance backend solutions with
            Node.js.
          </h3>
        </div>
        <div className="border-b pb-5 rounded-xl border-gray-400">
          <img className="w-[30%]" src={expressImg} alt="Express.js" />
          <h1 className="text-3xl font-[anzo2]">Streamlined Routing</h1>
          <h3 className="text-2xl text-gray-500">
            Creating RESTful APIs and middleware efficiently with Express.js.
          </h3>
        </div>
        <div className="border-b pb-5 rounded-xl border-gray-400">
          <img
            className="w-[40%] relative top-7 right-12"
            src={nextImg}
            alt="Next.js"
          />
          <h1 className="text-3xl font-[anzo2]">Modern Fullstack</h1>
          <h3 className="text-2xl text-gray-500">
            Delivering seamless server-side rendering and API integration using
            Next.js.
          </h3>
        </div>
        <div className="border-b pb-5 rounded-xl border-gray-400">
          <img className="w-[20%]" src={jwtImg} alt="JWT" />
          <h1 className="text-3xl font-[anzo2]">Securing Applications</h1>
          <h3 className="text-2xl text-gray-500">
            Implementing robust authentication and authorization with JWT.
          </h3>
        </div>
        <div className="border-b pb-5 rounded-xl border-gray-400">
          <img className="w-[20%]" src={socketImg} alt="Socket.IO" />
          <h1 className="text-3xl font-[anzo2]">Real-Time Interactions</h1>
          <h3 className="text-2xl text-gray-500">
            Building real-time communication systems with Socket.IO.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default BackendTechs;
