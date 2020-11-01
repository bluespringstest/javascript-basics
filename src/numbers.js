const add = (a, b) => {
  bob = a + b;
  return bob
};

const subtract = (a, b) => {
  bob = a - b;
  return bob
};

const multiply = (a, b) => {
  bob = a * b;
  return bob
};

const divide = (a, b) => {
  bob = a / b;
  return bob
};

const power = (a, b) => {
  bob = a ** b;
  return bob
};

const round = a => {
  bob = Math.round(a);
  return bob
};

const roundUp = a => {
  bob = Math.ceil(a);
  return bob
};

const roundDown = a => {
  bob = Math.floor(a);
  return bob
};

const absolute = a => {
  bob = Math.abs(a);
  return bob
};

const quotient = (a, b) => {
  bob = Math.floor(a / b);
  if (bob < 0) {
    bob = bob + 1
  }
  return bob
};

const remainder = (a, b) => {
  bob = a % b;
  return bob
};

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  power,
  round,
  roundUp,
  roundDown,
  absolute,
  quotient,
  remainder
};
