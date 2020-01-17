import React from 'react';
import ReactDOM from 'react-dom';
import StringDisplay from './components/string-display/string-display.jsx';
import DistanceDisplay from './components/distance-display/distance-display.jsx';
import './index.css';

//MainDisplay is the hub for storing each component in the code test and the corresponding titles for each section
const MainDisplay = () => {
  return (
    <div>
      <div>
        <h1 className="center">React Questions</h1>
        <StringDisplay />
        <DistanceDisplay/>
      </div>
    </div>
  )
}

ReactDOM.render(<MainDisplay />, document.querySelector('#root'));


