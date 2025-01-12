import CatalogGenres from "../../components/catalog/catalog-genres";
import FilmCard from "../../components/film-card/film-card";
import FilmsList from "../../components/films-List/films-list";
import Footer from "../../components/footer/footer";
import ShowMore from "../../components/show-more/show-more";
import Sketch from "../../components/sketch/sketch";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setIncreaseMoviesCount } from "../../store/action";

function MainPage() {
  const movies = useAppSelector((state) => state.movies);
  const displayedMoviesCount = useAppSelector((state) => state.displayedMoviesCount);
  const dispatch = useAppDispatch();

  const handleShowMore = () => {
    dispatch(setIncreaseMoviesCount(8));
  };
  return (
    <>
      <Sketch />
      <FilmCard />

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <CatalogGenres />
          <FilmsList />
          {displayedMoviesCount < movies.length && <ShowMore onClick={handleShowMore} />}
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MainPage;