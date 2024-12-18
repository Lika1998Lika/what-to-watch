import { createReducer } from "@reduxjs/toolkit";
import { changeGenreAction, setMovies, setReviews } from "./action";
import { MovieType } from "../Types/film-type";
import {movies} from "../Mocks/films";
import {reviews} from "../Mocks/reviews";
import { ReviewType } from "../Types/reviews-type";

type GenresType = {
  genre: string,
  movies: MovieType[],
  reviews: ReviewType[],
};

const initialState: GenresType = {
  genre: 'All genres',
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
  })
  .addCase(setReviews, (state, action) => {
    state.reviews = action.payload;
  })
})

export {reducer};