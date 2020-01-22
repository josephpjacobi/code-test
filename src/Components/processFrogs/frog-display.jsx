import React, { useState } from 'react';
import './frog-display.css';

export const FrogDisplay = () => {
  const [numberOfDays, setNumberOfDays] = useState('');
  const [totalWeight, setTotal] = useState('');
  const [averageWeight, setAverage] = useState('')

  const calcTotal = (num) => {
     if (num <= 10) {
       let total = 0;
       for (let i = 1; i <= num; i++) {
         total += i;
       }
       const communityWeight = total * 10;
       return communityWeight;
     } else {
        const fullGrownFrogs = num - 10;
        const communityWeight = (fullGrownFrogs * 100) + 550;
        return communityWeight;
     }
  }
  
  const calcAverage = (total, frogs) => {
    const averageWeight = total / frogs
    return averageWeight;
  }

  const validateInput = (input) => {
    return /^[0-9]*$/.test(input);
  }
  
  const handleChange = (event) => {
      setNumberOfDays(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateInput(numberOfDays)) {
      setTotal(calcTotal(numberOfDays));
      setAverage(calcAverage(calcTotal(numberOfDays), numberOfDays))
    } else {
      alert('Only numbers are valid inputs');
      setNumberOfDays('');
    }
  }

  return (
    <div className="frog-data-container">
      <form onSubmit={handleSubmit} className="form">
        <label>
          Enter Number of Days:
          <input type="type" value={numberOfDays} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit"/>
      </form>
      <h4>{`Number of frogs: ${numberOfDays}`}</h4>
      <h4>{`The weight of the frog community on day ${numberOfDays} : ${totalWeight + ' grams'}`}</h4>
      <h4>{`The weight of the average frog on day ${numberOfDays}: ${averageWeight + ' grams'}`}</h4>
    </div>
  )
}


export default FrogDisplay;