import { useState } from 'react';
import { Outlet } from 'react-router-dom'
import DarkEffect from '../Components/index'
import darkTheme from '../styles/themes/dark';
import lightTheme from '../styles/themes/light';


export function DefaultLayout(toggleTheme: any) {
  const [theme, setTheme] = useState(lightTheme);


  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? darkTheme : lightTheme);
  }

  return (
    <div>
      <DarkEffect toggleTheme={toggleTheme} />
      <Outlet />
      {/* Outlet eh um recurso do React DOM, que representa um espaco onde deve ser inserido o conteudo */}
    </div>
  )
}
