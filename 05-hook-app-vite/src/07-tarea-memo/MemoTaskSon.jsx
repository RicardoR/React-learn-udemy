import {memo} from "react";

export const MemoTaskSon = memo(({number, increment}) => {

    console.log('Rendered again :(  ');

    return (
        <button
            className="btn btn-primary mr-3"
            onClick={() => increment(number)}
        >
            {number}
        </button>
    )
});
