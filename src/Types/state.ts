import { store } from "../store/index";
import { AuthorizationStatus } from '../const';
import { MovieType } from "./film-type";
import { ReviewType } from "./reviews-type";

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
};

export type MoviesData = {
  movies: MovieType[],
  isDataLoaded: boolean,
};

export type MoviesProcess = {
  genre: string,
  displayedMoviesCount: number,
  movies: MovieType[],
};

export type ReviewsData = {
  reviews: ReviewType[],
  isDataLoaded: boolean,
}

//работа с конкретным объектом хранилища, который содержит информ. о всех ключах и т.д
export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

