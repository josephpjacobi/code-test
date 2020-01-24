import zipCodeData from '../data';
import { pi, round, asin, pow, sin, cos, sqrt } from 'mathjs';

const RadiusKM = 6371;

const convertToRadians = (coordiante) => {
  return ((coordiante / 180) * pi)
}

const distanceInKM = (dLat, dLong, radLat1, radLat2) => {
  return (RadiusKM * 2 *
      asin(
        sqrt(
          pow(sin(dLat / 2), 2) +
          pow(sin(dLong / 2), 2) *
          cos(radLat1) * cos(radLat2)
        )
      ) * 100
    ) / 100;
}

//Uses the Haversine formula to calculate the great-circle distance between the coordiantes derived from the zip codes
//The result is converted to miles and rounded to the nearest whole number
export const Haversine = (startingZip, endingZip) => {
  const zip1 = zipCodeData[startingZip];
  const zip2 = zipCodeData[endingZip];
  //Radius of the earth in km
  

  if (zip1 && zip2) {
    //convert degrees to radians
    const radLat1 = convertToRadians(zip1.lat);
    const radLong1 = convertToRadians(zip1.long);
    const radLat2 = convertToRadians(zip2.lat);
    const radLong2 = convertToRadians(zip2.long);

    //Difference in radians
    const dLat = (radLat2 - radLat1);
    const dLong = (radLong2 - radLong1);
    
    const distanceKM = distanceInKM(dLat, dLong, radLat1, radLat2);

    //Converts distance from km to miles and rounds to the nearest whole number
    const distanceInMiles = round(distanceKM * .621);
    return `The distance between ${zip1.city}, ${zip1.state} and ${zip2.city}, ${zip2.state} is ${distanceInMiles} miles!`;
  } else {
    return '1 or more zipcodes do not exist';
  }
};

export default Haversine;