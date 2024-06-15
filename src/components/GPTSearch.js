import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { USER_AVATAR } from '../utils/constants'

const GPTSearch = () => {
  return (
    <div>
        <div className="absolute -z-10">
        <img
          src={USER_AVATAR}
          alt="logo"
        />
      </div>
      <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>
  )
}

export default GPTSearch
