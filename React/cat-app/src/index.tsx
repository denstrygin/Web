import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/style.css'
import App from './component/catComponent';
import { catFoods } from './fetchObject/objects';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className="mainTitle">Ты сегодня покормил кота?</div>
    <div className="mainContainer">
      <App catFood={ catFoods[0] } />
      <App catFood={ catFoods[1] } />
      <App catFood={ catFoods[2] } />
    </div>
  </React.StrictMode>
);