const getNthElement = (index, array) => {
  let arr = array[index]
  return arr;
};

const arrayToCSVString = array => {
  let csv = array.toString()
  return csv;
};

const csvStringToArray = string => {
  let str = string.split(',')
  return str;
};

const addToArray = (element, array) => {
// your code here
}

const addToArray2 = (element, array) => {
// your code here
};

const removeNthElement = (index, array) => {
  array.splice(index, 1)
}; 

const numbersToStrings = numbers => {
  let ele = numbers.join().split(',')
  return ele;
};

const uppercaseWordsInArray = strings => {
 const upper = strings.map(elemetn => {
   return elemetn.toUpperCase();
 })
 return upper;
};

const reverseWordsInArray = strings => {
  const revArray = []
  const length = strings.length - 1;
  for(let i = length; i >= 0; i--) {
    revArray.push(strings[i]);
  }
  return revArray.join('');
};

const onlyEven = numbers => {
  // your code here
};

const removeNthElement2 = (index, array) => {
  // your code here
};

const elementsStartingWithAVowel = strings => {
  // your code here
};

const removeSpaces = string => {
  // your code here
};

const sumNumbers = numbers => {
  // your code here
};

const sortByLastLetter = strings => {
  // your code here
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
