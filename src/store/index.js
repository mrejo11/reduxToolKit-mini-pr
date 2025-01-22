import { configureStore } from "@reduxjs/toolkit";
import { songsReducers,addSong,removeSong } from "./slices/songsslic";
import { moviesReducer,addMovie,removeMovie } from "./slices/moviesSlice";



const store = configureStore({
  reducer: {
    //that is combined reducer
    songs: songsReducers,
    movies: moviesReducer,
  },
});
console.log(store.getState());

export { store };

export { addSong,removeSong,addMovie, removeMovie }
