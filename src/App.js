import React from 'react';
import {Routes} from './routes'
import {
  BrowserRouter,

} from "react-router-dom";
import GlobalStyles from './styles/global';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyles/>
    </>
  )
}

export default App;