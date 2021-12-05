//Q1

const longWord = function (str) {
  var strArr = str.split(" ");
  var longestWord = strArr[0];
  for (let i = 1; i < strArr.length; i++) {
    if (strArr[1].length > longestWord.length) {
      longestWord = strArr[i];
    }
  }
  return longestWord;
};

console.log(longWord("time dog cat"));

// // //Q2
const sumOddNumber = function (arr) {
  var sum = 0;
  arr.forEach((number) => {
    if (number % 2 != 0) {
      sum += number;
    }
  });
  return sum;
};

console.log(sumOddNumber([1, 2, 3, 4, 5]));
// //Q3

const isPowerofTwo = function (num) {
  if ((num && num & (num - 1)) === 0) {
    return "Yes";
  }

  return "No";
};

console.log(isPowerofTwo(2));
console.log(isPowerofTwo(4));
