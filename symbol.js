// console.log('hello world');

// let s = Symbol();

// console.log(s, 's');

// let sWithName = Symbol('name')

// console.log(sWithName, 'sWithName')

// console.log(sWithName.description)

// let user = {
//     name: 'Sasha', 
//     age: 20
// }

// let id = Symbol('id');
// user[id] = '334-433-23'
// console.log(user, 'user')

// let id2 = Symbol('id');
// user[id2] = '111111'
// console.log(user, 'user')

// for( let key in user) console.log(key, ' -----> ', user[key])
// console.log(user[id2])
// console.log(Object.keys(user))
// console.log(Object.assign({}, user))


// let id = Symbol.for('id');
// let again = Symbol.for('id');

// console.log(id === again);
// console.log(Symbol.keyFor(again))

// let arr = [1,2,3];

// let range2 = {
//     from : 1,
//     to: 10,
// }

// range2[Symbol.iterator] = function() {
//     // console.log(this)
//     return {
//         current: this.from,
//         last: this.to,
//         next(){
//             // console.log(this)
//             if(this.current <= this.last){
//                 return { done: false, value: this.current++}
//             }else{
//                 return {done: true}
//             }
//         }

//     }
// }

// const arr2 = Array.from(range2);
// console.log(arr2)

// for(let key of range2) console.log(key)

// for(let char of 'Sasha') console.log(char)

// let str = 'Hello';

// let iterator = str[Symbol.iterator]();

// console.log(iterator);

// while(true){
//     const result = iterator.next()
//     if(result.done){
//         break
//     }
//     console.log(result.value)
// }
  
// // Array.from() приймає інтеруємий обєкт або псевдомасив і дозволяє працювати з ним як з массивом

// let arr = Array.from(str);
// console.log(arr);

// arr.map(i => console.log(i))