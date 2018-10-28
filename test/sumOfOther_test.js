const assert = require('assert');
const sumOfOther = require('./../sumOfOther');

describe('Sum of other', () => {
  it('sum of others', () => {
    assert.deepEqual(sumOfOther([1, 2, 3, 4, 5]), [14, 13, 12, 11, 10]);
  });

  it('sum of others 2', () => {
    assert.deepEqual(sumOfOther([2, 3, 4, 1]), [8, 7, 6, 9]);
  });

  it('sum of others negative', () => {
    assert.deepEqual(sumOfOther([1, -2, 3, -4, 5]), [2, 5, 0, 7, -2]);
  });

  it('sum of others float numbers', () => {
    assert.deepEqual(sumOfOther([1, 2.5, 4.2, 1.9]), [8.6, 7.1, 5.4, 7.7]);
  });
});
