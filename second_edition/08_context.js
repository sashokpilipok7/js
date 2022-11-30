// контекст визначає як функція була визвана, та вказує на ключеве слово this
// call, apply, bind

// const person = {
//   surname: "Stark",
//   knows: function (what, name) {
//     console.log(`Ти ${what} знаєш, ${name} ${this.surname}`);
//   },
// };

// person.knows("Все", "Емілія");

// const john = { surname: "Snow" };
// person.knows.call(john, "щось", " Джон");
// person.knows.apply(john, ["щось", " Джон"]);

// ====================

function Person(name, age) {
  this.name = name;
  this.age = age;

  console.log(this); // { name: 'Sasha', age: 18 }
  (function () {
    console.log(this, "this from iife"); // Object [global]
  })();
  (() => console.log(this, "this from arrow function"))(); //{ name: 'Sasha', age: 18 }
}

//стрєлочна функція не создає свій контекст, вона бере контекст свише

const person = new Person("Sasha", 18);
