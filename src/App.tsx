import MainPage from "./Pages/Main/main-page"
import { AppRoute } from "./const"
import SignInPage from "./Pages/Sign-In/sign-in-page"
import MyListPage from "./Pages/My-List/my-list-page"
import FilmPage from "./Pages/Film/film-page"
import AddReviewPage from "./Pages/Add-Review/add-review-page"
import PlayerPage from "./Pages/Player/player-page"
import NotFoundScreen from "./Pages/NotFoundScreen/not-found-screen"
import PrivateRoute from "./Components/PrivateRoutes/private-route"
import { Navigate, Route, Routes } from "react-router-dom"
import Details from "./Components/Details/details"
import Reviews from "./Components/Reviews/reviews"
import Overview from "./Components/Overwiev/overview"
import { useAppSelector } from "./Hooks/hooks"
import LoadingScreen from "./Pages/Loading-Screen/loading-screen"
import { isCheckedAuth } from "./movies"
import HistoryRouter from "./Components/History-Router/history-router"
import browserHistory from "./browser-history"

function App() {

  const authorizationStatus = useAppSelector((state) => state.authorizationStatus)
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
