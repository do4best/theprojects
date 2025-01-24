import React, {useEffect, useState} from 'react';
import {api_key, now_playing} from "../apihandling/apiconfig.js";

function UseFetch(apiPath,queryTerm="") {
    const [data,setData] = useState([])
    const url =`${now_playing}${apiPath}${api_key}`
    useEffect(() => {
            async function fetchMovies(){
                const response = await fetch(url);
                const json = await response.json();
                setData(json.results.slice(1,6))
            }
            fetchMovies()},

        [url]);
    return {data};
}

export default UseFetch;