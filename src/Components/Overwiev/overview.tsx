import { useParams } from "react-router-dom";
import { useAppSelector } from "../../Hooks/hooks";

function Overview() {
  const { filmId } = useParams();

  const reviews = useAppSelector((state) => state.reviews);
  const movies = useAppSelector((state) => state.movies);

  const review = reviews.find((movie) => movie);
  const film = movies.find((review) => review);

  const filmRating = film?.rating.toString();
  console.log(filmRating)
  if (!filmRating) return null;
  const ratingParseInt = parseInt(filmRating)

  const getRatingDescription = (value: number) => {
    switch (true) {
      case (value === 10):
        return "Awesome";
      case (value >= 8 && value < 10):
        return "Very good";
      case (value < 5 && value < 8):
        return "Good";
      case (value >= 3 && value < 5):
        return "Normal";
      case (value >= 0 && value < 3):
        return "Bad";
      default: return '';
    }
  }

  return (
    <>
      <div className="film-rating" key={filmId}>
        <div className="film-rating__score">{review?.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getRatingDescription(ratingParseInt)}</span>
          <span className="film-rating__count">{film?.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film?.description}</p>
        <p className="film-card__director"><strong>Director:{film?.director}</strong></p>
        <p className="film-card__starring"><strong>Starring:{film?.starring}</strong></p>
      </div>
    </>
  )
}

export default Overview;