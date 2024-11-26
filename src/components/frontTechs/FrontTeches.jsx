import React, { useEffect, useState, useRef } from "react";
import RightData from "./RightData";
import htmlImg from "../../assets/html5-brands-solid.svg";
import csslImg from "../../assets/css3-alt-brands-solid.svg";
import jslImg from "../../assets/square-js-brands-solid.svg";
import reactImg from "../../assets/react-brands-solid.svg";
import bootstrapImg from "../../assets/bootstrap-brands-solid.svg";

const rightSideData = [
  {
    img: htmlImg,
    heading: "Building the Structure",
    line: "Expert in creating well-structured and semantic web pages.",
  },
  {
    img: csslImg,
    heading: "Styling with Precision",
    line: "Skilled in designing responsive and visually appealing layouts.",
  },
  {
    img: jslImg,
    heading: "Mastering Interactivity",
    line: "Experienced in creating dynamic, interactive web applications.",
  },
  {
    img: reactImg,
    heading: "Building with React",
    line: "Proficient in developing scalable and efficient frontend applications using React.",
  },
  {
    img: bootstrapImg,
    heading: "Fast-Track UI Development",
    line: "Skilled in building responsive designs quickly with Bootstrap.",
  },
];


function FrontTeches() {
  const scrollingRef = useRef(null);

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
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [borderStyle, setBorderStyle] = useState({
    top: "transparent",
    right: "transparent",
    bottom: "transparent",
    left: "transparent",
  });
  const containerRef = useRef(null);
  

  // Handle the tilt effect on mouse movement
  const handleMouseMove = (e) => {
    const container = containerRef.current;
    if (!container) return;

    // Get container's bounding box
    const { left, top, width, height } = container.getBoundingClientRect();

    // Calculate mouse position relative to the container
    const offsetX = e.clientX - left;
    const offsetY = e.clientY - top;

    // Calculate the tilt amount
    const tiltX = (offsetX / width - 0.5) * 20; // X tilt based on mouse X (left-right)
    const tiltY = (offsetY / height - 0.5) * -20; // Y tilt based on mouse Y (top-bottom)

    // Update the state with new tilt values
    setTilt({ x: tiltX, y: tiltY });

    // Set border color based on proximity to the edges
    setBorderStyle({
      top:
        offsetY < 50
          ? "linear-gradient(to right, #ff7e5f, #feb47b)"
          : "transparent", // Top edge
      right:
        offsetX > width - 50
          ? "linear-gradient(to top, #ff7e5f, #feb47b)"
          : "transparent", // Right edge
      bottom:
        offsetY > height - 50
          ? "linear-gradient(to left, #ff7e5f, #feb47b)"
          : "transparent", // Bottom edge
      left:
        offsetX < 50
          ? "linear-gradient(to top, #ff7e5f, #feb47b)"
          : "transparent", // Left edge
    });
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      // Attach mousemove event listener to the container
      container.addEventListener("mousemove", handleMouseMove);

      // Clean up event listener on component unmount
      return () => {
        container.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="frontechs shadow-xl flex justify-center items-center p-20 mb-32 text-white rounded-3xl w-[90%] border m-auto"
      style={{
        position: "relative",
        transition: "transform 0.1s ease-out", // Smooth transition for the tilt effect
        transform: `perspective(2000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`, // Adjust tilt on X and Y axes
        // borderTop: `5px solid ${borderStyle.top}`, // Apply border with 5px width
        // borderRight: `5px solid ${borderStyle.right}`,
        // borderBottom: `5px solid ${borderStyle.bottom}`,
        // borderLeft: `5px solid ${borderStyle.left}`,
      }}
    >
      <div id="firstdiv" className="flex flex-col justify-center items-center mr-4">
        <h1 className="font-[anzo2] leading-snug text-[3vw]">
          Frontend Technologies
        </h1>
        <p className="font-[anzo3] text-2xl text-gray-400 w-[80%]">
          Bringing creativity to life through the art of frontend development.
        </p>
      </div>
      <div
        className="h-[50vh] flex flex-col justify-center items-center gap-10 overflow-hidden space-y-4"
        style={{
          overflow: "hidden", // Hide scrollbar for a clean look
        }}
        ref={scrollingRef}
      >
        {rightSideData.map((item, index) => (
          <RightData
            key={index}
            img={item.img}
            heading={item.heading}
            line={item.line}
          />
        ))}
      </div>
    </div>
  );
}

export default FrontTeches;
