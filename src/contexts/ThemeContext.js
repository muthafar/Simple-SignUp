import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = (props) => {
  const [isDark, setIsDark] = useState(false);
  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
