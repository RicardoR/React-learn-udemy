import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
// import { CounterApp } from './01-useState/CounterApp';
// import { HooksApp } from './HooksApp.jsx';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import {FormWithCustomHook} from './02-useEffect/FormWithCustomHook';
import {MultipleCustomHooks} from "./03-example/MultipleCustomHooks.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
    <MultipleCustomHooks/>
    // </React.StrictMode>
);
