import React, { useState } from 'react';
import './frog-display.css';
import calcTotal from '../../helpers/calc-total';
import calcAverage from '../../helpers/calc-average';

export const FrogDisplay = () => {
  const [numberOfDays, setNumberOfDays] = useState('');
  const [totalWeight, setTotal] = useState('');
  const [averageWeight, setAverage] = useState('')

  const validateInput = (input) => {
    return /^[0-9]*$/.test(input);
  }
  
  const handleChange = (event) => {
    const userInput = event.target.value
    setNumberOfDays(userInput);
    if (validateInput(userInput)) {
      setTotal(calcTotal(userInput));
      setAverage(calcAverage(calcTotal(userInput), userInput));
    } else {
      alert('Only numbers are valid inputs');
      setNumberOfDays('');
    }
  }

  return (
    <div className="frog-data-container">
        <label>
          Enter Number of Days:
          <input type="type" value={numberOfDays} onChange={handleChange} />
        </label>
      <h4>{`Number of frogs: ${numberOfDays}`}</h4>
      <h4>{`The weight of the frog community on day ${numberOfDays} : ${totalWeight + ' grams'}`}</h4>
      <h4>{`The weight of the average frog on day ${numberOfDays}: ${averageWeight + ' grams'}`}</h4>
    </div>
  )
}


export default FrogDisplay;