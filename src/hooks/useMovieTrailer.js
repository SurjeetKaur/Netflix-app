import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { movieAPIOptions } from "../utils/constants";

function useMovieTrailer(movieId){
    const dispatch =useDispatch();
    const getMovieIds=async()=>{
        const url='https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US';
        const data=await fetch(url,movieAPIOptions);
        const trailers=await data.json();
        dispatch(addTrailerVideo(trailers?.results[0]));
        }       
        useEffect(()=>{
            getMovieIds();
        },[])
    }

export default useMovieTrailer;