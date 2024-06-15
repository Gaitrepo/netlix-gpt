import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies=useSelector((store)=>store.movies);
  return (
    <div className='bg-black'> 
    <div className='-mt-79 pl-2 relative z-10'>
    <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Trending"} movies={movies.trendingMovies}/>
      <MovieList title={"Polpular"} movies={movies.popularMovies}/>
      <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
      {/* <MovieList title={"Horror Movies"} movies={movies.nowPlayingMovies}/>  */}
    </div>
      
    </div>
  )
}

export default SecondaryContainer
