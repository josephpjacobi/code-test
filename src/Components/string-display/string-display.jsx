import React, { useState } from 'react';
import './string-display.css';

//UserInput accepts a user input which is passed to the ReverseString component
const UserInput = ({ newValue, handleInput }) => {
  return (
    <div className="container">
      <h3>Enter some text below:</h3>
      <input type="text" value={newValue} onChange={handleInput} maxLength='50' />
    </div>
  )
}

//ReverseString accepts a string as a prop and displays it in reverse
const ReverseString = ({ string }) => {
  const stringInReverse = string.split("").reverse().join("")
  return (
    <div className="container">
      <h3>Your text in reverse:</h3>
      {stringInReverse}
    </div>
  )
}

//Display component contains the input and the Reserse String Component
const StringDisplay = () => {
  const [input, setInput] = useState('');

  const handleUserInput = event => {
    setInput(event.target.value);
  };

  return (
    <div className="display">
      <UserInput newValue={input} handleInput={handleUserInput} />
      <ReverseString string={input} />
    </div>
  )
}


export default StringDisplay;