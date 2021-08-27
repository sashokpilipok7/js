// "use strict";
// let obj = {};

// let key = prompt("What's the key?", "__proto__");
// obj[key] = "some value";

// console.log(obj);
// alert(obj[key]);

// const obj = {
//   name: "name",
//   surname: "surname"
// };

// console.log("hello");
// console.log(Object.keys(obj));

// let dictionary = Object.create(null);

// dictionary.apple = "Apple";
// dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

// Object.defineProperty(dictionary, "toString", {
//   value() {
//     return Object.keys(this).join();
//   }
// });

// // только apple и __proto__ выведены в цикле
// for (let key in dictionary) {
//   alert(key); // "apple", затем "__proto__"
// }

// // ваш метод toString в действии
// alert(dictionary); // "apple,__proto__"

// function Rabbit(name) {
//   this.name = name;
// }
// Rabbit.prototype.sayHi = function () {
//   alert(this.name);
// };
// let rabbit = new Rabbit("Rabbit");

// rabbit.sayHi();
// Rabbit.prototype.sayHi();
// Object.getPrototypeOf(rabbit).sayHi();
// rabbit.__proto__.sayHi();

// function context() {
//   console.log(this);
// }

// context();

// const obj = {
//   bar: "123",
//   foo() {
//     console.log(this.bar);
//   },
//   baz: () => console.log(this.bar)
// };

// obj.foo();
// obj.baz();

// function test() {
//   return () => this.foo;
// }

// console.log(test.call({ foo: 1 })());

const obj = {
  foo: "1",
  bar: {
    foo: "2",
    baz: () => console.log(this),
  },
};

obj.bar.baz();

function bar() {
  return {
    foo: 2,
    baz: () => console.log(this.foo),
  };
}

bar.call(obj).baz();
