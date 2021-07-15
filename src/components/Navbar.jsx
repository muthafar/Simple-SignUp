import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { ThemeContext } from "../contexts/ThemeContext";

const Navbar = () => {
  const { isDark, changeTheme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const word = {
    english: {
      search: "Search...",
    },
    italian: {
      search: " Ricerca...",
    },
    frensh: {
      search: " Rechercher..",
    },
  };

  const { search } = word[language];

  return (
    <nav
      className={`navbar navbar-expand ${
        isDark ? "navbar-light bg-light" : "navbar-dark bg-dark"
      }`}
    >
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav d-flex align-items-center me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link mb-1 active " aria-current="page" href="#">
                App title
              </a>
            </li>
            <li className="nav-item">
              <div className="form-check form-switch ms-3">
                <input
                  onClick={changeTheme}
                  className="form-check-input "
                  type="checkbox"
                />
              </div>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2 rounded-pill"
              type="search"
              placeholder={search}
              aria-label="Search"
            />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
