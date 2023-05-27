import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { YOUTUBE_API_URL } from "../utils/constant";

const VideosContainer = () => {
  const [videoDetails, setVideoDetails] = useState([]);

  useEffect(() => {
    videoData();
  }, []);

  async function videoData() {
    const data = await fetch(YOUTUBE_API_URL);
    const json = await data.json();

    setVideoDetails(json?.items);
  }

  return (
    <div className="flex flex-wrap">
      {videoDetails.map((data) => {
        return (
          <Link to={`/watch?v=` + data.id} key={data.id}>
            <VideoCard info={data} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideosContainer;
