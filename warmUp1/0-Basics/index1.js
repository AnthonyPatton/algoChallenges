/* Challenge 1: Reverse a string
Return a string in reverse
ex. reverseString('hello') === 'olleh' */

// Create a function that will reverse a string. Solution 1 basic

function reverseString(str){
  // The 'split()' method turns a string into an array. Then we also put single quotes without space 
  // so that we can get the array "character". 
  const strArr = str.split('');
  strArr.reverse();
   
  return strArr.join(''); // Then this join() method will turn the array back into string.
}

// This is the cleaned up version of above without referencing the variable multiple times. Solution 1.a cleaned up 

function reverseString(str){
  return str
      .split('')
      .reverse()
      .join('');
}

// Solution number 2

function reverseString(str) {
  let revString = ''; // Initialize a variable and set it to nothing.
  for(let i = str.length - 1; i >= 0; i--) {
      revString = revString + str[i];
  }
  return revString;
}

// Solution number 2.a still but using an incrementing for loop instead.

function reverseString(str) {
  let revString = ''; // Initialize a variable and set it to nothing.
  for(let i = 0; i <= str.length - 1; i++) {
      revString = str[i] + revString;
  }
  return revString;
}

// More modern JavaScript using ES6 and a "for of" loop.

function reverseString(str) {
  let revString = '';
  for(let char of str) {
      revString = char + revString;
  }
  return revString;
}

// Now with it using a high order array function/method using "for each" loop.

function reverseString(str) {
  let revString = ''; // Initialize a variable and set it to nothing.
  str.split('').forEach(function (char) {
      revString = char + revString;
  });
  return revString;
}

// Now to do it with ES6 arrow functions.

function reverseString(str) {
  let revString = ''; // Initialize a variable and set it to nothing.
  str.split('').forEach(char => revString = char + revString);
  
  return revString;
}

// Now the most impressive using high order array function "reduce()". You can
// actually return from it as it returns another array, unlike the forEach() method. 
function reverseString(str) {
  return str.split('').reduce(function(revString, char) {
      return char + revString;
  }, '');
      // Below is the arrow function ES6 way. 
      // return str.split('').reduce((revString, char) => char + revString, '');
}

// ---------------------

/* Challenge 2: Validate a palindrome
Return true if palindrome and false if not
ex. isPalindrome('racecar') === 'true', isPalindrome ('hello') == false */

function isPalindrome(str) {
  const revString = str.split('').reverse().join('');

  return revString === str;
}


// ---------------------

/* Challenge 3: Reverse an integer
Return an integer in reverse
ex. reverseInt(521) === 125 
So we want to pass in a number and get back a number not a String */

function reverseInt(int) {
// Take the int param and turn it into a string. Split it, reverse it, and 
// then join it back together. Then use the parseInt to turn it back into int.   
const revString = int.toString().split('').reverse().join('');

return parseInt(revString) * Math.sign(int);
}

// ---------------------

/* Challenge 4: Capitalize Letters
Return a string with the first letter of every word capitalized. 
ex. capitalizeLetters('i love javascript') === 'I Love Javascript'  */

function capitalizeLetters(str) {
  const strArr = str.toLowerCase().split(' ');

  // As long as i is less than the array, we want to increment. "Old school way"
  for(let i = 0; i < strArr.length; i++) {
      strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
  } 
  // Then we want it to return the array and we attach the join() method because
  // we want to display it as a string. Also put a space in the single quotes (' ')
  // so that it gives us the word instead of just the single character. 
  //return strArr.join(' ');

  /* This is how you do it in a cleaner way.  
      return str
      .toLowerCase()
      .split(' ')
      .map(function(word) {
          return word[0].toUpperCase() + word.substr(1);
      }).join(' '); 
  */

  /* This is how you do it with the ES6 arrow function way.
  // you get rid of the function, the curly braces and the return. Put in the arrow
  // function and since it is only 1 param, we dont need the curly braces around (word) 
      return str
      .toLowerCase()
      .split(' ')
      .map(word => word[0].toUpperCase() + word.substr(1)) 
      .join(' '); 
  */
}

// Word expression and word boundary usage. 
// The replace method takes in a regular expression and a reg expression needs to be
// in slashes. 
function capitalizeLetters(str) {
  const strArr = str.toLowerCase().split(' ');
  return str.replace(/\b[a-z]/gi, function(char) {
      return char.toUpperCase();
  });
}
// ---------------------

/* Challenge 5: Max Character
Return the character that is most common in a string.  
ex. maxCharacter('javascript') == 'a' 
A for in loop is used to iterate through an object, rather than an array. 
*/

function maxCharacter(str) {
  const charMap = {};
  let maxNum = 0;
  let maxChar = '';
  // const can't be redefined but let can. Let is the new var. 

  str.split('').forEach(function(char) {
      if(charMap[char]) {
          charMap[char]++;
      } else {
          charMap[char] = 1;
      }
  });
  for(let char in charMap) {
      if(charMap[char] > maxNum) {
          maxNum = charMap[char];
          maxChar = char;
      }

  }
  return maxChar;
}

// ---------------------

/* Challenge 6: Fizzbuzz 
Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead
of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are
multiples of both 3 and 5, print "FizzBuzz". */
function fizzBuzz() {
  for(let i = 1; i <= 100; i++) {
      if(i % 3 === 0 && i % 5 === 0){
          console.log('FizzBuzz');
      }else if(i % 3 === 0) {
          console.log('Fizz');
      } else if(i % 5 === 0) {
          console.log('Buzz');
      } else { 
          console.log(i);
      }
  }
}


// Call Function
const output = fizzBuzz();

console.log(output);