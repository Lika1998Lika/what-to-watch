import { createAction } from "@reduxjs/toolkit";
import { MovieType } from "../Types/film-type";
import { ReviewType } from "../Types/reviews-type";
import { AppRoute, AuthorizationStatus } from "../const";

export const loadMovies = createAction<MovieType[]>('data/LOAD_MOVIES');
export const requireAuthorization = createAction<AuthorizationStatus>('user/REQUIRE_AUTHORIZATION');
// export const setError = createAction<string | null>('movies/SET_ERROR');
export const setDataLoadedStatus = createAction<boolean>('data/SET_DATA_LOADED_STATUS');
export const redirectToRoute = createAction<AppRoute>('movies/REDIRECT_TO_ROUTE');
export const changeGenreAction = createAction<string>('genres/CHANGE_GENRE');
export const setMovies = createAction<MovieType[]>('movies/SET_MOVIES');
export const setReviews = createAction<ReviewType[]>('reviews/SET_REVIEWS');
export const setIncreaseMoviesCount = createAction<number>('movies/SET_INC_COUNT');
export const resetDisplayedMoviesCount = createAction<number>('moviex/RESET_DISPLAYED_MOVIES_COUNT');