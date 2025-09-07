import React from 'react'
import Dropdown from './Dropdown'
// import { Link } from 'react-router-dom'

const HorizontalCards = ({ data }) => {
    return (
            <div className='w-[100%] flex  overflow-y-hidden mb-5 p-5'>
                {data.map((d, i) => (<div
                    key={i}
                    className="min-w-[15%] h-[320px] mr-5 bg-zinc-900 mb-5 rounded overflow-hidden"
                >
                    <img
                        className="w-full h-[55%] object-cover"
                        src={`https://image.tmdb.org/t/p/original/${d.backdrop_path || d.poster_path}`}
                        alt=""
                    />
                    <div className="text-white p-3 h-[35%] flex flex-col justify-between">
                        <h1 className="text-lg font-semibold truncate">
                            {d.title || d.name || d.original_title || d.original_name}
                        </h1>
                        <p className="text-sm">
                            {d.overview ? d.overview.slice(0, 50) : "No description available"}...
                            <span className="text-zinc-300"> more</span>
                        </p>
                    </div>
                </div>

                ))}
            </div>
     
    )
}

export default HorizontalCards