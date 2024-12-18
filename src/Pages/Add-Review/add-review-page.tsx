import { Link, useParams } from 'react-router-dom';
import { ChangeEvent, FormEvent, useState } from 'react';
import { AppRoute } from '../../const';
import Sketch from '../../Components/Sketch/sketch';
import { useAppSelector } from '../../Hooks/hooks';

function AddReviewPage(): JSX.Element {

  const { filmId } = useParams();

  const movies = useAppSelector((state) => state.movies);
  const movie = movies.find((item) => item);
  if (!movie) {
    return <h1>ошибка</h1>
  }

  const [rating, setRating] = useState<number>(0);
  const [reviewText, setReviewText] = useState<string>('');
  const [isFormDisabled, setIsFormDisabled] = useState<boolean>(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState<boolean>(true);

  const handleRatingChange = (value: number) => {
    setRating(value);
    validateForm(value, reviewText);
  };

  const handleReviewTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const text = event.target.value;
    console.log(text);
    setReviewText(text);
    validateForm(rating, text);
  };

  const validateForm = (ratings: number, texts: string) => {
    if (ratings > 0 && texts.length >= 50 && texts.length <= 400) {
      setIsSubmitDisabled(false);
    } else {
      setIsSubmitDisabled(true);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    setIsFormDisabled(true);

    const formData = {
      rating,
      reviewText,
    };
    try {
      console.log('Отправленные данные:', formData);
      setIsFormDisabled(false);
      setRating(0);
      setReviewText('');
      setIsSubmitDisabled(true);
    } catch (error) {
      console.error('Ошибка при отправке данных:', error);
      setIsFormDisabled(false);
    }
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
                  <Link className="breadcrumbs__link" to={AppRoute.AddReview}>Add review</Link>
                </li>
              </ul>
            </nav>

            <ul className="user-block">
              <li className="user-block__item">
                <Link to={AppRoute.MyList}>
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                </Link>
              </li>
              <li className="user-block__item">
                <Link className="user-block__link" to={AppRoute.Main}>Sign out</Link>
              </li>
            </ul>
          </header>

          <div className="film-card__poster film-card__poster--small">
            <img src={movie.posterImage} alt={movie.posterImage} width="218" height="327" />
          </div>
        </div>

        <div className="add-review">
          <form action="#" className="add-review__form" onSubmit={handleSubmit}>
            <div className="rating">
              <div className="rating__stars">

                {
                  [...Array(10)].map((_: number, index) => (
                    <span key={index}>
                      <input
                        className="rating__input"
                        id={`star-${index + 1}`}
                        type="radio"
                        name="rating"
                        value={index + 1}
                        checked={rating === index + 1}
                        disabled={isFormDisabled}
                        onChange={() => handleRatingChange(index + 1)}
                      />
                      <label className="rating__label" htmlFor={`star-${index + 1}`}> Rating {index + 1}</label>
                    </span>
                  )).reverse()
                }

              </div>
            </div>

            <div className="add-review__text">
              <textarea
                value={reviewText}
                onChange={handleReviewTextChange}
                className="add-review__textarea"
                name="review-text"
                id="review-text"
                placeholder="Review text"
                disabled={isFormDisabled}
              />
              <div className="add-review__submit">
                <button className="add-review__btn" type="submit" disabled={isSubmitDisabled || isFormDisabled}>Post</button>
              </div>

            </div>
          </form>
        </div>

      </section>
    </>);
}


export default AddReviewPage;