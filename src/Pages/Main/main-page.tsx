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

  return (
    <>
      <Sketch />
      <FilmCard film={films[6]} />

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <CatalogGenres />
          <FilmsList films={films} />
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