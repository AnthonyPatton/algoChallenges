// Remove all falsy values from an array

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// function bouncer(arr) {
//   var truthies = [];
//   for (var elem in arr) {
//     if(elem) truthies.push(elem);
//   }
//   return truthies;
//   console.log(truthies);
// }

function bouncer(arr) {
  // Don't show a false ID to this bouncer
  return arr.filter(function(elem) {
    return elem;
  });
}

bouncer([7, "ate", "", false, 9]);