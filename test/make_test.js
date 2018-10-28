const assert = require('assert');
const make = require('./../make');

function sum(a, b) {
  return a + b;
}

function mult(a, b) {
  return a * b;
}

function diff(a, b) {
  return a - b;
}

describe('Make', () => {
  it('Make with addition', () => {
    const sumRes = make(34, 21)(15)(12, 22)(sum);
    assert.deepEqual(sumRes, 104);
  });

  it('Make with multiplication', () => {
    const multRes = make(34, 21)(15)(12, 22)(mult);
    assert.deepEqual(multRes, 2827440);
  });

  it('Make with subtraction', () => {
    const subRes = make(34, 21)(15)(12, 22)(diff);
    assert.deepEqual(subRes, -36);
  });
});
