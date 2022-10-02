import React from "react";
const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="py-10 max-w-[1140px] mx-auto container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-4">
          <div>
            <h3 className="text-white text-[17px] leading-8">
              Youtube Downloader
            </h3>
          </div>
          <div>
            <ul>
              <li>
                <a
                  className="text-white text-[17px] font-normal leading-8"
                  href="/"
                >
                  TikTok Video Downloader
                </a>
              </li>
              <li>
                <a
                  className="text-[#20c997] text-[17px] font-normal leading-8"
                  href="/"
                >
                  Instagram Video Downloader
                </a>
              </li>
              <li>
                <a
                  className="text-[#20c997] text-[17px] font-normal leading-8"
                  href="/"
                >
                  Facebook Video Downloader
                </a>
              </li>
              <li>
                <a
                  className="text-[#20c997] text-[17px] font-normal leading-8"
                  href="/"
                >
                  Twitter Video Downloader
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <a
                  className="text-white text-[17px] font-normal leading-8"
                  href="/"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  className="text-[#20c997] text-[17px] font-normal leading-8"
                  href="/"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  className="text-[#20c997] text-[17px] font-normal leading-8"
                  href="/"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  className="text-[#20c997] text-[17px] font-normal leading-8"
                  href="/"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <a
                  className="text-white text-[17px] font-normal leading-8"
                  href="/"
                >
                  Partners
                </a>
              </li>
              <li>
                <a
                  className="text-[#20c997] text-[17px] font-normal leading-8"
                  href="/"
                >
                  SaveFrom
                </a>
              </li>
              <li>
                <a
                  className="text-[#20c997] text-[17px] font-normal leading-8"
                  href="/"
                >
                  SaveFrom 2.0
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-white text-center py-3 px-4 text-[10px] ">© 2022 YouTube Downloader, ❤️ made with by SSYoutube.</p>
    </footer>
  );
};

export default Footer;
