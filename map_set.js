// let map = new Map();

// map.set('str', 'string key');
// map.set(1, 'number key');
// map.set(true, 'bool key');

// console.log(map)
// console.log(map.get(true))
// console.log(map.size)

// const user = {
//     name: 'Sasha',
//     age: '20'
// };

// map.set(user, 'norm tip')
// console.log(map.get(user))

// console.log(map.keys());
// console.log(map.values());
// console.log(map.entries());

// for(let item of map) console.log(item)

// map.forEach((value, key, map) => {
//     console.log(key, ' -----> ', value)
// })

// let map2 = new Map([
//     [1, 'number'],
//     ['str', 'string'],
//     [{}, 'object']
// ])
// console.log(map2)
// console.log(map2.get({}))

// for(let [key, value] of map2.entries()) console.log(key, ' -----> ', value)

// const user = {
//     name: 'Sasha',
//     age: '20'
// };

// let map3 = new Map(Object.entries(user))
// console.log(map3)

// let map2 = new Map([
//     [1, 'number'],
//     ['str', 'string'],
//     [true, 'bool'],
// ])

// console.log(Object.fromEntries(map2.entries()))
// console.log(Object.fromEntries(map2))

// const arr = [1,2,3,4,4,4,5]
// let set = new Set(arr)
// console.log(set)

// const messages2 = [
//     {
//         id:1,
//         text: 'Some mess'
//     },
//     {
//         id:2,
//         text: 'Some mess2'
//     },
//     {
//         id:1,
//         text: 'Some mess'
//     },
//     {
//         id:3,
//         text: 'Some mess'
//     },
//     {
//         id:4,
//         text: 'Some mess'
//     },
// ]
// const set2 = new Set(messages2.map(item => item.id));
// const set3 = new Set(messages2.map(item => JSON.stringify(item)))
// const setArray = [...set3].map(i => JSON.parse(i))
// console.log(set2)
// console.log(set3)
// console.log(setArray)

// const docSet = new Set();
// document.addEventListener('click', (e) => {
//     console.log(e.target)
//     docSet.add(e.target)
//     console.log(docSet)
// })

// function unique(arr) {
//    return Array.from(new Set(arr))
//   }
  
//   let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
//   ];

//   console.log(unique(values))

// let str = 'sasha';

// let strSet = new Set(str);
// console.log(strSet)

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// function aclean(arr){
//     const map = new Map(arr.map(item => [new Set(item), item]));

//     const clear = {};
//     for(let [key, value] of map){
//         // console.log(Array.from(key).map(item => item.toLowerCase()).sort().join(''))
//         const newKey = Array.from(key).map(item => item.toLowerCase()).sort().join('')
//         clear[newKey] = value;
//     }
//     return Object.values(clear)
// }


function aclean(arr){
    const obj = Object.fromEntries(arr.map(item => {
        const key = item.toLowerCase().split('').sort().join('');
        return [key, item];
    }))

    return Object.values(obj)
}

console.log(aclean(arr));