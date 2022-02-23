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
  // const revArray = []
  // const length = strings.length - 1;
  // for(let i = length; i >= 0; i--) {
  //   revArray.push(strings[i]);
  // }
  // return revArray.join('');
};

const onlyEven = numbers => {
  const even = numbers.filter(function(x) {
    if (x % 2 === 0 || x === 0) {
      return x;
    }
  })
 return even;
};

const removeNthElement2 = (index, array) => {
  const newArr = [...array]
  newArr.splice(index, 1)
  return newArr
};

const elementsStartingWithAVowel = strings => {
  // your code here
};

const removeSpaces = string => {
  let newStr = string.replace(/\s+/g, '')
  return newStr;
};

const sumNumbers = numbers => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
  }
  return sum;
};

const sortByLastLetter = strings => {
  // let res = strings.sort((first, second) => {
  //   first > second ? -1 : 1;
  // })
  // return res;
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
