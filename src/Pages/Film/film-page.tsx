import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";
import Sketch from "../../components/sketch/sketch";
import Header from "../../components/header/header";
import { AppRoute } from "../../const";
import Tabs from "../../components/tabs/tabs-film";
import FilmsList from "../../components/films-List/films-list";
import Footer from "../../components/footer/footer";

function FilmPage() {

  const { filmId } = useParams();
  const movies = useAppSelector((state) => state.MOVIES_DATA.movies);
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
                  <Link to={`${AppRoute.Player}/${filmId}`} style={{ textDecoration: 'none', color: '#D9CD8D' }}>
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>
                      Play
                    </span>
                  </Link>
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