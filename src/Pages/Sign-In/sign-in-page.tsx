import { FormEvent, useRef } from "react";
// import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/hooks";
import { AuthData } from "../../types/auth-data";
import { loginAction } from "../../store/api-actions";
import Sketch from "../../components/sketch/sketch";
import Header from "../../components/header/header";
// import { AppRoute } from "../../const";
import Footer from "../../components/footer/footer";


function SignInPage() {

  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();
  // const navigate = useNavigate();

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()

    if (emailRef.current !== null && passwordRef.current !== null) {
      onSubmit({
        email: emailRef.current.value,
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
                {/* //autoComplete="username" autoComplete="current-password" */}
                <input className="sign-in__input"
                  ref={emailRef}
                  type="email"
                  placeholder="Email address"
                  name="user-email"
                  id="user-email" />
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input
                  className="sign-in__input"
                  ref={passwordRef}
                  type="password"
                  placeholder="Password"
                  name="user-password"
                  id="user-password"
                />
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button
                // onSubmit={() => navigate(AppRoute.Main)}
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