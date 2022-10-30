import {useCounter} from "../hooks";
import {Small} from "./Small";
import {useState} from "react";

export const Memorize = () => {
    const {counter, increment} = useCounter(1);
    const [show, setShow] = useState(true);
    return (
        <>
            <h1> Counter: <Small value={counter}></Small></h1>
            <br/>
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

