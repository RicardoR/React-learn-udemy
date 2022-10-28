import {useState} from 'react';

export const useCounter = (initialValue = 10) => {
    const [counter, setCounter] = useState(initialValue);

    const reset = () => {
        setCounter(initialValue);
    };

    const increment = (value = 1) => {
        setCounter(counter + value);
    };

    const decrement = (value = 1) => {
        if (counter - value <= 0) {
            return;
        }
        setCounter(counter - 1);
    };
    return {
        counter,
        increment,
        decrement,
        reset,
    };
};
