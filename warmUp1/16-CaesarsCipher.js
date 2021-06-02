/* Also called shift cipher, the meanings of the letters are shifted by some set amount. 
Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character(i.e. spaces, punctuation), but do pass them on.*/

function rot13(str) {
  var solved = "";
  for (var i = 0; i < str.length; i++) 
      var asciiNum = str[i].charCodeAt();
      if (asciiNum >= 65 && asciiNum <= 77) {
        solved += String.fromCharCode(asciiNum + 13);
      } else if (asciiNum >= 78 && asciiNum <= 90) {
        solved += String.fromCharCode(asciiNum - 13);
      } else {
        solved += str[i];
      }
      return solved;
}