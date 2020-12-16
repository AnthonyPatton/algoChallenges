// This is an "Up to and not including" method where it doesn't include the index of its name. 

// Return the remaining elements of an array after chopping of n elements from the head. The head means the beginning of the array, or the zeroth index. 

// Two helpful methods are Array.prototype.slice() and Array.prototype.splice()

function slasher(arr, howMany) {
  // it doesn't always pay to be first
  arr.splice(0, howMany);
  return arr;
}

slasher([1, 2, 3], 2);
slasher(["burgers", "fries", "shake"], 1) // should return ["fries", "shake"]

