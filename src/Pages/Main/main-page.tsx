import CatalogGenres from "../../Components/Catalog/catalog-genres";
import FilmCard from "../../Components/Film-Card/film-card";
import FilmsList from "../../Components/Films-List/films-list";
import Footer from "../../Components/Footer/footer";
import ShowMore from "../../Components/ShowMore/show-more";
import Sketch from "../../Components/Sketch/sketch";
import { useAppDispatch, useAppSelector } from "../../Hooks/hooks";
import { setIncreaseMoviesCount } from "../../Store/action";

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