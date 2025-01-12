import { Link } from "react-router-dom";
import Sketch from "../../components/sketch/sketch";
import { AppRoute } from "../../const";
import FilmsList from "../../components/films-List/films-list";
import Footer from "../../components/footer/footer";
import { useAppDispatch } from "../../hooks/hooks";
import { logoutAction } from "../../store/api-actions";


function MyListPage() {
  const dispatch = useAppDispatch();

  return (
    <>
      <Sketch />

      <div className="user-page">

        <header className="page-header user-page__head">
          <div className="logo">
            <Link className="logo__link" to={AppRoute.Main}>
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <h1 className="page-title user-page__title">My list</h1>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <Link to={AppRoute.Main} className="user-block__link"
                onClick={(evt) => {
                  evt.preventDefault();
                  dispatch(logoutAction());
                }}>
                Sign Out
              </Link>
            </li>
          </ul>
        </header>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <div className="catalog__films-list">
            <FilmsList />
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MyListPage;