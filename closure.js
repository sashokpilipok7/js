// let phrase = 'Hello';

// function sayHi(name){
//     console.log(`${phrase} ${name}`)
// }

// console.log(sayHi('Sasha'))

// function User(name){
//     this.sayHi = function(){
//         console.log(name);
//     }
// }

// let first = new User('Sasha');

// first.sayHi();

// function makeCounter(){
//     let count = 0;
//     return function(){
//         count++;
//         console.log(count)
//     }
// }

// let counter = makeCounter();

// counter();
// counter();
// counter();

// all fucntion in js is an Clousere function, because all of them have outer lexical environment [[Environment]] with variables;
// lexical environment {...}

// const phrase = 'one';

// if(true){
//     let two = 'two';
//     console.log(phrase, two);
// }

// for (let i = 0; i < 10; i++) {
//     // У каждой итерации цикла своё собственное лексическое окружение
//     // {i: value}
//   }

//   {
//       let incognitoForAnotherScripts = 'HIHI';
//       console.log(incognitoForAnotherScripts);
//   }


// function sum(a){
//     return function(b){
//         return a + b;
//     }
// }

// console.log(sum(5)(-1))
// console.log(sum(1)(2))

// let arr = [1, 2, 3, 4, 5, 6, 7];

// function inBetween(a,b){
//     return function(item){
//         return item >= a && item <=b || item <= a && item >=b
//     }
// }

// function inArray(arr){
//     return function(item){
//         return arr.includes(item)
//     }
// }

// console.log(arr.filter(inBetween(1,2)))
// console.log(arr.filter(inArray([1,2,3,10])))

function makeArmy() {
    let shooters = [];
  
    let i = 0;
    while (i < 10) {
        let item = i;
      let shooter = function() { // функция shooter
        console.log( item ); // должна выводить порядковый номер
      };
      shooters.push(shooter);
      i++;
    }
  
    return shooters;
  }
  
  let army = makeArmy();
  
  army[0](); // у 0-го стрелка будет номер 10
  army[5](); 