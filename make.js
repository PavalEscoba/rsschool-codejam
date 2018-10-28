module.exports = function make(...arg) {
  const arr = [];
  arr.push(...arg);

  return function heplerFunc(...otherArgs) {
    if (typeof otherArgs[0] !== 'function') {
      arr.push(...otherArgs);
      return heplerFunc;
    }
    return arr.reduce(otherArgs[0]);
  };
};
