import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/footer";
import { MovieType } from "../../Types/film-type";
import Sketch from "../../Components/Sketch/sketch";
import { AppRoute } from "../../const";

type MyListPageProps = {
  films: MovieType[];
}

function MyListPage(props: MyListPageProps) {
  const { films } = props;
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
              <Link className="user-block__link" to={AppRoute.Main}>Sign out</Link>
            </li>
          </ul>
        </header>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <div className="catalog__films-list">
            {
              films.map((film) => (
                <article className="small-film-card catalog__films-card" key={film.id}>
                  <Link to={AppRoute.Film}>
                    <div className="small-film-card__image">
                      <img src={film.posterImage} alt={film.name} width="280" height="175" />
                    </div>
                  </Link>
                  <h3 className="small-film-card__title">
                    <Link className="small-film-card__link" to={AppRoute.Film}>{film.name}</Link>
                  </h3>
                </article>
              ))
            }
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MyListPage;