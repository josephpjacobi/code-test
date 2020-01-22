import React, { useState } from 'react';
import './frog-display.css';

export const FrogDisplay = () => {
  const [numberOfDays, setNumberOfDays] = useState('2');

  return (
    <div className="frog-data-container">
      <h2>Enter Number of Days Below:</h2>
      <input type="text" pattern="[0-9]*" />
      <h4>The weight of the frog community on day {numberOfDays} : </h4>
      <h4>The weight of the average frog on day {numberOfDays}:</h4>
    </div>
  )
}


export default FrogDisplay;