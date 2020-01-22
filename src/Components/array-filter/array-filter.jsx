import React from 'react';
import './array-filter.css';

export const ArrayDisplay = () => {
  const arrayToProcess = [1, 2, 'a', 3, 'b', 'c', true, 4, false, '6'];
  const processArray = () => {   
    for (let i = arrayToProcess.length - 1; i >= 0; i--) {
      if (typeof arrayToProcess[i] !== 'number') {
        arrayToProcess.splice(i, 1);
      }
    }
    alert(`After removing all non-numeric characters, your array is: ${arrayToProcess}`);
    return arrayToProcess;
  }

  return (
    <div>
      {arrayToProcess}
      <button onClick={processArray}>Remove Non-numbers</button>
    </div>
  )
}

export default ArrayDisplay;