import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { ThemeContext } from "../contexts/ThemeContext";

const Form = () => {
  const { isDark } = useContext(ThemeContext);
  const { language, changelanguage } = useContext(LanguageContext);

  const word = {
    english: {
      email: "Email address",
      password: "Password",
      confirm: "Confirm Password",
      remember: "Remember me",
      submit: "submit",
      search: "Search..",
      select: "Select a language",
    },
    italian: {
      email: "Indirizzo e-mail",
      password: "Parola d'ordine",
      confirm: "  Conferma password",
      remember: " Ricordati di me",
      submit: " Invia",
      search: " ricerca...",
      select: "Seleziona una lingua",
    },
    frensh: {
      email: "  Adresse e-mail",
      password: "Mot de passe",
      confirm: " Confirmez le mot de passe",
      remember: " Souviens-toi de moi",
      submit: "   nous faire parvenir",
      search: " rechercher...",
      select: "Sélectionnez une langue",
    },
  };

  const { email, password, confirm, remember, submit, select } = word[language];

  return (
    <div className="container mt-3 ">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4 col-sm-12">
          <form className={`border px-5 py-5 ${isDark ? "" : "bg-secondary"}`}>
            <div className="rounded-pill text-center mb-5 ">
              <i className="fas fa-lock fa-lg"></i>
            </div>{" "}
            <span>{select}</span>
            <select
              className="form-select form-select-sm mb-3 mt-2 "
              value={language}
              onChange={changelanguage}
            >
              <option value="english">English</option>
              <option value="frensh">Frensh</option>
              <option value="italian">Italian</option>
            </select>
            <div className="mb-3">
              <label className="form-label">{email}</label>
              <input type="email" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">{password}</label>
              <input type="password" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">{confirm}</label>
              <input type="password" className="form-control" />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" />
              <label className="form-check-label">{remember}</label>
            </div>
            <button
              type="submit"
              className={`btn btn-lg ${
                isDark ? "btn-primary" : "btn-dark"
              } mt-3`}
            >
              {submit}
            </button>
          </form>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

export default Form;
