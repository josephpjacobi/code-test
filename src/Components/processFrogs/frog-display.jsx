import React, { useState } from 'react';
import './frog-display.css';

export const FrogDisplay = () => {
  const [numberOfDays, setNumberOfDays] = useState('2');
  const [totalWeight, calcTotal] = useState('');
  const [averageWeight, calcAverage] = useState('')

  const calculateTotalWeight = (num) => {
     if (num <= 10) {
       let total = 0;
       for (let i = 1; i <= num; i++) {
         total += i;
       }
       const communityWeight = total * 10;
       console.log(communityWeight);
       return communityWeight;
     } else {
        const fullGrownFrogs = num - 10;
        const communityWeight = (fullGrownFrogs * 100) + 550;
        console.log(communityWeight);
        
        return communityWeight;
     }
  } 
      
  
  const handleChange = (event) => {
    setNumberOfDays(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    calculateTotalWeight(numberOfDays);
    alert('done!');
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
      <h4>The weight of the frog community on day {numberOfDays} : </h4>
      <h4>The weight of the average frog on day {numberOfDays}:</h4>
    </div>
  )
}


export default FrogDisplay;