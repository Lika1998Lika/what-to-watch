import { createReducer } from "@reduxjs/toolkit";
import { MovieType } from "../Types/film-type";
import {movies} from "../Mocks/films";
import {reviews} from "../Mocks/reviews";
import { ReviewType } from "../Types/reviews-type";
import { changeGenreAction, resetDisplayedMoviesCount, setIncreaseMoviesCount, setMovies, setReviews } from "./action";

type GenresType = {
  genre: string,
  movies: MovieType[],
  reviews: ReviewType[],
  displayedMoviesCount: number,
};

const initialState: GenresType = {
  genre: 'All genres',
  displayedMoviesCount: 8,
  movies,
  reviews,
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
    state.displayedMoviesCount = 8;
  })
  .addCase(setIncreaseMoviesCount, (state, action) => {
    state.displayedMoviesCount += action.payload
  })
  .addCase(resetDisplayedMoviesCount, (state) => {
    state.displayedMoviesCount = 8;
  })
  .addCase(setReviews, (state, action) => {
    state.reviews = action.payload;
  })
})

export {reducer};