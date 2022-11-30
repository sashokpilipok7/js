// console.log(sum(1, 10)); // 11
// function sum(a, b) {
//   return a + b;
// }

// console.log(a); //undefined but no error, (the same as var i; would be above)
// var a = 42;
// console.log(a); //42

// console.log(b); //won't work, error
// const b = 42;
// console.log(b);

// Function Expression & Function Declaration

console.log(square(3)); // 9

function square(num) {
  // Function Declaration can be called above
  return num ** 2;
}

const square = function (num) {
  //Function Expression can not be called above
  return num ** 2;
};
