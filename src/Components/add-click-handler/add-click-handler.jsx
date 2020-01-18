import React from 'react';
import './add-click-handler.css';

export const ButtonDisplay = () => {

  //this will be exported to the helper function 
  const handleClick = () => {
    console.log('hey, it worked!');
  }

  return (
    <button className="small-buffer" onClick={handleClick}>
      Click Me!
    </button>
  )
}

export default ButtonDisplay;