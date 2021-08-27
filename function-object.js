// function sayHi(a){
//     console.log('hi')
// }

// console.log(sayHi.name)

// let user = {
//     flyToTheSky(){

//     },
    
//     danceNearTheSea: function(){

//     }
// }

// console.log(user.danceNearTheSea.name);
// console.log(user.flyToTheSky.name)


// console.log(sayHi.length)

// function ask(question, ...handlers) {
//     let isYes = globalThis.global.confirm(question);
  
//     for(let handler of handlers) {
//       if (handler.length == 0) {
//         if (isYes) handler();
//       } else {
//         handler(isYes);
//       }
//     }
  
//   }
  
//   // для положительных ответов вызываются оба типа обработчиков
//   // для отрицательных - только второго типа
//   ask("Вопрос?", () => console.log('Вы ответили да'), result => console.log(result));

// function makeCounter(){
//     let count = 0;
//     function counter(){
//         count ++;
//         console.log(count)
//     }
//         counter.set = value => count = value;

//         counter.decrease = () => count--;
//     return counter;
// }

// let cc = makeCounter();
// cc();
// cc();

// let sayHi = function func(who){
//     if(who){
//         console.log(who)
//     }else{
//         func('Guest');
//     }
// }

// sayHi();

// функцію яка буде вертати функцію і додавати

// function sumFunc(num){
//     sumFunc.count >= 0 ? sumFunc.count += num : sumFunc.count = 0;
//     sumFunc[Symbol.toPrimitive] = (hint) => {
//         return hint === 'number' ? sumFunc.count : 'null';
//     }
//     return sumFunc;
// }

// sumFunc(6)(-1)(-2)(-3);
// sumFunc(0)(1)(2)(3)(4)(5);
// console.log(Number(sumFunc(0)(1)(2)(3)(4)(5)))
// console.log(sumFunc(6)(-1)(-2)(-3) == 0)
// console.log(Number(sumFunc(1)(2)(3)))


// function sum(a) {

//     let currentSum = a;
  
//     function f(b) {
//       currentSum += b;
//       return f;
//     }
  
//     f.toString = function() {
//       return currentSum;
//     };
  
//     return f;
//   }

let str = `console.log('Hello')`;
    str = JSON.stringify(str);

  const sayHi  = new Function(`console.log('Hello')`);

  sayHi()