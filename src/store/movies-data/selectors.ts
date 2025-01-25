import { State } from "../../types/state";
import { NameSpace } from "../../const";
import { MovieType } from "../../types/film-type";

export const moviewsData = (state: State): MovieType[] => state[NameSpace.MoviesData].movies;
export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.MoviesData].isDataLoaded;