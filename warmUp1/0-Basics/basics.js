function reverseString(str) {
  var newString = "";
  for (var i = str.length - 1; i >= 0; i--){
    newString += str[i];
  }
  return newString;

}
reverseString("hello");
console.log(reverseString("hello"));

//JavaScript Functions in 4 different Ways.
//Function Declaration
function square(x){
  return x * x;
}

//Function Expression
const square = function(x) {
  return x * x;
}

//Arrow Function Expression
const square = (x) => {
  return x * x;
}

//Concise Arrow Function Expression
const square = x => x * x;