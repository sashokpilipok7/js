// console.log({}.toString());
// console.log({}.__proto__);
// console.log(Object);
// console.log(Object.prototype === {}.__proto__);
// console.log(Object.prototype === Function.prototype.__proto__);
// console.log(Object.prototype === Date.prototype.__proto__);
// console.log([].__proto__ === Array.prototype);
// console.log([].__proto__.__proto__ === Object.prototype);
let arr = [1, 2, 3];
console.log(arr.toString());
console.log(arr);
console.dir(arr);

function Arr(props) {
  return { ...props };
}

console.log(typeof Arr);
