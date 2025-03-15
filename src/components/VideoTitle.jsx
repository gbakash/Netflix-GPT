import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="text-white w-1/2 pl-8">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-lg mt-2">{overview}</p>
      <div className="mt-4">
        <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700">
          Play
        </button>
        <button className="bg-gray-800 text-white px-6 py-2 rounded-md ml-2 hover:bg-gray-700">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
