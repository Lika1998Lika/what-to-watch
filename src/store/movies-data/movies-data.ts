import { createSlice } from "@reduxjs/toolkit";
import { NameSpace } from "../../const";
import { MoviesData } from "../../types/state";
import { fetchMoviesActions } from "../api-actions";

const initialState: MoviesData = {
  movies: [],
  isDataLoaded: false,
}
export const moviesData = createSlice({
  name: NameSpace.MoviesData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
    .addCase(fetchMoviesActions.pending, (state) => {
      state.isDataLoaded = true;
    })
    .addCase(fetchMoviesActions.fulfilled, (state, action) => {
      state.movies = action.payload;
      state.isDataLoaded = false;
    });
  }
});