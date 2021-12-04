import React from 'react';
import ReactDOM from 'react-dom';
import RamonesApp from './RamonesApp';
import CounterApp from './CounterApp';
import './index.css';

const rootDiv = document.querySelector('#root');
const counterDiv = document.querySelector('#counter');

const ramones = {
  band: 'Ramones',
  origin: 'Los Angeles, California',
};

const counterValue = 10;

ReactDOM.render(<RamonesApp ramones={ramones} />, rootDiv);
ReactDOM.render(<CounterApp value={counterValue} />, counterDiv);