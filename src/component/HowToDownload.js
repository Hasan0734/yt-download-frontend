import React from 'react';
import howto1 from "../assets/howto1.png";
import howto2 from "../assets/howto2.png";
import howto3 from "../assets/howto3.png";
import howto4 from "../assets/howto4.png";
const HowToDownload = () => {
    return (
      <>
        <div className="mt-10">
          <h2 className="text-center text-[24px] md:text-[36px] font-normal">
            How to download YouTube videos online
          </h2>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-y-6 px-3 md:px-6">
            <div className="flex flex-col items-center justify-center">
              <img src={howto2} alt="" />
              <h4 className="mt-3 text-[14px]">
                Find and paste the video URL in the input field.
              </h4>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={howto3} alt="" />
              <h4 className="mt-3 text-[14px]">
                Find and paste the video URL in the input field.
              </h4>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={howto4} alt="" />
              <h4 className="mt-3 text-[14px]">
                Find and paste the video URL in the input field.
              </h4>
            </div>
          </div>
        </div>
      </>
    );
}

export default HowToDownload;
