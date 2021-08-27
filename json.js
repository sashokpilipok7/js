// let character = {
//     name: 'Octopus',
// }

// let child = {
//     name: 'child',
//     participants: [{name: "John"}, {name: "Alice"}],
//     parent: character
// }

// character.child = child;

// console.log(JSON.stringify(child, function(key , value){
//     return key === 'parent' ? undefined : value;
// }, 2));

// const obj = {
//     date: new Date,
//     country: 'Ukraine',
//     toJSON(){
//         return 14
//     }
// }

// let json = JSON.stringify(obj);
// console.log(JSON.parse(json))

const tree = {
    stem: 40,
    leaves: 30
}

let json = JSON.stringify(tree);
console.log(JSON.parse(json));