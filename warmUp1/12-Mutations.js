// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array. 

// For example, ["hello", "Hello"] should return true because all of the letters in the second string are present in the first, ignoring case.

// Also, ["Alien", "line"] should return true because all of the letters in "line" are present in "Alien".

function mutation(arr) {
  var firstWord = arr[0].toLowerCase();
  var secondWord = arr[1].toLowerCase();

  // for (var i = 0; i < secondWord.length; i++) {
  //   if (firstWord.indexOf(secondWord[i]) === -1) return false;
  // }

  for (var letter of secondWord) {
    if (firstWord.indexOf(letter) === -1) return false;
  }
  return true;
}

mutation(["hello", "hey"]);