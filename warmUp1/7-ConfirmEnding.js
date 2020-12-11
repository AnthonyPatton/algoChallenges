/* Check if a String(first argument, str) ends with the given target string (second argument, target). */

/* Easy way
function confirmedEnding(str, target) {

  if (str.endsWith(target)) {
    return true;
  }
  return false;
}

confirmedEnding("Bastian", "n");
*/

function confirmedEnding(str, target) {

  if (str.substr(-target.length) === target) {
    return true;
  }
  return false;
}

confirmedEnding("Bastian", "n");