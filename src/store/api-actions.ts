import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch, State } from "../Types/state";
import { AxiosInstance } from "axios";
import { MovieType } from "../Types/film-type";
import { APIRoute, AppRoute, AuthorizationStatus } from "../const";
import { loadMovies, requireAuthorization, setDataLoadedStatus, redirectToRoute } from "./action";
import { AuthData } from "../Types/auth-data";
import { dropToken, saveToken } from "../Components/Services/token";
import { UserData } from "../Types/user-data";

export const fetchMoviesActions = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchMovies',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<MovieType[]>(APIRoute.Movies);
    dispatch(setDataLoadedStatus(true));
    dispatch(loadMovies(data));
    dispatch(setDataLoadedStatus(true));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
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

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({email: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.MyList))
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);


// export const clearErrorAction = createAsyncThunk(
//   'movie/clearError', () => {
//     setTimeout(
//       () => store.dispatch(setError(null)), TIMEOUT_SHOW_ERROR);
//     },
// );