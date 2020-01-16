import React from 'react';
import ReactDOM from 'react-dom';
import { pi, round, asin, pow, sin, cos, sqrt } from 'mathjs';

import StringDisplay from '../src/Components/string-display/string-display.js';
import './index.css';

//MainDisplay is the hub for storing each component in the code test and the corresponding titles for each section
const MainDisplay = () => {
  return (
    <div>
      <div className="react-questions">
        <h1>React Questions</h1>
        <StringDisplay />
        <Haversine />
      </div>
    </div>
  )
}

//Uses the Haversine formula to calculate the great-circle distance between the coordiantes derived from the zip codes
//The result is converted to miles and rounded to the nearest whole number
const Haversine = () => {
  //coordinates of hometown in NY
  const zip1 = {
    lat: 40.90,
    long: 73.56
  }

  //coordiantes of home in Boston
  const zip2 = {
    lat: 42.32,
    long: 71.08
  }

  //convert degrees to radians
  const radLat1 = (zip1.lat / 180) * pi;
  const radLong1 = (zip1.long / 180) * pi;
  const radLat2 = (zip2.lat / 180) * pi;
  const radLong2 = (zip2.long / 180) * pi;

  //Diffeence in radians
  const dLat = (radLat2 - radLat1);
  const dLong = (radLong2 - radLong1);
  //Radius of the earth in km
  const radiusKM = 6371;

  const distanceKM = (
    radiusKM * 2 *
    asin(
      sqrt(
        pow(sin(dLat / 2), 2) +
        pow(sin(dLong / 2), 2) *
        cos(radLat1) * cos(radLat2)
      )
    ) * 100
  ) / 100;

//Converts distance from km to miles and rounds to the nearest whole number
  const distanceInMiles = round(distanceKM * .621);

  return (
    <div>
      <h1>Distance between those 2 zip codes:</h1>
      {`${distanceInMiles} Miles!`}
    </div>
  ) 
};


ReactDOM.render(<MainDisplay />, document.querySelector('#root'));


