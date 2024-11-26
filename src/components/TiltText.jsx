import React from "react";

function TiltText({ tiltRef }) {
  return (
    <div className="" ref={tiltRef} id="tiltDiv">
          <h1 className="text-white text-[5vw] leading-[5vw] uppercase font-[anzo5]">
          Building <span className="text-black uppercase"> dynamic web</span>
          </h1>
          <h1 className="text-white uppercase text-[10.5vw] leading-[7vw] font-[anzo1]">
          solutions 
          </h1>
          <h1 className="text-white text-[4vw] leading-[4vw] uppercase font-[anzo5]">
           with innovative technologies.
          </h1>
        </div>
  );
}

export default TiltText;
