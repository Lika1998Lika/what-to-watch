import { BrowserRouter, Route, Routes } from "react-router"
import MainPage from "./Pages/Main/main-page"
import { AppRoute, AuthorizationStatus } from "./const"
import SignInPage from "./Pages/Sign-In/sign-in-page"
import MyListPage from "./Pages/My-List/my-list-page"
import FilmPage from "./Pages/Film/film-page"
import AddReviewPage from "./Pages/Add-Review/add-review-page"
import PlayerPage from "./Pages/Player/player-page"
import NotFoundScreen from "./Pages/NotFoundScreen/not-found-screen"
import PrivateRoute from "./Components/PrivateRoutes/private-route"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage />} />
        <Route path={AppRoute.SignIn} element={<SignInPage />} />
        <Route path={AppRoute.MyList} element={<PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}><MyListPage /></PrivateRoute>} />
        <Route path={AppRoute.AddReview} element={<PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}><AddReviewPage /></PrivateRoute>} />
        <Route path={AppRoute.Film} element={<FilmPage />} />
        <Route path={AppRoute.Player} element={<PlayerPage />} />
        <Route path='*' element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App