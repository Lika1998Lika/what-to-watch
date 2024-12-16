import MainPage from "./Pages/Main/main-page"
import { AppRoute, AuthorizationStatus } from "./const"
import SignInPage from "./Pages/Sign-In/sign-in-page"
import MyListPage from "./Pages/My-List/my-list-page"
import FilmPage from "./Pages/Film/film-page"
import AddReviewPage from "./Pages/Add-Review/add-review-page"
import PlayerPage from "./Pages/Player/player-page"
import NotFoundScreen from "./Pages/NotFoundScreen/not-found-screen"
import PrivateRoute from "./Components/PrivateRoutes/private-route"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Details from "./Components/Details/details"
import Reviews from "./Components/Reviews/reviews"
import Overview from "./Components/Overwiev/overview"
import { ReviewType } from "./Types/reviews-type"
import { useAppSelector } from "./Hooks/hooks"

type AppProps = {
  reviews: ReviewType[];
};

function App(props: AppProps) {
  const { reviews } = props;
  const movies = useAppSelector((state) => state.movies)

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage films={movies} />} />
        <Route path={AppRoute.SignIn} element={<SignInPage />} />
        <Route path={AppRoute.MyList} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
            <MyListPage />
          </PrivateRoute>
        } />
        <Route path={`${AppRoute.AddReview}/:filmId/review`} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
            <AddReviewPage movie={movies[3]} />
          </PrivateRoute>} />

        <Route path={`${AppRoute.Film}/:filmId`} element={<FilmPage />}>
          <Route index element={<Navigate to="overview" replace />} />
          <Route path="overview" element={<Overview film={movies[1]} />} />
          <Route path="details" element={<Details film={movies[1]} />} />
          <Route path="reviews" element={<Reviews review={reviews.map((i) => i)} />} />
        </Route>

        <Route path={AppRoute.Player} element={<PlayerPage film={movies[0]} />} />
        <Route path='*' element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
