import React from "react";

const HowToSave2 = () => {
  return (
    <div className="bg-white">
      <div className="py-10 max-w-[1140px] mx-auto container px-4">
        <h2 className="text-[24px] md:text-[32px] leading-7 text-start md:text-center font-normal">
          How to save movies without a YouTube video downloader add-on?
        </h2>
        <div className="mt-4">
          <p className="text-[14px] font-normal text-left">
            Did you know that it’s possible to download YouTube videos online
            without an add-on? Just add “ss” to the video URL and download the
            video right away!
          </p>
          <p className="text-[14px] font-normal text-left mt-5">
            Here is an example:
          </p>
          <ul className="list-disc px-4 md:px-10 mt-3">
            <li className="text-[14px] font-normal text-left my-1">
              Original URL: https://youtube.com/watch?v=YOcmSsBfafg
            </li>
            <li className="text-[14px] font-normal text-left my-1">
              URL with ss: https://ssyoutube.com/watch?v=YOcmSsBfafg
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HowToSave2;
