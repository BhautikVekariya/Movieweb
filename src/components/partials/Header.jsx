import React from "react";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
    // console.log(data);
    return (
        <div
            style={{
                background:  data.poster_path
                    ? `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.poster_path})`
                    : "linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.8))",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}

            className='w-full h-[50vh] flex flex-col justify-end items-start p-[5%]'>
            <h1 className="w-[70%] text-5xl font-bold text-white">{data.title || data.name || data.original_title || data.original_name}</h1>
            <p className="w-[70%] text-white mt-3 mb-3">
                {data.overview ? data.overview.slice(0, 200) : "No description available"}
                <Link className="text-blue-400">...more</Link>
            </p>

            <p className="text-white">
                <i className="text-yellow-500 ri-megaphone-fill"></i>{data.release_date || "No Inforamtion"}
                <i className="ml-5 text-yellow-500 ri-album-fill"></i> {data.media_type}
            </p>
            <Link className="bg-[#6556CD] p-4 rounded mt-5 text-white">Watch Trailer</Link>
        </div>
    );
};

export default Header