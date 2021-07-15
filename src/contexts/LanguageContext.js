import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

const LanguageProvider = (props) => {
  const [language, setLanguage] = useState("italian");

  const changelanguage = (e) => {
    setLanguage(e.target.value);
  };
  return (
    <LanguageContext.Provider value={{ language, changelanguage }}>
      {props.children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
