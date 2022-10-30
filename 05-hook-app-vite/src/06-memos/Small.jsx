import {memo} from 'react';

export const Small = memo(({value}) => {
    console.log('Small rendered');
    return (
        <>
            <small> {value} </small>
        </>
    );
});

