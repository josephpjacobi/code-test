import React from 'react';
import './array-filter.css';

export const ArrayDisplay = () => {
  const array = [1, 2, 3, 'a', 'b', 'c'];
  return (
    <div>
      {array}
    </div>
  )
}

export default ArrayDisplay;