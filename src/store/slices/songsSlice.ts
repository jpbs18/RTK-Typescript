import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { moviesSlice } from "./moviesSlice";

interface Song {
  id: string;
  name: string;
}

interface SongsState {
  songs: Song[];
}

const initialState: SongsState = {
  songs: [],
};

export const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    addSong(state, action: PayloadAction<string>) {
      state.songs = [
        ...state.songs,
        {
          id: nanoid(),
          name: action.payload,
        },
      ];
    },
    removeSong(state, action: PayloadAction<Song>) {
      state.songs = state.songs.filter((song) => song.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    //Listening for "movies/reset" action type
    builder.addCase(moviesSlice.actions.reset, (state, action) => {
      state.songs = [];
    });
  },
});

export const selectSongs = (state: RootState) => state.songs;
export const { addSong, removeSong } = songsSlice.actions;
export const songsReducer = songsSlice.reducer;
export type { Song };
