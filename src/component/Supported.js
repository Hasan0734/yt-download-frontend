import React from "react";
import windows from "../assets/windows.svg";
import android from "../assets/android.svg";
import linux from "../assets/linux.svg";
import apple from "../assets/apple.svg";
const Supported = () => {
  return (
    <>
      <div className="mt-5">
        <h3 className="text-center text-gray-600 text-[18px]">
          Supported Platforms:
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-16 items-center md:px-28 mt-8">
          <div className="flex justify-center">
            <img className="w-[75%]" src={windows} alt="windows img" />
          </div>
          <div className="flex justify-center">
            <img className="w-[75%]" src={apple} alt="apple img" />
          </div>
          <div className="flex justify-center">
            <img className="w-[75%]" src={android} alt="android img" />
          </div>
          <div className=" flex justify-center">
            <img className="w-[75%]" src={linux} alt="linuxx img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Supported;
