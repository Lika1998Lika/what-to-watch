import { createAction } from "@reduxjs/toolkit";
import { AppRoute } from "../const";

export const redirectToRoute = createAction<AppRoute>('movies/REDIRECT_TO_ROUTE');
// export const changeGenreAction = createAction<string>('genres/CHANGE_GENRE');
// export const setIncreaseMoviesCount = createAction<number>('movies/SET_INC_COUNT');
// export const resetDisplayedMoviesCount = createAction<number>('moviex/RESET_DISPLAYED_MOVIES_COUNT');