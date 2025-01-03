/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let max = a;
  if (b > max) {
    max = b;
  } else if (c > max) {
    max = c;
  }
  return max;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  return (
    queen.x === king.x ||
    queen.y === king.y ||
    Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)
  );
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a === 0 || b === 0 || c === 9) {
    return false;
  }
  return (
    (a === b && a + b > c) || (a === c && a + c > b) || (b === c && b + c > a)
  );
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const numbers = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
  };
  function repeatStr(str, count) {
    let rpt = '';
    for (let i = 0; i < count; i += 1) {
      rpt += str;
    }
    return rpt;
  }
  let numberRomT;
  const forSingleDigit = (a) => {
    let numberRom;
    if (numbers[a]) {
      return numbers[a];
    }
    if (a < 4) {
      numberRom = repeatStr(numbers[1], a);
    } else {
      numberRom = numbers[5] + repeatStr(numbers[1], a - 5);
    }
    return numberRom;
  };
  if (num <= 10) {
    numberRomT = forSingleDigit(num);
  } else {
    const numT = repeatStr(numbers[10], Math.floor(num / 10));
    const numU = num % 10;
    numberRomT = numT + forSingleDigit(numU);
  }
  return numberRomT;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let newStr = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    if (i < numberStr.length - 1) {
      switch (numberStr[i]) {
        case '0':
          newStr += 'zero ';
          break;
        case '1':
          newStr += 'one ';
          break;
        case '2':
          newStr += 'two ';
          break;
        case '3':
          newStr += 'three ';
          break;
        case '4':
          newStr += 'four ';
          break;
        case '5':
          newStr += 'five ';
          break;
        case '6':
          newStr += 'six ';
          break;
        case '7':
          newStr += 'seven ';
          break;
        case '8':
          newStr += 'eight ';
          break;
        case '9':
          newStr += 'nine ';
          break;
        case '-':
          newStr += 'minus ';
          break;
        default:
          newStr += 'point ';
          break;
      }
    } else {
      switch (numberStr[i]) {
        case '0':
          newStr += 'zero';
          break;
        case '1':
          newStr += 'one';
          break;
        case '2':
          newStr += 'two';
          break;
        case '3':
          newStr += 'three';
          break;
        case '4':
          newStr += 'four';
          break;
        case '5':
          newStr += 'five';
          break;
        case '6':
          newStr += 'six';
          break;
        case '7':
          newStr += 'seven';
          break;
        case '8':
          newStr += 'eight';
          break;
        case '9':
          newStr += 'nine';
          break;
        case '-':
          newStr += 'minus';
          break;
        default:
          newStr += 'point';
          break;
      }
    }
  }
  return newStr;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i += 1) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return -1;
}
/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const str = String(num);
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === String(digit)) {
      return true;
    }
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  function sumNumber(array, indexStart, indexEnd) {
    let sum = 0;
    for (let i = indexStart; i <= indexEnd; i += 1) {
      sum += array[i];
    }
    return sum;
  }

  for (let i = 1; i < arr.length - 1; i += 1) {
    if (sumNumber(arr, 0, i - 1) === sumNumber(arr, i + 1, arr.length - 1)) {
      return i;
    }
  }
  return -1;
}
/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const results = [];
  for (let i = 0; i < size; i += 1) {
    results[i] = [];
  }
  let counter = 1;
  let startColumn = 0;
  let endColumn = size - 1;
  let startRow = 0;
  let endRow = size - 1;
  while (startColumn <= endColumn && startRow <= endRow) {
    for (let i = startColumn; i <= endColumn; i += 1) {
      results[startRow][i] = counter;
      counter += 1;
    }
    startRow += 1;

    for (let i = startRow; i <= endRow; i += 1) {
      results[i][endColumn] = counter;
      counter += 1;
    }
    endColumn -= 1;

    for (let i = endColumn; i >= startColumn; i -= 1) {
      results[endRow][i] = counter;
      counter += 1;
    }
    endRow -= 1;

    for (let i = endRow; i >= startRow; i -= 1) {
      results[i][startColumn] = counter;
      counter += 1;
    }
    startColumn += 1;
  }
  return results;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(mat) {
  const matrix = mat;
  const n = matrix.length;

  for (let i = 0; i < n; i += 1) {
    for (let j = i; j < n; j += 1) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n / 2; j += 1) {
      [matrix[i][j], matrix[i][n - 1 - j]] = [
        matrix[i][n - 1 - j],
        matrix[i][j],
      ];
    }
  }

  return matrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const arrNew = arr;

  function compareFunction(a, b) {
    return a - b;
  }

  for (let i = 0; i < arrNew.length - 1; i += 1) {
    for (let j = 0; j < arrNew.length - i - 1; j += 1) {
      if (
        compareFunction
          ? compareFunction(arrNew[j], arrNew[j + 1]) > 0
          : arrNew[j] > arrNew[j + 1]
      ) {
        const temp = arrNew[j];
        arrNew[j] = arrNew[j + 1];
        arrNew[j + 1] = temp;
      }
    }
  }

  return arr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function foundIterations(str, iterations) {
  let newString = str;
  const control = str;
  let iter = iterations;
  let count = 1;
  while (iter > 0) {
    let strLeft = '';
    let strRigth = '';
    for (let i = 0; i < newString.length; i += 1) {
      if (i % 2 === 0) {
        strLeft += newString.charAt(i);
      } else {
        strRigth += newString.charAt(i);
      }
    }

    newString = strLeft + strRigth;

    if (control !== newString) {
      count += 1;
      iter -= 1;
    } else {
      break;
    }
  }

  return count;
}
function shuffleChar(str, iterations) {
  let newStr = str;
  let iter = iterations;
  const count = foundIterations(newStr, iter);
  iter = iter <= count ? iter : iter - count * Math.floor(iter / count);
  while (iter > 0) {
    let strLeft = '';
    let strRigth = '';
    for (let i = 0; i < newStr.length; i += 1) {
      if (i % 2 === 0) {
        strLeft += newStr.charAt(i);
      } else {
        strRigth += newStr.charAt(i);
      }
    }
    newStr = strLeft + strRigth;

    iter -= 1;
  }

  return newStr;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */

function partition(arr, low, high) {
  const m = arr;
  const pivot = m[high];
  let i = low - 1;

  for (let j = low; j < high; j += 1) {
    if (arr[j] <= pivot) {
      i += 1;
      const temp = arr[i];
      m[i] = arr[j];
      m[j] = temp;
    }
  }

  const temp = arr[i + 1];
  m[i + 1] = arr[high];
  m[high] = temp;

  return i + 1;
}

function quickSort(arr, low, high) {
  if (low < high) {
    const pi = partition(arr, low, high);
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
}

function getNearestBigger(num) {
  let length = 0;
  let n = num;

  while (n > 0) {
    length += 1;
    n = Math.floor(n / 10);
  }

  const arr = new Array(length);
  n = num;

  for (let i = length - 1; i >= 0; i -= 1) {
    arr[i] = n % 10;
    n = Math.floor(n / 10);
  }
  let i = length - 2;

  while (i >= 0 && arr[i] >= arr[i + 1]) {
    i -= 1;
  }
  if (i < 0) {
    return num;
  }
  let j = length - 1;
  while (arr[i] >= arr[j]) {
    j -= 1;
  }
  [arr[i], arr[j]] = [arr[j], arr[i]];
  quickSort(arr, i + 1, length - 1);
  let result = 0;
  for (let k = 0; k < length; k += 1) {
    result = result * 10 + arr[k];
  }

  return result;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
