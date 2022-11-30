// Приведення типів

// '', 0, null, undefined, Nan, false - to false

// console.log(Boolean("")); // false
// console.log(Boolean("Hello")); // true
// console.log(Boolean(" ")); // true
// console.log(Boolean("0")); // true
// console.log(Boolean(0)); // false
// console.log(Boolean(null)); // false
// console.log(Boolean([])); // true
// console.log(Boolean({})); // true
// console.log(Boolean(function () {})); // true

// Строки і числа

// console.log(1 + "2"); // 12, res = string, always when one of the arguments is string the result is string ( when adding +, another operations translate string to number)
// console.log("" + 1 + 0); // 10
// console.log("" - 1 + 0); // -1
// console.log("3" * "8"); // 24
// console.log(4 + 10 + "px"); // 14px
// console.log("px" + 5 + 10); // px510
// console.log("42" - 40); // 2
// console.log("42px" - 2); //NAN
// console.log(null + 2); // 2
// console.log(undefined + 42); // Nan

// == vs === ( the differents is the == translate arguments into another type, but === doesn't translate )
// you shound't use ==

console.log(false == ""); //true
console.log(false == []); //true
console.log(false == {}); //false
console.log("" == 0); //true
console.log("" == []); //true
console.log("" == {}); //false
