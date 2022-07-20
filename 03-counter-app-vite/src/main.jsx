import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelloWorldApp } from './HelloWorldApp';
import { FirstApp } from "./FirstApp";
import "./styles.css";
import { CounterApp } from "./CounterApp";

const developer = {
    name: 'Ricardo',
    surname: 'Rodríguez',
    age: 41
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HelloWorldApp/>
        <FirstApp {...developer} />
        <CounterApp value={4}/>
    </React.StrictMode>
);
