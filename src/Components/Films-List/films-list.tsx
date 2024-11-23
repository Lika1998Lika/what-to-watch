import { Link } from "react-router-dom";
import { MovieType } from "../../Types/film-type";
import { AppRoute } from "../../const";
import { useState } from "react";
import VideoPlayer from "../Video-Player/video-player";

type FilmsListProps = {
  films: MovieType[];
};

function FilmsList(props: FilmsListProps) {

  const { films } = props;

  const [activeFilm, setActiveFilm] = useState<null | MovieType>(null);


  return (
    <div className="catalog__films-list">
      {
        films.map((item) => (
          activeFilm?.id === item.id
            ?
            <VideoPlayer key={activeFilm.id} src={activeFilm.videoLink} poster={activeFilm?.posterImage} autoPlay={false} />
            :
            <article className="small-film-card catalog__films-card" key={item.id} onMouseEnter={() => setActiveFilm(item)}>
              <div className="small-film-card__image">
                <img src={item.posterImage} alt={item.name} width="280" height="175" />
              </div>
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