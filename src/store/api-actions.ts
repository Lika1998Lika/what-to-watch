import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { AppDispatch, State } from "../types/state";
import { MovieType } from "../types/film-type";
import { APIRoute, AppRoute, AuthorizationStatus } from "../const";
import { loadMovies, loadReviews, redirectToRoute, requireAuthorization, setDataLoadedStatus } from "./action";
import { AuthData } from "../types/auth-data";
import { UserData } from "../types/user-data";
import { dropToken, saveToken } from "../components/services/token";
import { ReviewType } from "../types/reviews-type";
import { CreateCommentDto } from "../types/comment-dto-type";


export const fetchMoviesActions = createAsyncThunk<void, undefined, {dispatch: AppDispatch, state: State, extra: AxiosInstance}>(
  'data/fetchMovies',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<MovieType[]>(APIRoute.Movies);
    dispatch(setDataLoadedStatus(true));
    dispatch(loadMovies(data));
    dispatch(setDataLoadedStatus(false));
  },
);

export const fetchReviewsActions = createAsyncThunk<void, number, {dispatch: AppDispatch, state: State, extra: AxiosInstance}>(
  'comments/fetchReviews',
  async (filmId, {dispatch, extra: api}) => {
    const {data} = await api.get<ReviewType[]>(`${APIRoute.Comments}/${filmId}`);
    dispatch(loadReviews(data));
  },
);

export const addNewComments = createAsyncThunk<void, CreateCommentDto, {dispatch: AppDispatch, state: State, extra: AxiosInstance}>(
  'comments/addNewComments',
  async (dto, {dispatch, extra: api}) => {
    const {filmId, comment, rating} = dto;
    const { data } = await api.post<ReviewType[]>(`${APIRoute.Comments}/${filmId}`, {comment, rating});
    dispatch(loadReviews(data));
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {dispatch: AppDispatch, state: State, extra: AxiosInstance}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth))
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {dispatch: AppDispatch, state: State, extra: AxiosInstance}>(
  'user/login',
  async ({email: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main))
  },
);

export const logoutAction = createAsyncThunk<void, undefined, { dispatch: AppDispatch, state: State, extra: AxiosInstance}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);