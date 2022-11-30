// const animal = {
//   eat: true,
// };
// const rabbit = {
//   jump: true,
// };

// const dog = {
//   gav: true,
//   __proto__: rabbit,
// };

// rabbit.__proto__ = animal;
// console.log(rabbit);
// console.log(rabbit.eat);
// console.log(dog.eat);

// операції присваюванія та удаленія працюють безпосередньо з самим обьектом, а не його прототипом, тільки йщо це не геттери і сеттери в прототипі

//Если мы вызываем obj.method(), а метод при этом взят из прототипа, то this всё равно ссылается на obj. Таким образом, методы всегда работают с текущим объектом, даже если они наследуются.

// let animal = {
//     walk() {
//       if (!this.isSleeping) {
//         alert(`I walk`);
//       }
//     },
//     sleep() {
//       this.isSleeping = true;
//     }
//   };

//   let rabbit = {
//     name: "White Rabbit",
//     __proto__: animal
//   };

//   // модифицирует rabbit.isSleeping this завжди обьект перед точкою
//   rabbit.sleep();

//   alert(rabbit.isSleeping); // true
//   alert(animal.isSleeping); // undefined (нет такого свойства в прототипе)

// записываем данные в this, они сохраняются в этих объектах (прототипно наслідуваних)

// В результате методы являются общими, а состояние объекта — нет.

// console.log(Object.keys(dog));
// for (let fey in dog) {
//   console.log(fey);
// }

// console.log("------");

// for (let fey in dog) {
//   dog.hasOwnProperty(fey) && console.log(fey);
// }

// console.log("------");

// Цикл for..in проходит не только по собственным, но и по унаследованным свойствам объекта.
// Если унаследованные свойства нам не нужны, то мы можем отфильтровать их при помощи встроенного метода obj.hasOwnProperty(key):

// Всі методи і свойства обєкта Object.prototype який є прототипом всіх обєктів стоять в  enumerable = false, тому вони не перечисляються в for in

// TASKS BELOW, LOWER
//1

// let head = {
//   glasses: 1,
// };

// let table = {
//   pen: 3,
//   __proto__: head,
// };

// let bed = {
//   sheet: 1,
//   pillow: 2,
// };

// bed.__proto__ = table;

// let pockets = {
//   money: 2000,
// };

// pockets.__proto__ = bed;

// console.log(pockets.glasses);

// 2;
// let hamster = {
//   stomach: [],

//   eat(food) {
//     this.stomach.push(food);
//   },
// };

// let speedy = {
//   __proto__: hamster,
//   stomach: [],
// };

// let lazy = {
//   __proto__: hamster,
//   stomach: [],
// };

// // Этот хомяк нашёл еду
// speedy.eat("apple");
// speedy.eat("banana");
// speedy.eat("apple");
// console.log(speedy.stomach); // apple

// // У этого хомяка тоже есть еда. Почему? Исправьте
// console.log(lazy.stomach); // apple

// __proto__ геттер і сеттер для прототипа обєкта [[Prototype]]
// F.prototype звичайне свойство яке при виклику new F() встановить прототип обєкта [[Prototype]]
