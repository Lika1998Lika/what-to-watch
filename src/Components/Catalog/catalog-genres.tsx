import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Hooks/hooks";
import { changeGenreAction } from "../../Store/action";
import { genriesListFilms, genreMap } from "../../const";

function CatalogGenres() {

  const activeClass = 'catalog__genres-item--active';
  const dispatch = useAppDispatch();
  const genre = useAppSelector((state) => state.genre);

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