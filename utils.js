const getName = ({ name }) => {return name;};

const copyAndPush = (arr, newInt) => {
  const newArray =  [...arr];
  newArray.push(newInt);
  return newArray;
};	

module.exports = { getName, copyAndPush };
