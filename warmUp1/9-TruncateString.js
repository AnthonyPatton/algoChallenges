// Truncate a string(first argument) if it is longer than the given maximum string length(second argument). Return the truncated string with a ... ending. 

// Adding the three dots to the end will add to the string length

function truncateString(str, num) {
  //Clear some things
  if (num >= str.length) return str;
  if (num <= 3) return str.slice(0, num) + "...";
    return str.slice(0, num-3) + "...";
}

truncateString("A-tisket a-tisket A green and yellow basket", 11);