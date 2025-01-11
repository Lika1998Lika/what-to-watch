import { Link, useParams } from "react-router-dom";
import Header from "../../Components/Header/header";
import Sketch from "../../Components/Sketch/sketch";
import { AppRoute } from "../../const";
import Tabs from "../../Components/Tabs/tabs-film";
import Footer from "../../Components/Footer/footer";
import { useAppSelector } from "../../Hooks/hooks";
import FilmsList from "../../Components/Films-List/films-list";

function FilmPage() {

  const { filmId } = useParams();
  const movies = useAppSelector((state) => state.movies);
  //FIX
  const film = movies.find((item: any) => String(item.id) === filmId);

  if (!film) return null;

  return (
    <>
      <Sketch />
      <section className="film-card film-card--full" style={{ background: film.backgroundColor }} key={film.id}>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <Link className="btn film-card__button" to={`${AppRoute.AddReview}/${filmId}/review`}>Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={film.name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <Tabs />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          {
            movies.length >= 4 ? <FilmsList limit={4} /> : ''
          }
        </section>

        <Footer />
      </div>
    </>
  );
}

export default FilmPage;