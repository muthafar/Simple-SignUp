import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Wrapper = ({ children }) => {
  const { isDark } = useContext(ThemeContext);

  return (
    <div
      style={{ backgroundColor: isDark ? "white" : "gray", height: "100vh" }}
    >
      {children}
    </div>
  );
};

export default Wrapper;
