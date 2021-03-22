const getName = ({ name }) => {return name;};

const copyAndPush = (arr, newInt) => {
  const newArray =  [...arr];
  newArray.push(5);
  return newArray;
};	

module.exports = { getName, copyAndPush };
