import {useMemo, useState} from "react";
import {useCounter} from "../hooks";

const heavyStuff = (iterationNumber = 100) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log('iteration')
    }
    return `${iterationNumber} iterations made`;
}

export const MemoHook = () => {
    const {counter, increment} = useCounter(400);
    const [show, setShow] = useState(true);

    const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

    return (
        <>
            <h1> Counter: <small>{counter}</small></h1>

            <br/>

            <h4>{memorizedValue}</h4>

            <button
                onClick={() => increment(1)}
                className='btn btn-primary'>
                +1
            </button>

            <button
                onClick={() => setShow(!show)}
                className='btn btn-outline-primary'>
                show/hide {JSON.stringify(show)}
            </button>
        </>
    );
};

