import React from 'react';
import {Route, Routes} from "react-router-dom";
import {MovieList,MovieDetails,Pagenotfound,Search} from "./pages/index.js";

function AllRoutes(props) {
    return (
        <>
        <Routes>
            <Route path={"/"} element={<MovieList apiPath={"movie/now_playing?"}/>}/>
            <Route path={"movie/:id"} element={<MovieDetails/>}/>
            <Route path={"movies/popular"} element={<MovieList apiPath={"movie/popular?"}/>}/>
            <Route path={"movies/top"} element={<MovieList apiPath={"movie/top_rated?"}/>}/>
            <Route path={"movies/upcoming"} element={<Search/>}/>
            <Route path={"*"} element={<Pagenotfound/>}/>


        </Routes>

        </>
    );
}

export default AllRoutes;