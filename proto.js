// const animal = {
//     eat: true
// }
// const rabbit = {
//     jump: true
// }

// const dog = {
//     gav: true,
//     __proto__: rabbit
// }

// rabbit.__proto__ = animal;
// console.log(rabbit)
// console.log(rabbit.eat)
// console.log(dog.eat)

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

// console.log(Object.keys(dog))
// for(let fey in dog){
//     console.log(fey)
// }

// for(let fey in dog){
//     dog.hasOwnProperty(fey) && console.log(fey)
// }

let hamster = {
    stomach: [],
  
    eat(food) {
      this.stomach = this.stomach ? [...this.stomach, food] : [food]
    }
  };
  
  let speedy = {
    __proto__: hamster
  };
  
  let lazy = {
    __proto__: hamster
  };
  
  // Этот хомяк нашёл еду
  speedy.eat("apple");
  speedy.eat("banana");
  speedy.eat("apple");
  console.log( speedy.stomach ); // apple
  
  // У этого хомяка тоже есть еда. Почему? Исправьте
  console.log( lazy.stomach ); // apple