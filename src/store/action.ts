import { createAction } from "@reduxjs/toolkit";
import { MovieType } from "../Types/film-type";

export const changeGenreAction = createAction<string>('CHANGE_GENRE');
export const setMovies = createAction<MovieType[]>('SET_MOVIES');
