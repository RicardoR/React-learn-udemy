import React, { useMemo, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { heavyProcess } from '../../helpers/heavyProcess';

export const MemoHook = () => {
    const { counter, increment } = useCounter(5000);
    const [ show, setShow ] = useState(true);

    const memoProcess = useMemo(() => heavyProcess(counter), [counter]);

    return (
      <>
        <h1>MemoHook</h1>
        <h3>
          Counter: <small>{counter}</small>
        </h3>
        <br />
        <p>{memoProcess}</p>
        <button className="btn btn-primary" onClick={() => increment(1)}>
          +1
        </button>
        <button
          className="btn btn-outline-primary ms-3"
          onClick={() => setShow(!show)}
        >
          Show/Hide {JSON.stringify(show)}
        </button>
      </>
    );
};
