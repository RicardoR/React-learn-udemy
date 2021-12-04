import React from 'react';
import PropTypes from 'prop-types';
// Functional Component
const RamonesApp = ({ ramones, style = 'Punk' }) => {
  const { band, origin } = ramones;

  return (
    // <> </> ==> <Fragment></Fragment>
    <>
      <h1>Hey Ho! Let's go!</h1>
      <p>They're forming in straight line</p>
      <p>They're going through a tight wind</p>
      <p>The kids are losing their minds</p>
      <p>The blitzkrieg bop</p>
      <p>
        {band} - {origin} - {style}
      </p>
    </>
  );
};

RamonesApp.propTypes = {
    ramones: PropTypes.shape({
        band: PropTypes.string.isRequired,
        origin: PropTypes.string.isRequired
    }).isRequired,
    style: PropTypes.string
}

// Second way to set default props:
RamonesApp.defaultProps = {
    style: 'Punk!'
}

export default RamonesApp;
