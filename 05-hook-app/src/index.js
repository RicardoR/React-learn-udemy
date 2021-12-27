import React from 'react';
import ReactDOM from 'react-dom';
import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
import { SimpleForm } from './components/02-useEffect/SimpleForm';
import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
import { RealExample } from './components/04-useRef/RealExample';

ReactDOM.render(<CounterWithCustomHook />, document.getElementById('root'));
ReactDOM.render(<SimpleForm />, document.getElementById('simple-form'));
ReactDOM.render(<FormWithCustomHook />, document.getElementById('form-with-custom-hook'));
ReactDOM.render(
  <MultipleCustomHooks />,
  document.getElementById('multiple-custom-hooks')
);

ReactDOM.render(<RealExample />, document.getElementById('focus-screen-hooks'));