import React, {useState} from 'react';
import Haversine from '../../helpers/haversine';
import './distance-display.css';

export const DistanceDisplay = () => {
  const [startingZip, setStartingZip] = useState('');
  const [endingZip, setEndingZip] = useState('');
  const [message, setMessage] = useState('');

  const validateZip = (zip) => {
    return /^\d{5}?$/.test(zip);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateZip(startingZip) && validateZip(endingZip)) {
      setMessage(Haversine(startingZip, endingZip));
    } else {
      setMessage('Invalid Zipcodes');
    }
  }

  const Message = ({ message }) => (
    <span>{message}</span>
  )

  return (
    <div className="display-distance-container">
      <h2>Enter Two Zipcodes Below:</h2>
      <form onSubmit={handleSubmit} className="form">
        <label>
          Starting Zipcode:
          <input type="text" value={startingZip} onChange={(event) => setStartingZip(event.target.value)} maxLength='5'/>
        </label>
        <label>
          Ending Zipcode:
          <input type="text" value={endingZip} onChange={(event) => setEndingZip(event.target.value)} maxLength='5'/>
        </label>
        <input type="submit" value="Submit" />
      </form>
      <Message message={message} />
    </div>
  )
}

export default DistanceDisplay;