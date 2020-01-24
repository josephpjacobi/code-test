import calcAverage from '../helpers/calc-average';

test('calcAverage', () => {
  const total = 30;
  const frogs = 2;
  const expected = 15;
  const value = calcAverage(total, frogs);

  expect(value).toEqual(expected);
})