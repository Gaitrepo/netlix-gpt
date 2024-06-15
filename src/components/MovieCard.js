import React from 'react'
import { IMG_CDN_URl } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  console.log(IMG_CDN_URl+posterPath);
  console.log(posterPath);
  return (
    <div className='w-48 pr-4'>
      
      <img alt="Movie Card" src={IMG_CDN_URl+posterPath}/>  
    </div>
  )
}

export default MovieCard;
