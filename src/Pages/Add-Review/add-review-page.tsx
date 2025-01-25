import { Link, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import Sketch from '../../components/sketch/sketch';
import { AppRoute } from '../../const';
import { addNewComments, logoutAction } from '../../store/api-actions';
import React, { FormEvent, useRef } from 'react';
import { redirectToRoute } from '../../store/action';


function AddReviewPage(): JSX.Element {

  const { filmId } = useParams();
  const dispatch = useAppDispatch();

  const movies = useAppSelector((state) => state.MOVIES_DATA.movies);
  const movie = movies.find((item) => item.id === Number(filmId));

  const formRef = useRef<HTMLFormElement | null>(null);

  const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (!formRef.current) {
      return
    }
    const formData = new FormData(formRef.current);
    const rating = Number(formData.get('rating'));
    const comment = formData.get('review-text') as string;
    dispatch(addNewComments({ filmId: Number(filmId), comment, rating }));
    dispatch(redirectToRoute(`${AppRoute.Film}/${filmId}` as AppRoute))
  }

  if (!movie) {
    return <h1>ошибка</h1>
  };

  return (
    <>
      <Sketch />

      <section className="film-card film-card--full" style={{ background: movie.backgroundColor }}>
        <div className="film-card__header" key={filmId}>
          <div className="film-card__bg">
            <img src={movie.backgroundImage} alt={movie.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <div className="logo">
              <Link className="logo__link" to="/">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to={`${AppRoute.Film}/${filmId}`} className="breadcrumbs__link">{movie.name}</Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>

            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <Link to={AppRoute.MyList}>
                    <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                  </Link>
                </div>
              </li>
              <li className="user-block__item">
                <Link className="user-block__link" to={AppRoute.Main}
                  onClick={(evt) => {
                    evt.preventDefault();
                    dispatch(logoutAction());
                  }}>Sign out</Link>
              </li>
            </ul>
          </header>

          <div className="film-card__poster film-card__poster--small">
            <img src={movie.posterImage} alt={movie.posterImage} width="218" height="327" />
          </div>
        </div>

        <div className="add-review">
          <form action="#" className="add-review__form" ref={formRef} onSubmit={onSubmit}>
            <div className="rating">
              <div className="rating__stars">

                {
                  [...Array(10)].map((_: number, index) => (
                    <React.Fragment key={index}>
                      <input className="rating__input" id={`star-${index + 1}`} type="radio" name="rating" value={index + 1} />
                      <label className="rating__label" htmlFor={`star-${index + 1}`}>{index + 1}</label>
                    </React.Fragment>
                  )).reverse()
                }

              </div>
            </div>

            <div className="add-review__text">
              <textarea
                className="add-review__textarea"
                name="review-text"
                id="review-text"
                placeholder="Review text"
                minLength={50}
                maxLength={400}
                required
              />
              <div className="add-review__submit">
                <button className="add-review__btn" type="submit"
                >Post</button>
              </div>

            </div>
          </form>
        </div>

      </section>
    </>);
}


export default AddReviewPage;