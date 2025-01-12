import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { AppRoute, AuthorizationStatus } from "../../const";
import { logoutAction } from "../../store/api-actions";


function Header() {

  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const dispatch = useAppDispatch();

  const authStatus = authorizationStatus === AuthorizationStatus.Auth ? 'Sign out' : 'Sign in';
  console.log(authStatus)

  return (
    <header className="page-header film-card__head">
      <div className="logo">
        <Link className="logo__link" to={AppRoute.Main}>
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <Link to={AppRoute.MyList}>
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </Link>
          </div>
        </li>
        <li className="user-block__item">
          <Link to={AppRoute.Main} className="user-block__link"
            onClick={(evt) => {
              evt.preventDefault();
              dispatch(logoutAction());
            }}>
            {authStatus}
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;