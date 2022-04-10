import React from 'react';
import ReactDOM from 'react-dom';
import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
import { SimpleForm } from './components/02-useEffect/SimpleForm';
import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
import { RealExample } from './components/04-useRef/RealExample';
import { LayoutEffect } from './components/05-useLayoutEffect/LayoutEffect';
import { Memorize } from './components/06-memos/Memorize';
import { MemoHook } from './components/06-memos/MemoHook';
import { CallbackHook } from './components/06-memos/CallbackHook';
import { Padre } from './components/07-tarea-memo/Padre';
import { TodoApp } from './components/08-useReducer/TodoApp';
import { AppRouter } from './components/09-useContext/AppRouter';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(<CounterWithCustomHook />, document.getElementById('root'));
ReactDOM.render(<SimpleForm />, document.getElementById('simple-form'));
ReactDOM.render(
  <FormWithCustomHook />,
  document.getElementById('form-with-custom-hook')
);
ReactDOM.render(
  <MultipleCustomHooks />,
  document.getElementById('multiple-custom-hooks')
);
ReactDOM.render(<RealExample />, document.getElementById('focus-screen-hooks'));
ReactDOM.render(
  <LayoutEffect />,
  document.getElementById('layout-effect-hooks')
);
ReactDOM.render(<Memorize />, document.getElementById('memorize-hooks'));
ReactDOM.render(<MemoHook />, document.getElementById('memo-hooks'));
ReactDOM.render(<CallbackHook />, document.getElementById('callback-hooks'));
ReactDOM.render(<Padre />, document.getElementById('task-hooks'));

ReactDOM.render(<TodoApp />, document.getElementById('use-reducer'));
ReactDOM.render(
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>,
  document.getElementById('use-context')
);
