import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import MainPage from './Components/index';
import { Router } from './Router';
import GlobalStyle from './styles/global';
import darkTheme from './styles/themes/dark';
import lightTheme from './styles/themes/light';

function App() {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? darkTheme : lightTheme);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <MainPage toggleTheme={toggleTheme} />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
