import React, {useEffect, useState} from 'react';
import {api_key, now_playing} from "../apihandling/apiconfig.js";

function Thefechmovieapi({apiPath},queryTerm="") {
    const [data,setData] = useState([])
const url =`${now_playing}${api_key}`;
    useEffect(() => {
        async function fetchMovies(){
            const response = await fetch();
            const data = await response.json();
            setMovies(data.results)
        }
    }, []);
    return (
        <></>
    );
}

export default Thefechmovieapi;