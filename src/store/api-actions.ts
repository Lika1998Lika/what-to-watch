import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { AppDispatch, State } from "../types/state";
import { MovieType } from "../types/film-type";
import { APIRoute, AppRoute } from "../const";
import { redirectToRoute } from "./action";
import { AuthData } from "../types/auth-data";
import { UserData } from "../types/user-data";
import { dropToken, saveToken } from "../services/token";
import { ReviewType } from "../types/reviews-type";
import { CreateCommentDto } from "../types/comment-dto-type";


export const fetchMoviesActions = createAsyncThunk<MovieType[], undefined, {dispatch: AppDispatch, state: State, extra: AxiosInstance}>(
  'data/fetchMovies',
  async (_arg, { extra: api}) => {
    const {data} = await api.get<MovieType[]>(APIRoute.Movies);
    return data;
  },
);

export const fetchReviewsActions = createAsyncThunk<ReviewType[], number, {dispatch: AppDispatch, state: State, extra: AxiosInstance}>(
  'comments/fetchReviews',
  async (filmId, { extra: api}) => {
    const {data} = await api.get<ReviewType[]>(`${APIRoute.Comments}/${filmId}`);
    return data;
  },
);

export const addNewComments = createAsyncThunk<ReviewType[], CreateCommentDto, {dispatch: AppDispatch, state: State, extra: AxiosInstance}>(
  'comments/addNewComments',
  async (dto, { extra: api}) => {
    const {filmId, comment, rating} = dto;
    const { data } = await api.post<ReviewType[]>(`${APIRoute.Comments}/${filmId}`, {comment, rating});
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {dispatch: AppDispatch, state: State, extra: AxiosInstance}>(
  'user/checkAuth',
  async (_arg, { extra: api}) => {
    await api.get(APIRoute.Login)
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {dispatch: AppDispatch, state: State, extra: AxiosInstance}>(
  'user/login',
  async ({email: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(redirectToRoute(AppRoute.Main))
  },
);

export const logoutAction = createAsyncThunk<void, undefined, { dispatch: AppDispatch, state: State, extra: AxiosInstance}>(
  'user/logout',
  async (_arg, { extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);