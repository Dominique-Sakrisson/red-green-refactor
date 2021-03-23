// const { default: fetch } = require('node-fetch');
// const fetch = require('node-fetch');

const { getName, copyAndPush, capitalizeAndFilter, fetchQuotes } = require('./utils.js');

test('returns the name property of the object passed as a parameter', () => {
  const spot = { name: 'spot', age: 5, weight: '20 lbs' };
  expect(getName(spot)).toEqual('spot');
  const character = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };
  expect(getName(character)).toEqual('Aang');
});


test('returns a new array that is a copy of the array passed in with a new item at the end', () => {
  const numbers = [1, 2, 3];
  expect(copyAndPush(numbers, 5)).toEqual([1, 2, 3, 5]);
  expect(numbers).toEqual([1, 2, 3]);
});

test('return an array of strings all capitolized, sans strings beginning with \'f\'  ', () => {
  const strArray = ['a', 'aa', 'f', 'ff', 'g', 'gg', 'zZf'];
  expect(capitalizeAndFilter(strArray)).toEqual(['A', 'AA', 'G', 'GG', 'ZZF']);
});

test('returns a single quote object from futurama api with properties name: text: and image:', async() => {
  const quotes = await fetchQuotes();
  expect(quotes[0]).toEqual(expect.objectContaining(
    {
      name: expect.any(String),
      text: expect.any(String),
      image: expect.any(String)
    })
  );

});
