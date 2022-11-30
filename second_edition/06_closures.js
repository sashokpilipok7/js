// Замиканія це коли функція має доступ до змінних з вище стоящого скоупа/лексичного окруженія
// По суті всі функції в js є замиканнями, но часто приводять приклад коли функція внутрі має доступ до змінних функції знаружі яка вже була визвана

// function sayHelloTo(name) {
//   const message = "Hello " + name;

//   return function () {
//     console.log(message);
//   };
// }

// const helloToSasha = sayHelloTo("Sasha");
// helloToSasha();

// ==========================

// function createFrameworkManager() {
//   const fw = ["Angular", "React"]; // замкнули в собі це значення нігде не доступне знаружі, але ми можемо з ним взаємодіяти

//   return {
//     print: function () {
//       console.log(fw.join(" "));
//     },
//     add: function (item) {
//       fw.push(item);
//     },
//   };
// }

// const manager = createFrameworkManager();
// manager.print();
// manager.add("Vue");
// manager.print();

// ==========================
// hint Settimeout, for = task, promise = microtask

const fib = [1, 2, 3, 5, 8, 13];

for (var i = 0; i < fib.length; i++) {
  (function (j) {
    // ore just rename let i = 0;
    setTimeout(function () {
      console.log(`fib[${j}] = ${fib[j]}`);
    }, 1000);
  })(i);
}
