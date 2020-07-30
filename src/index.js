import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import CadastroVideo from '.pages/cadastro/Video';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

function CadastroVideo(){
  return(
    <div>
      Pagína de cadastro de video
    </div>
  )
}


ReactDOM.render(
  <BrowserRouter>
    < Route path='/cadastro/video' component={CadastroVideo} exact />
    < Route path='/' component={App} exact />
  </BrowserRouter>,
  document.getElementById('root')
);


