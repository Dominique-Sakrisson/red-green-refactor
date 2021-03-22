const getName = ({ name }) => {return name;};

const copyAndPush = (arr, newInt) => ([...arr, newInt]);

const capitalizeAndFilter = (arr) => {
  const filtered = arr.filter(itemStr => itemStr.substring(0, 1).toUpperCase() !== 'F');
  const result = filtered.map(str => str.toUpperCase());
  return result;
};

module.exports = { getName, copyAndPush, capitalizeAndFilter };
