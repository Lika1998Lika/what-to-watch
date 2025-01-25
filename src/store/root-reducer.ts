import { combineReducers } from "redux";
import { NameSpace } from "../const";
import { moviesData } from "./movies-data/movies-data";
import { reviewsData } from "./reviews-data/reviews-data";
import { moviesProcess } from "./movies-process/movies-process";
import { userProcess } from "./user-process/user-process";

export const rootReducer = combineReducers({
  [NameSpace.MoviesData]: moviesData.reducer,
  [NameSpace.ReviewsData]: reviewsData.reducer,
  [NameSpace.Movie]: moviesProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
})