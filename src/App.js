import React, { useState } from "react";
import Navbar from "./component/Navbar";
import LinkInput from "./component/LinkInput";

import Supported from "./component/Supported";
import HowToDownload from "./component/HowToDownload";
import HowToSave from "./component/HowToSave";
import HowToSave2 from "./component/HowToSave2";
import HowToSave3 from "./component/HowToSave3";
import DownloadWebsite from "./component/DownloadWebsite";
import Footer from "./component/Footer";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);

  console.log(data);
  return (
    <div>
      <header className="bg-[#08003a]">
        <Navbar />
        <div className="max-w-[1140px] mx-auto py-16 container px-4">
          <LinkInput
            title={"YouTube Video Downloader"}
            setLoading={setLoading}
            setData={setData}
            loading={loading}
          />
          {loading && (
            <div
              className="
        text-white text-center"
            >
              Loading
            </div>
          )}

          <div>
            {data !== null ? (
              <>
                <h2 className="text-center text-white text-[14px]">
                  Download video as:
                </h2>
                <div className="flex gap-10 justify-center mt-10 flex-col md:flex-row">
                  <div className="flex justify-center w-full">
                    <iframe
                      className="rounded w-[300px] w-full md:w-[570px]  h-[200px] sm:h-[300px] md:h-[320px]"
                      // width={570}
                      // height={320}
                      src={data?.data?.url}
                      title="video"
                    />
                  </div>

                  {/* download button and link */}
                  <div className="w-full grid grid-cols-2 lg:grid-cols-2 gap-4">
                    {data?.data?.info?.map((value, i) => (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        href={value.url}
                        key={i}
                        className="bg-blue-500 px-3 py-2 text-[16px] font-semibold rounded-lg text-white flex items-center gap-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                          />
                        </svg>{" "}
                        {value?.mimeType?.split(";")[0] + " "}
                        {/* {/value?.mimeType} */}
                        {value?.qualityLabel}
                      </a>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </header>
      <main>
        <div className="max-w-[1140px] mx-auto container px-4 py-10">
          <div>
            <p className="text-start md:text-center text-[14px] font-normal text-gray-600">
              Want to download YouTube videos fast and safely? Install
              SaveFrom.net helper for FREE and get any videos you like!
            </p>
            <p className="text-[14px] font-normal text-gray-600 mt-6">
              Being the third most popular website in the world, YouTube offers
              an excellent viewer experience to its users. What it can’t provide
              is a YouTube video download. That is why ssyoutube is here to help
              you out!
            </p>
          </div>

          <Supported />
          <div className="mt-4">
            <p className="text-[14px] font-normal text-gray-600 mt-6">
              With our YouTube video downloader, you can select videos and
              download them free of charge! You can get high-quality videos in
              MP4, MP3, SQ, HD, Full HD quality, and other formats. Our software
              works both on PC and mobile, allowing you to use it anywhere you
              are!
            </p>
            <p className="text-[14px] font-normal text-gray-600 mt-6">
              YouTube video download has never been so simple! Don’t waste your
              time. Just install our software on your devices and enjoy free
              content!
            </p>
            <p className="text-[14px] font-normal text-gray-600 mt-6 text-center">
              Want to know more? You can find our download instructions below.
            </p>
          </div>

          <HowToDownload />
        </div>
        <HowToSave />
        <HowToSave2 />
        <HowToSave3 />
        <DownloadWebsite />
      </main>
      <Footer />
    </div>
  );
}

export default App;
