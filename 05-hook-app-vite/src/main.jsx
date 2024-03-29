import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
// import { CounterApp } from './01-useState/CounterApp';
// import { HooksApp } from './HooksApp.jsx';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import {FormWithCustomHook} from './02-useEffect/FormWithCustomHook';
// import {MultipleCustomHooks} from "./03-example/MultipleCustomHooks.jsx";
// import {FocusScreen} from "./04-useRef/FocusScreen.jsx";
// import {Layout} from "./05-useLayoutEffect/Layout.jsx";
// import {Memorize} from "./06-memos/Memorize.jsx";
// import {MemoHook} from "./06-memos/MemoHook.jsx";
// import {CallbackHook} from "./06-memos/CallbackHook.jsx";
// import {MemoTaskFather} from "./07-tarea-memo/MemoTaskFather.jsx";
// import './08-useReducer/intro-reducer.js';
// import {TodoApp} from "./08-useReducer/TodoApp.jsx";
import {MainApp} from "./09-useContext/MainApp.jsx";
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        {/*<React.StrictMode>*/}
        <MainApp/>
        {/*</React.StrictMode>*/}
    </BrowserRouter>
);
