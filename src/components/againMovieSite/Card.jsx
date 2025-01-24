import React from 'react';

import {api_key, now_playing,small_base_url} from "./apihandling/apiconfig.js";
function Card({movie}) {
    const{id,original_title,overview,poster_path} = movie;
const Image = `${small_base_url}${poster_path}`;
    return (
        <>
        <div className="card bg-base-100 w-96 shadow-xl ">
            <figure>
                <img
                    src={Image}
                    alt="Movie" className={"rounded"} />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-blue-700 font-bold">{original_title}</h2>
                <p>{overview}</p>
                <div className="card-actions justify-end">

                </div>
            </div>
        </div>
        </>
    );
}

export default Card;