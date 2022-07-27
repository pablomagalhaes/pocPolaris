import React from 'react';
import {Routes} from './routes'
import {
  BrowserRouter,

} from "react-router-dom";
import GlobalStyles from './styles/global';
import {AppProvider} from './hooks/context';

const App = () => {
  return (
    <>
      <AppProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
        <GlobalStyles/>
      </AppProvider>
    </>
  )
}

export default App;