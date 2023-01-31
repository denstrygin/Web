import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.css'
import App from './component/App';
import { catFoods } from './objects';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className="mainTitle">Ты сегодня покормил кота?</div>
    <div className="table">
      <App catFood={ catFoods[0] } />
      <App catFood={ catFoods[1] } />
      <App catFood={ catFoods[2] } />
    </div>
  </React.StrictMode>
);
