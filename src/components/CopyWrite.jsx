import React from "react";

function Copyright() {
  return (
    <div className="w-full font-[anzo2] text-xl bg-gray-900 text-center py-4 mt-0 text-gray-500">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Abhishek Kumar. All rights reserved.
      </p>
    </div>
  );
}

export default Copyright;
