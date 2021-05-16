import React from 'react';
import { AppContext } from './reducerContext';

function CounterApp() {
  const { num, increaseNum } = React.useContext(AppContext);

 
  return (
    <div>
      {num}
      <button onClick={increaseNum}>Add Number</button>
    </div>
  );
}

export default CounterApp;
