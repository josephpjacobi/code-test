import React from 'react';
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
  const string = 'Hello World';
  return (
    <div>
      <ReverseString string={string}/>
    </div>
  )
}

ReactDOM.render(<Display />, document.querySelector('#root'));


