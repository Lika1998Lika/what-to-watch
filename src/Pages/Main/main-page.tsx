import CatalogGenres from "../../Components/Catalog/catalog-genres";
import FilmCard from "../../Components/Film-Card/film-card";
import FilmsList from "../../Components/Films-List/films-list";
import Footer from "../../Components/Footer/footer";
import Sketch from "../../Components/Sketch/sketch";
import { MovieType } from "../../Types/film-type";

type MainPageProps = {
  films: MovieType[];
};

function MainPage(props: MainPageProps) {

  const { films } = props;
  const activeFilm = films[0];

  if (!activeFilm) return null
  return (
    <>
      <Sketch />
      <FilmCard film={activeFilm} />

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <CatalogGenres />
          <FilmsList />
          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MainPage;