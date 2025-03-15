import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video absolute pt-[20%]  text-white px-12  bg-gradient-to-r  from-black">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="text-md mt-2 w-1/4">{overview}</p>

      <div className="mt-4">
        <button className="bg-white  text-black p-3 hover:bg-opacity-50 text-lg px-8 rounded-md bg-opacity-70">
          ▶️ Play
        </button>
        <button className="mx-2 bg-gray-800 text-white p-3 text-lg px-8 rounded-md bg-opacity-70">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
