import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { genreMap, genriesListFilms } from "../../const";
import { changeGenreAction } from "../../store/movies-process/movies-process";


function CatalogGenres() {

  const activeClass = 'catalog__genres-item--active';
  const dispatch = useAppDispatch();
  const genre = useAppSelector((state) => state.MOVIES.genre);

  return (
    <ul className="catalog__genres-list">
      {
        genriesListFilms.map((item) => {
          return (
            <li className={`catalog__genres-item ${genre === item ? activeClass : ''}`} key={item}>
              <Link to='#' className="catalog__genres-link" onClick={() => dispatch(changeGenreAction(genreMap[item]))}>{item}</Link>
            </li>
          )
        })
      }

    </ul>
  )
}

export default CatalogGenres;