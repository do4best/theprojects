import React from 'react';
import Card from "../Card.jsx";
import useFetch from "./useFetch.jsx";
import {useParams, useSearchParams} from "react-router-dom";

function Search({apiPath}) {
    const [searchParam] = useSearchParams();
    const queryTerm = searchParam.get("q")
    const {data:movies} = useFetch(apiPath,queryTerm)
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

export  {Search};