import { createAction } from "@reduxjs/toolkit";
import { MovieType } from "../Types/film-type";
import { ReviewType } from "../Types/reviews-type";

export const changeGenreAction = createAction<string>('genres/CHANGE_GENRE');
export const setMovies = createAction<MovieType[]>('movies/SET_MOVIES');
export const setReviews = createAction<ReviewType[]>('reviews/SET_REVIEWS');
export const setIncreaseMoviesCount = createAction<number>('movies/SET_INC_COUNT');
export const resetDisplayedMoviesCount = createAction<number>('moviex/RESET_DISPLAYED_MOVIES_COUNT')
