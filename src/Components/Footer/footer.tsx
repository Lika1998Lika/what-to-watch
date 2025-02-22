function Footer() {

  const currentDate: Date = new Date();
  const currentYear: number = currentDate.getFullYear();
  return (
    <footer className="page-footer">
      <div className="logo">
        <a className="logo__link logo__link--light">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <div className="copyright">
        <p>© {currentYear} What to watch Ltd.</p>
      </div>
    </footer>
  );
}

export default Footer;