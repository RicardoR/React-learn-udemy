 import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({value}) => {

    const [counter, setCounter] = useState(value);

    const updateCounter = (val) => {
        return  setCounter(counter + val )
        // return setCounter((c) => c + val )
    };

    const resetCounter = () => setCounter(value);

    return (
        <>
            <h1> CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={() => updateCounter(1)}>+1</button>
            <button onClick={() => updateCounter(2)}>+2</button>
            <button onClick={() => updateCounter(-1)}>-1</button>
            <button onClick={() => updateCounter(-2)}>-2</button>
            <button onClick={resetCounter}>Reset</button>
        </>
    );
};


CounterApp.propTypes = {
    value: PropTypes.number.isRequired
};