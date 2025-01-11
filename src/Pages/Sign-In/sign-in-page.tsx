import { useNavigate } from "react-router-dom";
import Sketch from "../../Components/Sketch/sketch";
import Footer from "../../Components/Footer/footer";
import { AppRoute } from "../../const";
import { FormEvent, useRef } from "react";
import { useAppDispatch } from "../../Hooks/hooks";
import { AuthData } from "../../Types/auth-data";
import { loginAction } from "../../Store/api-actions";
import Header from "../../Components/Header/header";

function SignInPage() {

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()

    if (loginRef.current !== null && passwordRef.current !== null) {
      onSubmit({
        email: loginRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };

  return (
    <>
      <Sketch />

      <div className="user-page">
        <Header />
        <div className="sign-in user-page__content">
          <form action="#" className="sign-in__form" onSubmit={handleSubmit}>
            <div className="sign-in__fields">
              <div className="sign-in__field">
                //autoComplete="username" autoComplete="current-password"
                <input className="sign-in__input" ref={loginRef} type="email" placeholder="Email address" name="user-email" id="user-email" />
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input className="sign-in__input" ref={passwordRef} type="password" placeholder="Password" name="user-password" id="user-password"
                />
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button
                onSubmit={() => navigate(AppRoute.Film)}
                className="sign-in__btn"
                type="submit">
                Sign in
              </button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default SignInPage;