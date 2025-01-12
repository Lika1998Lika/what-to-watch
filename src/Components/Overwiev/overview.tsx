import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";
import { getRatingDescription } from "./get-rating-description";


function Overview() {

  const { filmId } = useParams()
  const movies = useAppSelector((state) => state.movies);

  const film = movies.find((movie) => movie.id === Number(filmId));
  const filmRating = film?.rating.toString();

  if (!filmRating) return null;
  const ratingParseInt = parseInt(filmRating);

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film?.rating}</div>
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