const getName = require('./utils.js');

test('returns the name property of the object passed as a parameter', () => {
  const spot = { name: 'spot', age: 5, weight: '20 lbs' };
  expect(getName(spot)).toBe('spot');

//   const character = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };
//   expect(getName(character)).toBe('Aang');
});
