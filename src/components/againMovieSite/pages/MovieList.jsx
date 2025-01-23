import React, {useEffect, useState} from 'react';
import Card from "../Card.jsx";

import {api_key, now_playing} from "../apihandling/apiconfig.js";
import {fetchMovies} from "../../store/index.js";

function MovieList(props) {
    const [movies,setMovies] = useState([])
    useEffect(() => {
        async function fetchMovies(){
            const response = await fetch(`${now_playing}movie/upcoming?${api_key}`);
            const data = await response.json();
            setMovies(data.results)
        }
            fetchMovies()},

            []);
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