import React, { useRef, useState } from "react";
import "./Style.css";
import gsap from "gsap";
import Page1Bottom from "../components/Page1Bottom";
import { useGSAP } from "@gsap/react";
import TiltText from "../components/TiltText";
function Page1() {
  const tiltRef = useRef(null);
  const [xVal, setXVal] = useState(0);
  const [yVal, setYVal] = useState(0);
  const mouseMoving = (e) => {
    // console.log(tiltRef.current.getBoundingClientRect());
    setXVal(
      (e.clientX -
        tiltRef.current.getBoundingClientRect().x -
        tiltRef.current.getBoundingClientRect().width / 2) /
        20
    );
    setYVal(
      -(
        e.clientY -
        tiltRef.current.getBoundingClientRect().y -
        tiltRef.current.getBoundingClientRect().height / 2
      ) / 20
    );
  };

  useGSAP(
    function () {
      gsap.to(tiltRef.current, {
        transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
        duration: 3,
        ease: `elastic.out(1, 0.5)`,
      });
    },
    [xVal, yVal]
  );

  return (
    <div
      onMouseMove={(e) => mouseMoving(e)}
      className="page1 mr-0 h-screen relative w-[100%] p-7"
    >
      <div
        id="page1-in"
        className="shadow-xl mb-60 border-gray-500 flex flex-col justify-center items-center p-20 relative shadow-gray-700 h-full w-full rounded-3xl img-container"
      >
        <TiltText tiltRef={tiltRef} />
        <Page1Bottom />
      </div>
    </div>
  );
}

export default Page1;
