import React from 'react';

function RightData({ img, heading, line }) {
  return (
    <div className="flex flex-col gap-3 md:gap-4 border-b rounded-lg border-gray-400 pb-4 items-center md:items-start text-center md:text-left w-[80%]">
      {/* Image */}
      <img
        className="w-[20%] md:w-[10%] max-w-[50px] md:max-w-none"
        src={img}
        alt={heading}
      />
      {/* Heading */}
      <h1 className="text-xl md:text-3xl font-[anzo2]">{heading}</h1>
      {/* Subheading */}
      <h3 className="text-md md:text-2xl text-gray-500">{line}</h3>
    </div>
  );
}

export default RightData;
