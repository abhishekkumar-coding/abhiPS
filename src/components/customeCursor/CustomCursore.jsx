// CustomCursor.js (with dynamic hover effect)
import React, { useState, useEffect } from "react";
import "./Style.css";

const CustomCursor = () => {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  
  const mouseMoveHandler = (e) => {
    setCursor({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    // Update the cursor position on mouse move
    window.addEventListener("mousemove", mouseMoveHandler);

    // Add event listeners to elements for hover effect
    const clickableElements = document.querySelectorAll("a, button");
    clickableElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        document.querySelector(".custom-cursor").classList.add("hovered");
      });
      el.addEventListener("mouseleave", () => {
        document.querySelector(".custom-cursor").classList.remove("hovered");
      });
    });

    // Clean up event listeners on unmount
    return () => {
      clickableElements.forEach((el) => {
        el.removeEventListener("mouseenter", () => {
          document.querySelector(".custom-cursor").classList.add("hovered");
        });
        el.removeEventListener("mouseleave", () => {
          document.querySelector(".custom-cursor").classList.remove("hovered");
        });
      });
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{
        left: `${cursor.x}px`,
        top: `${cursor.y}px`,
      }}
    ></div>
  );
};

export default CustomCursor;
