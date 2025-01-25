import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";
import Header from "../header/header";
import { AppRoute } from "../../const";
// import { useState } from "react";

{/* <svg viewBox="0 0 18 14" width="18" height="14">
  <use xlink:href="#in-list"></use>
</svg> */}

function FilmCard() {
  const { filmId } = useParams();
  const movies = useAppSelector((state) => state.MOVIES_DATA.movies)
  const film = movies.find((item) => item);

  if (!film) {
    return;
  }

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={film.backgroundImage} alt={film.name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header />

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={film.posterImage} alt={film.name} width="218" height="327" />
          </div>

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
                  <use href="#add"></use>
                </svg>
                <span>My list</span>
              </button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FilmCard;