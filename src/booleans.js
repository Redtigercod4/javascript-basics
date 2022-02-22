function negate(a) {
  if (a != false) {
    return false;
  } else {
    return true;
  }
};

function both(a, b) {
  if ( a && b == true) {
    return true;
  } else {
    return false;
  }
};

function either(a, b) {
  if ( a || b == true) {
    return true;
  } else {
    return false;
  }
};

function none(a, b) {
  if ( a || b == true) {
    return false;
  } else {
    return true;
  }
};

function one(a, b) {
};

function truthiness(a) {
  if (a) {
    return true;
  } else {
    return false;
  }
};

function isEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
};

function isGreaterThan(a, b) {
  if (a > b) {
    return true;
  } else {
    return false;
  }
};

function isLessThanOrEqualTo(a, b) {
  if (a <= b) {
    return true;
  } else {
    return false;
  }
};

function isOdd(a) {
  if (a % 2 === 1) {
    return true;
  } else {
    return false;
  }
};

function isEven(a) {
  if (a % 2 == 0) {
    return true;
  } else {
    return false;
  }
};

function isSquare(a) {
  if (Math.sqrt(a) % 1 === 0) {
    return true;
  } else {
    return false;
  }
};

function startsWith(char, string) {
  if (string.startsWith(char)) {
    return true;
  } else {
    return false;
  }
};

function containsVowels(string) {
  let regExp = /[aeiou]/gi;
  if (regExp.test(string)) {
    return true;
  } else {
    return false;
  }
};

function isLowerCase(string) {
  if (string == string.toLowerCase()){
    return true;
  } else {
    return false;
  }
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
