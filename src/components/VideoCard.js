import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;

  return (
    <div className="w-72 rounded-3xl bg-gray-900 p-4  m-2 shadow-xl">
      <img
        className="rounded-3xl"
        src={snippet?.thumbnails?.medium?.url}
        alt="youtube"
      />
      <h3 className="font-bold text-white">{snippet?.title}</h3>
      <h4 className="font-semibold text-white">{snippet?.channelTitle}</h4>
      <span className=" text-white">{statistics?.viewCount}</span>
    </div>
  );
};

export default VideoCard;
