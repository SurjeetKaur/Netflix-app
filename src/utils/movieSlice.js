import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:[],
        trailerVideos:[]
        },
        reducers:{
            addPlayingMovies:(state,action)=>{
                state.nowPlayingMovies=action.payload;
                },
            addTrailerVideo:(state,action)=>{
                state.trailerVideo=action.payload;
            }
              
        }
    })
     export const {addPlayingMovies,addTrailerVideo}=movieSlice.actions;
     export default movieSlice.reducer;
                            