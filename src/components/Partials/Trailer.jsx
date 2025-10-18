import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import NotFound from "../NotFound";

function Trailer() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const category = pathname.includes("movie") ? "MovieInfo" : "TvInfo";
  const { videos } = useSelector((state) => state[category].Info);

  return (
    <div className="w-full h-screen bg-[rgba(0,0,0,0.9)] fixed left-0 top-0 flex justify-center items-center z-50">
      {videos ? (
        <div className="relative">
          {/* React Player */}
          <ReactPlayer
            controls
            height={600}
            width={1200}
            url={`https://www.youtube.com/watch?v=${videos.key}`}
          />

          {/* Close Button positioned on top-right of the video */}
          <button
            onClick={() => navigate(-1)}
            className="absolute -top-3 -right-3 flex items-center justify-center w-8 h-8 rounded-full bg-red-600 hover:bg-red-700 text-white cursor-pointer transition duration-300 shadow-lg"
          >
            <i className="ri-close-line text-2xl"></i>
          </button>
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
}

export default Trailer;
