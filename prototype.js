// console.log("hello from js!");

// function CustomObjectConst() {}

// CustomObjectConst.prototype.foo = true;

// let customObject = new CustomObjectConst();

// console.log(customObject.__proto__ === customObject.prototype);
// console.log(customObject.__proto__.constructor === CustomObjectConst);
// console.log(CustomObjectConst.prototype.constructor === CustomObjectConst);

// let string = "Sasha";

// if (!String.prototype.repeat) {
//   String.prototype.repeat = function (n) {
//     return new Array(n + 3).join(this);
//   };
// }

// console.log(string.repeat(3));

// //pseudo array

// const pesudoArr = {
//   "0": "one",
//   "1": "two",
//   length: 2
// };

// pesudoArr.__proto__.join = Array.prototype.join;

// Function.prototype.defer = function (time) {
//   setTimeout(this, time);
// };
// function f() {
//   alert("Hello!");
// }
// f.defer(1000);
// console.log("start");
// Function.prototype.defer = function (time) {
//   return (a, b) => {
//     setTimeout(() => this(a, b), time);
//   };
// };

// function f(a, b) {
//   alert(a + b);
// }

// f.defer(3000)(1, 2);

// const obj = {
//   one: "one",
//   two: "two"
// };

// console.log(Object.getPrototypeOf(obj) === obj.__proto__);
// console.dir(Object.getPrototypeOf(obj));

// let clone = Object.create(
//   Object.getPrototypeOf(obj),
//   Object.getOwnPropertyDescriptors(obj)
// );
// console.log(Object.getOwnPropertyDescriptors(obj));

// 1. false
// 2. false
// 3. false / true
// 4. false
// 5. true / false
// 6 false
// 7. true
// 8. false / true
// 9.  { constructor: IINCUBATOR} /  Function.prototype
// 10. Number.prototype

// 6 правильних відповідей
