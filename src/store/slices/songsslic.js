import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../action";

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
    },
    extraReducers(builder) {
      builder.addCase(reset, (state, action) => {
        return [];
      });
    },
  });

  export const {addSong,removeSong}=songSlice.actions;
  export const songsReducers=songSlice.reducer;