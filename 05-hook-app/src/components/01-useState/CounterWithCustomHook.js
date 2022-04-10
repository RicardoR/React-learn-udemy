import React from 'react';
import { useCounter } from '../../hooks/useCounter';

import './counter.css';

export const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter(50);

  return (
    <>
      <h1>Counter with hook: {counter}</h1>
      <hr />

      <button className="btn" onClick={() => increment(2)}>
        +2
      </button>

      <button className="btn" onClick={reset}>
        Reset
      </button>

      <button className="btn" onClick={() => decrement()}>
        -1
      </button>
    </>
  );
};
