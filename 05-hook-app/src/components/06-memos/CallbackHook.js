import React, { useState, useCallback } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [count, setCount] = useState(10);

    // Cada vez que cambia el estado el componente se renderiza
    // y al hacerlo esta función se genera de nuevo en un nuevo espacio en la memoria
    // con lo que el React.memo de ShowIncrement no funciona.
    // Por ello hay que usar el useCallback pasandole la función en el array
    // const increment = () => {
    //     setCount(count + 1);
    // }

    const increment = useCallback((value) => {
            setCount(c => c + value);
    }, [setCount])


    return (
      <div>
        <h1>useCallback hook: {count}</h1>
        <p>
          Cada vez que cambia el estado el componente se renderiza y al hacerlo
          la función comentada
          <code> const increment = () =&gt; setCount(count + 1);</code> se genera
          de nuevo en un nuevo espacio en la memoria con lo que el React.memo de
          ShowIncrement no funciona. Por ello hay que usar el useCallback
          pasandole la función en el array
        </p>
        <hr />
        <ShowIncrement increment={increment} />
      </div>
    );
}
