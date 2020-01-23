// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import FrogDisplay from './components/frog-display/frog-display.jsx'
import TableDisplay from './components/append-row/append-row.jsx';
import ButtonDisplay from './components/add-click-handler/add-click-handler.jsx';
import ArrayDisplay from './components/array-filter/array-filter.jsx';
import StringDisplay from './components/string-display/string-display.jsx';
import DistanceDisplay from './components/distance-display/distance-display.jsx';
import './index.css';

//MainDisplay is the hub for storing each component in the code test and the corresponding titles for each section
const MainDisplay = () => {
  return (
    <div className="main-container">
      <div className="buffer center-stack">
        <h1 className="center-stack">CS Questions</h1>
        <FrogDisplay />
      </div>
      <div className="buffer center-stack">
        <h1 className="center-stack">JavaScript Questions</h1>
        <TableDisplay />
        <ButtonDisplay />
        <ArrayDisplay />
      </div>
      <div className="buffer center-stack">
        <h1 className="center-stack">React Questions</h1>
        <StringDisplay />
        <DistanceDisplay/>
      </div>
    </div>
  )
}

ReactDOM.render(<MainDisplay />, document.querySelector('#root'));


