import calcTotal from '../helpers/calc-total';

test('calcTotal under 10 Days', () => {
  const numberOfDays = 2;
  const value = calcTotal(numberOfDays);
  const expected = 30;

  expect(value).toEqual(expected);
});

test('calcTotal over 10 Days', () => {
  const numberOfDays = 11;
  const value = calcTotal(numberOfDays);
  const expected = 650;

  expect(value).toEqual(expected);
});