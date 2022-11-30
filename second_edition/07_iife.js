// imediate invoked function expression

let result = [];

// for (var i = 0; i < 5; i++) {
//   result.push(function () {
//     console.log(i);
//   });
// }

// result[2](); //5
// result[3](); //5
// result[4](); //5

// ==========================

for (var i = 0; i < 5; i++) {
  (function () {
    var j = i;
    result.push(function () {
      console.log(j);
    });
  })();
}

result[2](); //2
result[3](); //3
result[4](); //4
