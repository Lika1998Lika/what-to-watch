import { Navigate, Route, Routes } from "react-router-dom";
import { AppRoute } from "./const";
import PrivateRoute from "./components/privateRoutes/private-route";
import MyListPage from "./pages/my-list/my-list-page";
import MainPage from "./pages/main/main-page";
import SignInPage from "./pages/sign-in/sign-in-page";
import AddReviewPage from "./pages/add-review/add-review-page";
import FilmPage from "./pages/film/film-page";
import Overview from "./components/overwiev/overview";
import Details from "./components/details/details";
import Reviews from "./components/reviews/reviews";
import PlayerPage from "./pages/player/player-page";
import NotFoundScreen from "./pages/not-found-screen/not-found-screen";
import HistoryRouter from "./components/history-router/history-router";
import browserHistory from "./browser-history";
import { useAppSelector } from "./hooks/hooks";
import { isCheckedAuth } from "./movies";
import LoadingScreen from "./pages/loading-screen/loading-screen";


function App() {

  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isDataLoaded = useAppSelector((state) => state.isDataLoaded);

  if (isCheckedAuth(authorizationStatus || isDataLoaded)) {
    return <LoadingScreen />;
  };

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage />} />
        <Route path={AppRoute.SignIn} element={<SignInPage />} />
        <Route path={AppRoute.MyList} element={
          <PrivateRoute authorizationStatus={authorizationStatus}>
            <MyListPage />
          </PrivateRoute>
        } />
        <Route path={`${AppRoute.AddReview}/:filmId/review`} element={
          <PrivateRoute authorizationStatus={authorizationStatus}>
            <AddReviewPage />
          </PrivateRoute>} />

        <Route path={`${AppRoute.Film}/:filmId`} element={<FilmPage />}>
          <Route index element={<Navigate to="overview" replace />} />
          <Route path="overview" element={<Overview />} />
          <Route path="details" element={<Details />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path={AppRoute.Player} element={<PlayerPage />} />
        <Route path='*' element={<NotFoundScreen />} />
      </Routes>
    </HistoryRouter>
  )
}

export default App
