import {useCallback, useState} from "react";
import {ShowIncrement} from "./ShowIncrement";

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const incrementFn = useCallback((incrementValue = 1) => {
        setCounter((value) => value + incrementValue)
    }, []);

    return (
        <>
            <h1> UseCallback hook: {counter}</h1>
            <hr/>
            <ShowIncrement increment={incrementFn}/>
        </>
    );
};

