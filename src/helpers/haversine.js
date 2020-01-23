import zipCodeData from '../data';
import { pi, round, asin, pow, sin, cos, sqrt } from 'mathjs';

const RadiusKM = 6371;

//Uses the Haversine formula to calculate the great-circle distance between the coordiantes derived from the zip codes
//The result is converted to miles and rounded to the nearest whole number
export const Haversine = (startingZip, endingZip) => {
  const zip1 = zipCodeData[startingZip];
  const zip2 = zipCodeData[endingZip];
  //Radius of the earth in km
  

  if (zip1 && zip2) {
    //convert degrees to radians
    const radLat1 = (zip1.lat / 180) * pi;
    const radLong1 = (zip1.long / 180) * pi;
    const radLat2 = (zip2.lat / 180) * pi;
    const radLong2 = (zip2.long / 180) * pi;

    //Difference in radians
    const dLat = (radLat2 - radLat1);
    const dLong = (radLong2 - radLong1);
   

    const distanceKM = (
      RadiusKM * 2 *
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
    return `The distance between ${zip1.city}, ${zip1.state} and ${zip2.city}, ${zip2.state} is ${distanceInMiles} miles!`;
  } else {
    return '1 or more zipcodes do not exist';
  }
};

export default Haversine;