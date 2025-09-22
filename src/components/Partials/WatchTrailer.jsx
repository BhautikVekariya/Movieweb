import React from "react";
import { Link } from "react-router";

function WatchTrailer({ pathname }) {
  return (
    <Link
      to={`${pathname}/trailer`}
      className="px-5 py-5 mb-2 text-sm sm:text-base rounded-md bg-[#6556CD] mt-5 hover:bg-[#4b3abc] active:bg-[#4f3bd0]"
    >
       <i class="text-3xl mr-3 ri-play-fill"></i>
      WatchTrailer
    </Link>
  );
}

export default WatchTrailer;
