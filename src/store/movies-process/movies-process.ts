import { createSlice } from "@reduxjs/toolkit";
import { MoviesProcess } from "../../types/state";
import { NameSpace } from "../../const";

const initialState: MoviesProcess = {
  genre: 'All genres',
  displayedMoviesCount: 8,
  movies: [],
};

export const moviesProcess = createSlice({
  name: NameSpace.Movie,
  initialState,
  reducers: {
    changeGenreAction: (state, action) => {
      state.genre = action.payload;
      if (action.payload === 'All genres') {
        state.movies = [];
      } else {
        state.movies = state.movies.filter(movie => movie.genre === action.payload);
      }
    },
    setMovies: (state, action) => {
      state.movies = action.payload;
      state.displayedMoviesCount = 8;
    },
    setIncreaseMoviesCount: (state, action) => {
      state.displayedMoviesCount += action.payload
    },
    resetDisplayedMoviesCount: (state) => {
      state.displayedMoviesCount = 8;
    }
  }
});

export const {changeGenreAction, resetDisplayedMoviesCount, setMovies, setIncreaseMoviesCount } = moviesProcess.actions;