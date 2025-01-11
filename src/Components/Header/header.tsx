import { Link } from "react-router-dom";
import { AppRoute, AuthorizationStatus } from "../../const";
import { useAppDispatch, useAppSelector } from "../../Hooks/hooks";
import { loginAction } from "../../Store/api-actions";

function Header() {

  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const dispatch = useAppDispatch();

  const authStatus = authorizationStatus === AuthorizationStatus.Auth ? 'Sign out' : 'Sign in'

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
          <Link to={AppRoute.SignIn} className="user-block__link"
            onClick={(evt) => {
              evt.preventDefault();
              dispatch(loginAction({ email: 'lika@mail.ru', password: '1234' }));
            }}>
            {authStatus}
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;