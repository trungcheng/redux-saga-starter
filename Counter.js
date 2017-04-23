/*eslint-disable no-unused-vars */
import React, { Component, PropTypes } from 'react';

const Counter = ({ value, onIncrement, onDecrement, onX2 }) =>
      <div>
        <button onClick={onIncrement}>
          Increment
        </button>
        {' '}
        <button onClick={onDecrement}>
          Decrement
        </button>
        {' '}
        <button onClick={onX2}>
          x2
        </button>
        <hr />
        <div>
          Clicked: {value} times
        </div>
      </div>

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onX2: PropTypes.func.isRequired
}

export default Counter;
