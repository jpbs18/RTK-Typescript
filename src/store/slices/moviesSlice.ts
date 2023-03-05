import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

interface Movie {
  id: string;
  name: string;
}

interface MovieState {
  movies: Movie[];
}

const initialState: MovieState = {
  movies: [],
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie: (state, action: PayloadAction<string>) => {
      state.movies.push({
        id: nanoid(),
        name: action.payload,
      })
    },
    removeMovie: (state, action: PayloadAction<Movie>) => {
      state.movies = state.movies.filter(
        (movie) => movie.id !== action.payload.id
      );
    },
    reset: (state, action) => {
      state.movies = [];
    },
  },
});

export type { Movie };
export const selectMovies = (state: RootState) => state.movies;
export const { addMovie, removeMovie, reset } = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;
