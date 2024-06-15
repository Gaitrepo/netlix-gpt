import { useDispatch } from "react-redux";
import {  addTrendingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";


const useNowTrendingMovies=()=>{
    const dispatch=useDispatch();

const getNowTrendingMovies =async ()=>{
  const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'
,API_OPTIONS);
  const json = await data.json();
  console.log(json.results);
  dispatch(addTrendingMovies(json.results));
  }

useEffect(()=>{
    getNowTrendingMovies();

},[]);

}

export default useNowTrendingMovies;