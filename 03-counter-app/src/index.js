import React from 'react';
import ReactDOM from 'react-dom';
import RamonesApp from './RamonesApp';
import './index.css';

const rootDiv = document.querySelector('#root');
const ramones = {
  band: 'Ramones',
  origin: 'Los Angeles, California',
};
ReactDOM.render( <RamonesApp {...ramones} />, rootDiv);