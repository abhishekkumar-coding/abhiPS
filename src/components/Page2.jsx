import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin globally
gsap.registerPlugin(ScrollTrigger);

function Page2() {
  useEffect(() => {
    // GSAP animation
    gsap.fromTo(
      ".rotateText",
      {
        transform: "rotateX(-50deg)",
        opacity: 0,
      },
      {
        transform: "rotateX(0deg)",
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".rotateText",
          start: "top 50%", // Adjusted to fit your layout
          end: "top 20%",
          scrub: 2,
        },
      }
    );
  }, []);

  return (
    <div className="text-center rotateTextContainer text-white">
      <h1 className="rotateText w-fit m-auto text-[30vw] text-white font-[anzo4]">
        EXPERTISES
      </h1>
    </div>
  );
}

export default Page2;
