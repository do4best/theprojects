import React from 'react';
import {Route, Routes} from "react-router-dom";
import {MovieList,MovieDetails,Pagenotfound,Search} from "./pages/index.js";

function AllRoutes(props) {
    return (
        <>
        <Routes>
            <Route path={"/"} element={<MovieList/>}/>
            <Route path={"movie/:id"} element={<MovieDetails/>}/>
            <Route path={"movies/popular"} element={<MovieList/>}/>
            <Route path={"movies/top"} element={<MovieList/>}/>
            <Route path={"movies/upcoming"} element={<Search/>}/>
            <Route path={"*"} element={<Pagenotfound/>}/>


        </Routes>

        </>
    );
}

export default AllRoutes;