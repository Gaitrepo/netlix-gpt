import { createSlice } from "@reduxjs/toolkit";


const moviesSlice=createSlice(
    {
        name:"movies",
        initialState:{
            nowPlayingMovies:null,
            trendingMovies:null,
            popularMovies:null,
            upcomingMovies:null,
            trailerVideo:null,
        },
        reducers:{
            addPlayingMovies:(state,action)=>{
                state.nowPlayingMovies=action.payload;
            },
            addTrendingMovies:(state,action)=>{
                state.trendingMovies=action.payload;
            },
            addPopularMovies:(state,action)=>{
                state.popularMovies=action.payload;
            },
            addUpcomingMovies:(state,action)=>{
                state.upcomingMovies=action.payload;
            },
            addTrailerVideo:(state,action)=>{
                state.trailerVideo=action.payload;
            },
            
        },
    },
);

export const {addPlayingMovies,addTrailerVideo,addTrendingMovies,addPopularMovies,addUpcomingMovies}=moviesSlice.actions;

export default moviesSlice.reducer;