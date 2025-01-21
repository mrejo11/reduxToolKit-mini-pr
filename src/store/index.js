import { configureStore, createSlice } from "@reduxjs/toolkit";

const songSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      const index = state.indexOf(state.payload);

      state.splice(index, 1);
    },
    resetSong(state, action) {
      return [];
    },
  },
});

const movieSlice = createSlice({
  name: "movie",
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {
      const index = state.indexOf(state.payload);

      state.splice(index, 1);
    },
    reset(state, action) {
      return [];
    },
  },
});

const store = configureStore({
  reducer: {
    //that is combined reducer
    songs: songSlice.reducer,
    movies: movieSlice.reducer,
  },
});
console.log(store.getState());

export { store };
export const { addSong, removeSong,resetSong } = songSlice.actions;
export const { addMovie, removeMovie, reset } = movieSlice.actions;
