import React from 'react';
import ReactDOM from 'react-dom';

import StringDisplay from '../src/Components/string-display/string-display.js';
import './index.css';

//MainDisplay is the hub for storing each component in the code test and the corresponding titles for each section
const MainDisplay = () => {
  return (
    <div>
      <div className="react-questions">
        <h1>React Questions</h1>
        <StringDisplay />
      </div>
    </div>
  )
}


ReactDOM.render(<MainDisplay />, document.querySelector('#root'));


