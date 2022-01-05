import React from 'react'

export const Small = React.memo(({ value }) => {
    
    console.log('Small render again');

    return (
        <small> {value}</small>
    )
});
