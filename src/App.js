import React from "react";
import { ThemeProvider } from "styled-components";

import usePersistedState from "./utils/usePersistedState";

import Global from "./styles/global";
import Header from "./components/Header";

import dark from "./styles/themes/dark";
import light from "./styles/themes/light";

function App() {
  const [theme, setTheme] = usePersistedState("theme", dark);

  function toggleTheme() {
    setTheme(theme.title === "dark" ? light : dark);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header toggleTheme={toggleTheme} />
        <Global />
      </div>
    </ThemeProvider>
  );
}

export default App;
