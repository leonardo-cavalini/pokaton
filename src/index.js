import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/pages/Home';
import CadastroVideo from './components/pages/cadastro/Video';
//import CadastroVideo from '.pages/cadastro/Video';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroCategoria from './components/pages/cadastro/categoria';

ReactDOM.render(
  <BrowserRouter>
    < Route path='/cadastro/video' component={CadastroVideo} exact />
    < Route path='/cadastro/categoria' component={CadastroCategoria} exact />  
    < Route path='/' component={Home} exact />
    < Route component={() => <div>Página 404</div>} />
  </BrowserRouter>,
  document.getElementById('root')
);


