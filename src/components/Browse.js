import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useNowTrendingMovies from '../hooks/useNowTrendingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GPTSearch from "./GPTSearch";
import { useSelector } from 'react-redux';

const Browse = () => {

  const searchGpt=useSelector((store)=>store.gpt.showGptSearch);

useNowPlayingMovies();
useNowTrendingMovies();
usePopularMovies();
useUpcomingMovies();


  return (
    <div>
      <Header/>
      {searchGpt? (<GPTSearch/>):(<>
        <MainContainer/>
        <SecondaryContainer/>

      </>)}
     
    
     
     {/* {
     MainContainer
      --VideoBackground
      -VideoTitle

      SecondaryContainer
       -MovieList*n
       -cards*n


     
     
     } */}
    </div>
  )
}

export default Browse;
