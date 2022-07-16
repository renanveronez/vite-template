import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';

import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import MainPage from './Components/index';

import DarkEffect from './Components/index'
import darkTheme from './styles/themes/dark';
import lightTheme from './styles/themes/light';
import usePersistedState from './Utils/usePersistedState';


function App() {
  const [theme, setTheme] = usePersistedState("theme", lightTheme);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? darkTheme : lightTheme);
  }


  return (
    <ThemeProvider theme={theme}>
      <MainPage toggleTheme={toggleTheme} />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
