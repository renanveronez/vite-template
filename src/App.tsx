import GlobalStyle from './styles/global';

import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';

import { ThemeProvider } from 'styled-components';
import DarkEffect from './Components/DarkEffect';
import lightTheme from './styles/themes/light';
import darkTheme from './styles/themes/dark';

import usePersistedState from './utils/usePersistedDate';

function App() {
  const [theme, setTheme] = usePersistedState("theme", lightTheme);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? darkTheme : lightTheme);
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <DarkEffect toggleTheme={toggleTheme} />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
