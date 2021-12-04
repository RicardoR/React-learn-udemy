import React from 'react';

// Functional Component
const RamonesApp = (ramones) => {

    const { band, origin } = ramones;

    return (
      // <> </> ==> <Fragment></Fragment>
      <>
        <h1>Hey Ho! Let's go!</h1>
        <p>They're forming in straight line</p>
        <p>They're going through a tight wind</p>
        <p>The kids are losing their minds</p>
        <p>The blitzkrieg bop</p>
        <p> {band} - {origin} </p>
      </>
    );
};

export default RamonesApp;
