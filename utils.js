const fetch = require('node-fetch');

const getName = ({ name }) => {return name;};

const copyAndPush = (arr, newInt) => ([...arr, newInt]);

const capitalizeAndFilter = (arr) => {
  const filtered = arr.filter(itemStr => itemStr.substring(0, 1).toUpperCase() !== 'F');
  return filtered.map(str => str.toUpperCase());
};

const fetchQuotes = async() => {
  try {
    const res = await fetch('https://futuramaapi.herokuapp.com/api/characters/Fry/1');
    const body = await res.json();
    return body.map(({ character, quote, image }) => ({ name: character, text: quote, image }));
  } 
  catch(error) {
    //had this in there for default data incase of api being down 
    return {
      name: 'Fry',
      text: 'The underprivileged get all the breaks.',
      image: 'https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554904133/fry.png'
    };
  }
};
module.exports = { getName, copyAndPush, capitalizeAndFilter, fetchQuotes };
