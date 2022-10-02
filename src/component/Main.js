import React from 'react'

export default function Main() {
  return (
    <>
      <div className="px-8 md:px-20 py-16 md:py-20 ">
        <div className="flex justify-center">
          <div>
            <div className="flex justify-center">
              <svg
                className="w-[100px] h-[100px]"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M20 0C8.96595 0 0 8.96594 0 20C0 31.034 8.96595 40 20 40C31.034 40 40 31.034 40 20C40 8.96594 31.034 0 20 0ZM20 1.95122C29.9795 1.95122 38.0488 10.0205 38.0488 20C38.0488 29.9795 29.9795 38.0488 20 38.0488C10.0205 38.0488 1.95122 29.9795 1.95122 20C1.95122 10.0205 10.0205 1.95122 20 1.95122ZM14.8171 10.7317C13.6894 10.7571 12.7118 11.6628 12.6829 12.9573V27.0274C12.7215 28.7534 14.4448 29.8003 15.9604 28.9786L28.1555 21.9207C28.8192 21.5352 29.2683 20.8277 29.2683 20C29.2683 19.1723 28.8193 18.4647 28.1555 18.0793L15.9604 11.0213C15.5815 10.8159 15.193 10.7232 14.8171 10.7317Z"
                  fill="red"
                />
              </svg>
            </div>

            <h2 className="text-[36px]  mt-8 text-center leading-9 uppercase tracking-wider font-semibold text-gray-700">
              Youtube Video downloader
            </h2>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex justify-center items-center mt-10 flex-col"
            >
              <input
                defaultValue={searchURL}
                {...register("searchURL", {
                  required: true,
                  pattern: /[a-zA-Z]+:\/\/www.you/i,
                })}
                className="px-3 py-2 border border-blue-500 w-[300px] rounded-md focus:outline-green-700 focus:outline-1"
                type="text"
                placeholder="Paste your video link"
              />
              {errors?.searchURL?.type === "required" && (
                <p className="text-[12px] text-red-500 font-normal mt-1">
                  This field required!
                </p>
              )}
              {errors?.searchURL?.type === "pattern" && (
                <p className="text-[12px] text-red-500 font-normal mt-1">
                  Please paste valid link
                </p>
              )}
              <button
                disabled={loading}
                type="submit"
                className="bg-[#ff0000] px-4 py-[6px] leading-8 mt-5 flex gap-1 items-center disabled:bg-red-400
             rounded-sm text-white text-[20px] font-semibold"
              >
                {loading ? (
                  <svg
                    aria-hidden="true"
                    className="mr-2 w-6 h-6 text-gray-200 animate-spin dark:text-gray-300 fill-white"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                ) : (
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
                  </svg>
                )}
                Download
              </button>
            </form>

            {data !== null ? (
              <>
                <div className="flex justify-center mt-10">
                  <iframe
                    className="rounded w-[300px] sm:w-[500px] md:w-[570px]  h-[200px] sm:h-[300px] md:h-[320px]"
                    // width={570}
                    // height={320}
                    src={data?.data?.url}
                    title="video"
                  />
                </div>

                {/* download button and link */}
                <div className="w-full mt-20 grid grid-cols-2 lg:grid-cols-5 gap-4">
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
              </>
            ) : (
              <></>
            )}

            <h2 className="text-[16px]  mt-8 text-center leading-5 tracking-wider font-semibold text-gray-700">
              Thanks for visiting our website
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
