import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import Ticker from './component/ticker';
import Table from './component/table';
import { trickerObject } from './fetchObject';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Ticker trickerObject={ trickerObject }/>
    <Table />
  </React.StrictMode>
);
