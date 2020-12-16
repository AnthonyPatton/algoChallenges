// Write a function that splits an array(first argument) into groups the length of size(second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  //Break it up
  var groups = [];
  while (arr.length > 0) {
    groups.push(arr.slice(0, size));
    arr = arr.slice(size);
  }
  return groups;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

var letters = ['a', 'b', 'c', 'd'];
console.log(letters.slice(0, 2));
