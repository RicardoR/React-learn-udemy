import React from 'react';

// Functional Component
const RamonesApp = () => {
    const ramones = {
        band: 'Ramones',
        origin: 'Los Angeles, California'
    };
    const numbers = [1, 2, 3, 4, 5];
    
    return (
      // <> </> ==> <Fragment></Fragment>
      <>
        <h1>Hey Ho! Let's go!</h1>
        <p>They're forming in straight line</p>
        <p>They're going through a tight wind</p>
        <p>The kids are losing their minds</p>
        <p>The blitzkrieg bop</p>
        <p> {ramones.band} - {ramones.origin} </p>
        <p> {numbers} </p>
      </>
    );
};

export default RamonesApp;
