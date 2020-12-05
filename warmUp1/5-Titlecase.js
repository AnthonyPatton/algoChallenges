/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.



function titleCase(str) {
  var words = str.toLowerCase().split(" ");
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}


titleCase("I'm a little tea pot");
*/

function titleCase(str) {
  var titled = str.toLowerCase().split(" ").map(function(elem) {
    return elem[0].toUpperCase() + elem.slice(1);
  })

  return titled.join(" ");
}

titleCase("I'm a little tea pot");