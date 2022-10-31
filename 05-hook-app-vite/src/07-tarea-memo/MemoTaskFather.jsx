import {useCallback, useState} from 'react';
import {MemoTaskSon} from "./MemoTaskSon";

export const MemoTaskFather = () => {

    const numbers = [2, 4, 6, 8, 10];
    const [value, setValue] = useState(0);

    const incrementFn = useCallback((incrementValue = 1) => {
        setValue(oldValue => oldValue + incrementValue)
    }, []);

    return (
        <div>
            <h1>Father</h1>
            <p> Total: {value} </p>

            <hr/>

            {
                numbers.map(n => (
                    <MemoTaskSon
                        key={n}
                        number={n}
                        increment={incrementFn}
                    />
                ))
            }
        </div>
    )
}
