import { NavLink, Outlet, useLocation } from "react-router-dom";

function Tabs() {
  const { pathname } = useLocation();

  const isActive = (str: string) => {
    if (pathname.includes(str)) {
      return 'film-nav__item film-nav__item--active';
    }
    return 'film-nav__item';
  };

  return (
    <>
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={isActive('overview')}>
            <NavLink
              to="overview"
              className="film-nav__link">
              Overview
            </NavLink>
          </li>
          <li className={isActive('details')}>
            <NavLink
              to="details"
              className="film-nav__link">
              Details
            </NavLink>
          </li>
          <li className={isActive('reviews')}>
            <NavLink
              to="reviews"
              className="film-nav__link">
              Reviews
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Tabs;