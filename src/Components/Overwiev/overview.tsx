import { MovieType } from "../../Types/film-type";

type OverviewProps = {
  film: MovieType;
};

function Overview({ film }: OverviewProps) {
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">240 ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film.description}</p>
        <p className="film-card__director"><strong>Director:{film.director}</strong></p>
        <p className="film-card__starring"><strong>Starring:{film.starring.map((i) => ` ${i}, `)}</strong></p>
      </div>
    </>
  )
}

export default Overview;