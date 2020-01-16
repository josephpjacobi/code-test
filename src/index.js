import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

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
      <input type="text" value={input} onChange={handleUserInput}/>
      <ReverseString string={input}/>
    </div>
  )
}

ReactDOM.render(<Display />, document.querySelector('#root'));


