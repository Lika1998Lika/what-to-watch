import { createSlice } from "@reduxjs/toolkit";
import { ReviewsData } from "../../types/state";
import { NameSpace } from "../../const";
import { addNewComments, fetchReviewsActions } from "../api-actions";

const initialState: ReviewsData = {
  reviews: [],
  isDataLoaded: false,
};

export const reviewsData = createSlice({
  name: NameSpace.ReviewsData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
    .addCase(fetchReviewsActions.pending, (state) => {
      state.isDataLoaded = true;
    })
    .addCase(fetchReviewsActions.fulfilled, (state, action) => {
      state.reviews = action.payload;
      state.isDataLoaded = false;
    })
    .addCase(addNewComments.pending, (state) => {
      state.isDataLoaded = true;
    })
    .addCase(addNewComments.fulfilled, (state, action) => {
      state.reviews = action.payload,
      state.isDataLoaded = false;
    })
  }
})