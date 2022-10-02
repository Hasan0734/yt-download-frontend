import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function LinkInput({
  title,
  setLoading,
  setData,
  loading,
}) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    console.log(formData)
    setLoading(true);
    const data = await axios.get(
      `https://yt-download-server-kcr3.vercel.app/download?url=${formData?.searchURL}`
    );
    setData(data);
    setLoading(false);
  };


  return (
    <>
      <div className="flex justify-center py-7">
        <div className="text-center">
          <h3 className="text-white text-[24px] md:text-[44px] leading-9 p-4 font-normal">
            {title}
          </h3>
          <div className="flex justify-center w-full">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="md:bg-white flex justify-between flex-col md:flex-row items-center 
            mt-5 py-[5px] px-[5px] rounded-md w-full "
            >
              <input
                {...register("searchURL", {
                  required: true,
                })}
                type="text"
                placeholder="Paste your video link here"
                className="bg-white py-2 px-2 outline-none w-full rounded-md text-[16px]"
              />
              <div className="mt-3 md:mt-0">
                <button
                  disabled={loading}
                  className="bg-[#dc3545] py-[10px] flex justify-between items-center gap-2
                   px-3 rounded-md text-white  text-[18px] font-semibold"
                 
                >
                  Download{" "}
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
                      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
