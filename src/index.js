import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//UserInput accepts a user input which is passed to the ReverseString component
const UserInput = ({ newValue, handleInput }) => (
    <input type="text" value={newValue} onChange={handleInput} />
  )

//ReverseString accepts a string as a prop and displays it in reverse
const ReverseString = ({ string }) => {
  const stringInReverse = string.split("").reverse().join("")
  return (
    <div>
      {stringInReverse}
    </div>
  )
}

//Display component contains the input and the Reserse String Component
const Display = () => {
  const [input, setInput] = useState('');

  const handleUserInput = event => {    
    setInput(event.target.value);
  };

  return (
    <div>
      <UserInput newValue={input} handleInput={handleUserInput}/>
      <ReverseString string={input}/>
    </div>
  )
}

ReactDOM.render(<Display />, document.querySelector('#root'));


