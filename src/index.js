import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // импортируем BrowserRouter
import App_main from './App';
import './index.css';

// теперь обернём компонент App в BrowserRouter
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> 
      <App_main />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
); 