import React from 'react';
import Card from "../Card.jsx";

import {api_key, now_playing} from "../apihandling/apiconfig.js";
import {fetchMovies} from "../../store/index.js";
import useFetch from "./useFetch.jsx";

function MovieList({apiPath}) {


 const {data:movies} = useFetch(apiPath)
    return (
        <>
            <main>
                <section className="max-w-7xl mx-auto py-7">
                    <div className="flex justify-start flex-wrap gap-4 ">

                        {movies.map((movie)=>(
                            <Card key={movie.id} movie={movie}/>
                        ))}
                    </div>
                </section>
            </main>


        </>
    );
}

export {MovieList};