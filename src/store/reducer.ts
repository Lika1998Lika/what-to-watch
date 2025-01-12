import { createReducer } from "@reduxjs/toolkit";
import { MovieType } from "../types/film-type";
import { ReviewType } from "../types/reviews-type";
import { AuthorizationStatus } from "../const";
import { changeGenreAction, loadMovies, requireAuthorization, resetDisplayedMoviesCount, setDataLoadedStatus, setIncreaseMoviesCount, setMovies, setReviews } from "./action";


type InitialState = {
  genre: string,
  movies: MovieType[],
  reviews: ReviewType[],
  authorizationStatus: AuthorizationStatus,
  displayedMoviesCount: number,
  isDataLoaded: boolean
};

const initialState: InitialState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  movies: [],
  reviews: [],
  isDataLoaded: false,
  genre: 'All genres',
  displayedMoviesCount: 8,
};

const reducer = createReducer(initialState, (builder) => {
  builder
  .addCase(loadMovies, (state, action) => {
    state.movies = action.payload;
  })
  .addCase(requireAuthorization, (state, action) => {
    state.authorizationStatus = action.payload;
  })
  .addCase(setDataLoadedStatus, (state, action) => {
    state.isDataLoaded = action.payload;
  })
  .addCase(changeGenreAction, (state, action) => {
    state.genre = action.payload;
    if (action.payload === 'All genres') {
      state.movies = [];
    } else {
      state.movies = state.movies.filter(movie => movie.genre === action.payload);
    }
  })
  .addCase(setMovies, (state, action) => {
    state.movies = action.payload;
    state.displayedMoviesCount = 8;
  })
  .addCase(setReviews, (state, action) => {
    state.reviews = action.payload;
  })
  .addCase(setIncreaseMoviesCount, (state, action) => {
    state.displayedMoviesCount += action.payload
  })
  .addCase(resetDisplayedMoviesCount, (state) => {
    state.displayedMoviesCount = 8;
  })
})

export {reducer};