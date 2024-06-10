import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";


const useNowPlayingMovies=()=>{
    const dispatch=useDispatch();

const getNowPlayingMovies =async ()=>{
  const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',API_OPTIONS);
  const json = await data.json();
  console.log(json.results);
  dispatch(addPlayingMovies(json.results));
  }

useEffect(()=>{
  getNowPlayingMovies();

},[]);

}

export default useNowPlayingMovies;