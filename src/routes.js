import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Jogo from './pages/Jogo/Jogo';
import PaginaInicial from './pages/PaginaInicial/PaginaInicial';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={PaginaInicial} path='/' exact />
      <Route component={Jogo} path='/jogo' exact />
    </BrowserRouter>
  );
};

export default Routes;
