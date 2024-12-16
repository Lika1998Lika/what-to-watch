import { Link } from "react-router-dom";
import { MovieType } from "../../Types/film-type";
import { AppRoute } from "../../const";
import { useRef, useState } from "react";
import VideoPlayer from "../Video-Player/video-player";
import { useAppSelector } from "../../Hooks/hooks";

type FilmsListProps = {
  limit?: number;
}
const FilmsList: React.FC<FilmsListProps> = ({ limit }) => {

  const [activeFilm, setActiveFilm] = useState<null | MovieType>(null);
  const [isHovered, setIsHovered] = useState(false);

  const movies = useAppSelector((state) => state.movies);

  const timerRef = useRef<number | undefined>(undefined);

  const handleMouseEnter = () => {
    timerRef.current = window.setTimeout(() => {
      setIsHovered(true);
    }, 5000);
  };

  const handleMouseLeave = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = undefined;
    }
    setIsHovered(false);
  };

  const displayedMovies = limit ? movies.slice(0, limit) : movies;

  return (
    <div className="catalog__films-list" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {
        displayedMovies.map((item) => (
          activeFilm?.id === item.id && isHovered
            ?
            <VideoPlayer key={activeFilm.id} src={activeFilm.previewVideoLink} poster={activeFilm?.posterImage} />
            :
            <article className="small-film-card catalog__films-card" key={item.id} onMouseEnter={() => setActiveFilm(item)}>
              <Link className="small-film-card__link" to={`${AppRoute.Film}/${item.id}`}>
                <div className="small-film-card__image">
                  <img src={item.previewImage} alt={item.name} width="280" height="175" />
                </div>
              </Link>
              <h3 className="small-film-card__title">
                <Link className="small-film-card__link" to={`${AppRoute.Film}/${item.id}`}>{item.name}</Link>
              </h3>
            </article>
        ))
      }
    </div>

  )
}

export default FilmsList;