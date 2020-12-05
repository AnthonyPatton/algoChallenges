/*
Return the length of the longest word in the provided sentence.
Your response should be a number.
Also Examples just in case you forgot"

var fruits = ["apple", "mango", "cherries"]

We can loop through this way:
for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i])
}
OR
for (var fruit of fruits) {
  console.log(fruit)
}
The 2nd one you don't have to deal with the indexes, it goes over the elements. 

*/

function findLongestWord(str) {
  var words = str.split(" ");
  var longest = "";

  for (var word of words) {
    if (word.length > longest.length) longest = word;
  }
  return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");