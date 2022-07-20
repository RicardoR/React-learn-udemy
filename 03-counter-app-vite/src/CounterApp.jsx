 import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({value}) => {

    const [counter, updateCounter] = useState(value);

    const updateValue = (val) => {
        updateCounter(() => counter + val )
    };

    return (
        <>
            <h1> CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={() => updateValue(1)}>+1</button>
            <button onClick={() => updateValue(2)}>+2</button>
            <button onClick={() => updateValue(-1)}>-1</button>
            <button onClick={() => updateValue(-2)}>-2</button>
        </>
    );
};


CounterApp.propTypes = {
    value: PropTypes.number.isRequired
};
