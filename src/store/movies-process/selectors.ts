import { NameSpace } from "../../const";
import { State } from "../../types/state";

export const getGenre = (state: State): string => state[NameSpace.Movie].genre;
export const getDisplayedMoviesCount = (state: State): number => state[NameSpace.Movie].displayedMoviesCount;


