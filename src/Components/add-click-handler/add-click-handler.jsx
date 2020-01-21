import React from 'react';
import './add-click-handler.css';
import handleClick from '../../helpers/add-click-handler';

export const ButtonDisplay = () => {
  return (
      <button id="btn" className="small-buffer" onClick={handleClick}>
      Want to see a magic trick?</button>
  )
}

export default ButtonDisplay;