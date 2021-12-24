import React from 'react';
import ReactDOM from 'react-dom';
import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
import { SimpleForm } from './components/02-useEffect/SimpleForm';

ReactDOM.render(<CounterWithCustomHook />, document.getElementById('root'));
ReactDOM.render(<SimpleForm />, document.getElementById('simple-form'));