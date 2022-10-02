import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { CounterwithCustomHook } from './01-useState/CounterwithCustomHook';
// import { CounterApp } from './01-useState/CounterApp';
// import { HooksApp } from './HooksApp.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterwithCustomHook />
  </React.StrictMode>
);
