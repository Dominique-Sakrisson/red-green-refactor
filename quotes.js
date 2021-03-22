const fetch = require('node-fetch');

class Quotes {

  static fetchQuotes() {
    return fetch('https://futuramaapi.herokuapp.com/api/characters/Fry/1').then(res => res.data);
    
  }
}

module.exports = { Quotes };
