import { createReducer } from "@reduxjs/toolkit";
import { changeGenreAction, setMovies } from "./action";
import { MovieType } from "../Types/film-type";
import {movies} from "../Mocks/films";

type GenresType = {
  genre: string,
  // allMovies: MovieType,
  movies: MovieType[],
};

const initialState: GenresType = {
  genre: 'All genres',
  // allMovies: movies,
  movies,
};

const reducer = createReducer(initialState, (builder) => {
  builder
  .addCase(changeGenreAction, (state, action) => {
    state.genre = action.payload;
    if (action.payload === 'All genres') {
      state.movies = movies;
    } else {
      state.movies = state.movies.filter(movie => movie.genre === action.payload);
    }
  })
  .addCase(setMovies, (state, action) => {
    state.movies = action.payload;
  });
})

export {reducer};