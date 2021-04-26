//import '../styles/global.scss'
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
//import usePersistedState from '../utils/usePersistedState';

import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

import { Header } from '../components/Header';
import { Player } from '../components/Player';


import GlobalStyle from '../styles/global';
import { AppComponent } from '../styles/app';
//import styles from '../styles/app.module.scss';
import { PLayerContextProvider } from '../contexts/PlayerContext';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <PLayerContextProvider>
      <ThemeProvider theme={theme}>
        <AppComponent>
          <GlobalStyle />
          <main>
            <Header toggleTheme={toggleTheme}/>
            <Component {...pageProps} />
          </main>
          <Player />
        </AppComponent>
      </ThemeProvider>
    </PLayerContextProvider>
  );
}

export default MyApp
