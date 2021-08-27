// let prices = {
//     banana: 1,
//     apple: 2,
//     orange: 3
// };

// console.log(prices, 'prices')

// const newPrices = Object.entries(prices).map(([key,value]) => [key, value * 3]);
// prices = Object.fromEntries(newPrices);

// console.log(prices, 'prices')

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
//   };

//   function sumSalaries(){
//     if (Object.values(salaries).length === 0) return 0;
//     return Object.values(salaries).reduce((sum, item) => sum += item)
//   }

//   console.log(sumSalaries(salaries));

// const arr = [1,2,3,4,5];

// const [one, two, ...rest] = arr;

// console.log(one, 'one')
// console.log(rest, 'rest')


// let [name = prompt('name?'), surname = prompt('surname?')] = ["Julius"];

// let def = 'default';
// let object = {};
// let {prop : varName = def, ...rest} = object
// console.log(varName, 'varNAme')
// console.log(rest, 'rest')

// let user = { name: "John", years: 30 };

// // ваш код должен быть с левой стороны:
// // ... = user
// let { name, years: age, isAdmin = false} = user

// console.log( name ); // John
// console.log( age ); // 30
// console.log( isAdmin ); // false

let salaries = {
    "John": 100,
    "Pete": 300,
    "Sasha": 300,
    "Mary": 250
  };

function topSalary(obj){
    let result = 0;
    let currentName = null;
    for(let [name, value] of Object.entries(obj)){
        if(result < value){
            result = value;
            currentName = name;
        } 
    }
    return currentName
}

console.log(topSalary(salaries))