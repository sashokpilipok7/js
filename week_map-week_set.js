// let user = {
//     name: 'Sarah',
//     age: 20
// }

// const map = new WeakMap();
// map.set(user, 'first user description');

// // user = null;
// console.log(map.get(user))

// let john = {
//     name: 'John'
// }

// let visitCountMap = new WeakMap();

// function countVisits(user){
//     let count = visitCountMap.get(user) || 0;
//     visitCountMap.set(user, count + 1);
// }

// countVisits(john);
// countVisits(john);
// countVisits(john);

// console.log(visitCountMap.get(john))

// john = null;

// console.log(visitCountMap.get(john))

// memoize function

// const cache = new Map();

// function process(obj){
//     if(!cache.has(obj)){
//         let result = 0;
//         for(let i = 0; i < 8e8; i++) result = i;

//        return cache.set(obj, result);
//     }
//     return cache.get(obj);
// }
// let processStartDate = new Date();
// process(1);
// process(2);
// process(1);
// process(1);
// process(1);


// let dateDiff = (new Date() - processStartDate) / 1000;

// console.log(dateDiff + 's')
// console.log(cache)

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];

const dateBoard = new WeakSet(messages);

console.log(dateBoard.has(messages[0]))
console.log(dateBoard.has(messages[2]))

messages.shift();

console.log(dateBoard.has(messages[2]))
