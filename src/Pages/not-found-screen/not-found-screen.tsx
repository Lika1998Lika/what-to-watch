import { Link } from "react-router";

function NotFoundScreen() {
  return (
    <>
      <h1>404. Page not found</h1>
      <Link to='/'>Return to home</Link>
    </>
  );
}

export default NotFoundScreen;
