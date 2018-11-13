module.exports = function sumOfOther(arr) {
  const sum = arr.reduce((acc, item) => acc + item);
  return arr.map(item => +(sum - item).toFixed(2));
};
