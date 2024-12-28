import { useDispatch } from 'react-redux'
import { movieAPIOptions } from '../utils/constants';
import { addPlayingMovies } from '../utils/movieSlice';
import { useEffect } from 'react';

function useNowPlayingMovies() {
    const dispatch=useDispatch(); 
    const getNowPlayingMovies=async()=>{
        try {
            const url="https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
            const response = await fetch(url,movieAPIOptions);
            const data = await response.json();
            dispatch(addPlayingMovies(data.results))
            console.log('movie data',data.results);
        } catch (error) {
            console.error(error);
        }
    }

        useEffect(()=>{
            getNowPlayingMovies();
        },[]);
    }


            
export default useNowPlayingMovies



