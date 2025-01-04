import {configureStore,createAsyncThunk,createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {MOVIE_BASE_URL, options} from "./utils/constant.js";

const initialState = {
    movies:[],
    generesLoads:false,
    genres:[]
};
export const getGeneres = createAsyncThunk("netflex/generes",async ()=>{
    const {data:{genres}} = await axios.get(`${MOVIE_BASE_URL}genre/movie/list?language=en`,options);



   return genres;
})

const arrayofMoviesData = (array,moviesArray,genres)=>{
    array.forEach((movie)=>{
        const moviesGenres = []
        movie.genre_id.forEach((genere)=>{
            const name = genere.find(({id})=> id === genere)
            if(name)
                moviesGenres.push(name.name)
        })
        if(movie.backdrop_path)
            moviesArray.push({
                id: movie.id,
                name: movie?.original_name?movie.original_name:movie.original_title,
                image:movie.backdrop_path,
                genres: genres.slice(0,3)
            })
    })
}
const getMovieData = async (api,genres,paging=false)=>{
    const movieArray = [];
    for(let i=1;movieArray.length < 80 && i <10; i++){
        const {data:{results},}=await axios.get(`${api}${paging? `&page=${i}` : " " }`)
        arrayofMoviesData(results ,movieArray,genres)
    }
    return movieArray
}
export const fetchMovies = createAsyncThunk("netflex/trending", async ({type},myTank)=>{
    const {netflex:{genres},} = myTank.getState();
    const data = getMovieData(`${MOVIE_BASE_URL}trending/all/day/?language=en-US${type}`,genres,true,options)
   console.log(data)
})
const netFlexSlice = createSlice({
    name:"NetFlex",
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(getGeneres.fulfilled, (state, action)=>{
            state.genres = action.payload;
            state.generesLoads = true;
        })
    }
});

export const store = configureStore({
    reducer:{
        netflex : netFlexSlice.reducer
    }
})