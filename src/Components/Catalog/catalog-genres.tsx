const genreFilm = [
  'All genres',
  'Comedies',
  'Crime',
  'Documentary',
  'Dramas',
  'Horror',
  'Kids & Family',
  'Romance',
  'Sci-Fi',
  'Thrillers'
];

function CatalogGenres() {

  return (
    <>
      <ul className="catalog__genres-list">
        {
          genreFilm.map((item) => (
            <li className="catalog__genres-item" key={item}>
              <a href="/" className="catalog__genres-link">{item}</a>
            </li>
          ))
        }
      </ul>

    </>
  )
}

export default CatalogGenres;