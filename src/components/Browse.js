import React from 'react'
import  Header from './Header'
import MainMovieContainer from './MainMovieContainer'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'

function Browse() {
  useNowPlayingMovies();
  return (
    <div>
        <Header/>
        <MainMovieContainer/>
    </div>
    
  )
}

export default Browse