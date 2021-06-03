/* We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them. 

The lowest number will not always come first.
*/

function sumAll(arr) {
  var start = Math.min(arr[0], arr[1]);
  var end = Math.max(arr[0], arr[1]);
  var total = 0;

  for (var i = start; i <= end; i++) {
    total += i;
  }
  return total;
}

sumAll([5, 10]);
