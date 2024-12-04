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
import { MovieType } from "./Types/film-type"
import Details from "./Components/Details/details"
import Reviews from "./Components/Reviews/reviews"
import Overview from "./Components/Overwiev/overview"
import { ReviewType } from "./Types/reviews-type"

type AppProps = {
  films: MovieType[];
  reviews: ReviewType[];
};

function App(props: AppProps) {
  const { films, reviews } = props;
  if (!films) {
    return <h1>Данные о фильме недоступны</h1>
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage films={films} />} />
        <Route path={AppRoute.SignIn} element={<SignInPage />} />
        <Route path={AppRoute.MyList} element={<PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}><MyListPage films={films} /></PrivateRoute>} />
        <Route path={AppRoute.AddReview} element={<PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}><AddReviewPage movie={films[3]} /></PrivateRoute>} />

        <Route path={`${AppRoute.Film}/:filmId`} element={<FilmPage film={films[1]} />}>
          <Route index element={<Navigate to="overview" replace />} />
          <Route path="overview" element={<Overview film={films[1]} />} />
          <Route path="details" element={<Details film={films[1]} />} />
          <Route path="reviews" element={<Reviews review={reviews.map((i) => i)} />} />
        </Route>

        <Route path={AppRoute.Player} element={<PlayerPage film={films[0]} />} />
        <Route path='*' element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
