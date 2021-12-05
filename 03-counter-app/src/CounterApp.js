import PropTypes from 'prop-types';
import { Fragment, useState } from 'react';

const CounterApp = ({ value }) => {

  const [counter, setCounter] = useState(value);
  
  // By default setCaunter retrive the value from the state
  const decrease = () => setCounter((c) => c - 1); 
  const increase = () => setCounter(counter + 1);
  const reset = () => setCounter(value);

  return (
    <Fragment>
      <h1>CounterApp</h1>
      <button id='resetBtn' onClick={reset}>Reset</button>
      <div className="counter-controls">
        <button id='decreaseBtn' onClick={decrease}>- 1</button>
        <p> {counter} </p>
        <button id='increaseBtn' onClick={increase}>+ 1</button>
      </div>
    </Fragment>
  );
}

CounterApp.propTypes = {
  value: PropTypes.number,
};

CounterApp.defaultProps = {
    value: 5,
}

export default CounterApp;