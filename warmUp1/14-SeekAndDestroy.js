// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments. 

function destroyer(arr) {
  //Remove all the values

  var args = Array.from(arguments);
  args.splice(0,1);
  var targets = args;

  //Other way to do it.
  return arr.filter(function(num) {
    return targets.indexOf(num) === -1;
  });



  // var result =[];
  // for (var num of arr) {
  //   if (targets.indexOf(num) === -1) {
  //     results.push(num);
  //   }
  // }
  // return result;
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);