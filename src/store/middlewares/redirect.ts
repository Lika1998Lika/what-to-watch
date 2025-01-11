import browserHistory from "../../browser-history";
import { Middleware } from "redux";
import { reducer } from "../reducer";

interface ReduxAction {
  type: string;
}

interface RedirectToRouteAction extends ReduxAction {
  type: 'movies/REDIRECT_TO_ROUTE';
  payload: string;
}
function isRedirectToRouteAction(action: unknown): action is RedirectToRouteAction {
  return (
    typeof action === 'object' &&
    action !== null &&
    (action as RedirectToRouteAction).type === 'movies/REDIRECT_TO_ROUTE'
  );
}

type Reducer = ReturnType<typeof reducer>;

export const redirect: Middleware<unknown, Reducer> =
  (_store) =>
    (next) =>
      (action: unknown) => {
        if (isRedirectToRouteAction(action)) {
          browserHistory.push(action.payload);
        }
        return next(action);
};