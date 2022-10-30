import React from "react";

export const ShowIncrement = React.memo(({increment}) => {
    console.log('ShowIncrement Rendered!')
    return (
        <button
            className='btn btn-primary'
            onClick={() => {
                increment()
            }}>
            Increment
        </button>
    );
});

