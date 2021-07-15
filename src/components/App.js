import React from "react";
import Form from "./Form";
import Navbar from "./Navbar";
import Wrapper from "./Wrapper";
import ThemeProvider from "../contexts/ThemeContext";
import LanguageProvider from "../contexts/LanguageContext";

const App = () => {
  return (
    <>
      <LanguageProvider>
        <ThemeProvider>
          <Wrapper>
            <Navbar />
            <Form />
          </Wrapper>
        </ThemeProvider>
      </LanguageProvider>
    </>
  );
};

export default App;
