import React from 'react'
import { useSelector } from 'react-redux'
import TrailerTitle from './TrailerTitle';
import TrailerBackground from './TrailerBackground';

function MainMovieContainer() {
    const movies=useSelector((store)=>store.movies?.nowPlayingMovies);
    
    //console.log("movies",movies);
    if(!movies || movies.length===0){
        return("no movies exist");
    }
     const {id,title,overview}=movies[0]; //extracted id title and overview from first movie i.e [0]
  return (
    <div>
      <TrailerTitle title={title} overview={overview}/> 
      <TrailerBackground movieId={id}/>
    </div>
  )
}

export default MainMovieContainer