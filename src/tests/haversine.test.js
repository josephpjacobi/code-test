import {convertToRadians, distanceInKM, Haversine} from '../helpers/haversine';

test('convertToRadians', () => {
  const latValue = convertToRadians(40.90).toFixed(4);
  const longValue = convertToRadians(73.56).toFixed(4);

  expect(latValue).toEqual('0.7138')
  expect(longValue).toEqual('1.2839')
});

test('distanceInKM', () => {
  const dLat = 0.007679448708775127;
  const dLong = 0.008726646259971771;
  const radLat1 = 0.7138396640656808;
  const radLat2 = 0.7215191127744559;
  const value = distanceInKM(dLat, dLong, radLat1, radLat2);

  expect(value).toEqual(64.40435709509778);
});

test('Haversine', () => {
  const zip1 = '11709';
  const zip1City = 'BAYVILLE';
  const zip1State = 'NY';
  const zip2 = '06401';
  const zip2City = 'ANSONIA';
  const zip2State = 'CT';
  const roundedMiles = 40;

  const value = Haversine(zip1, zip2);

  expect(value).toEqual(`The distance between ${zip1City}, ${zip1State} and ${zip2City}, ${zip2State} is ${roundedMiles} miles!`);
});