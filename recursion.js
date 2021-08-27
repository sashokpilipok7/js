// function pow(x, n){
//     if(n === 1){
//         return x;
//     }else{
//         return x * pow(x, n-1)
//     }
// }

// console.log(pow(3,3))

//recursion depth = function context in the stack

//tasks

// let startTime = new Date();

// // function sumTo(n){
// //     if(n === 1){
// //         return n;
// //     }else{
// //         return n + (sumTo(n - 1));
// //     }
// // }

// // function sumTo(n){
// //    let result = 0;
// //    for(let i = 0; i < n; i++){
// //        result += n - i;
// //    }
// //    return result;
// // }

// function sumTo(n){
//     return ((n + 1) / 2) * ((n - 1) + 1);
//  }

 
// let result =  sumTo(510000000000);

// console.log(result, 'result')
// console.log(new Date() - startTime, 'time')

// function fact(n){
//     // if( n === 1){
//     //     return n;
//     // }else{
//     //     console.log(n, 'n')
//     //     console.log(n - 1, 'n -1')
//     //     return n * fact(n - 1);
//     // }
//     return n === 1 ? n : n * fact(n - 1);
// }

// console.log(fact(4))

// function fib(n){
//     let arr = [];
//     for(let i = 1; i <= n; i++){
//         arr[i] = i < 3 ? 1 : arr[i - 1] + arr[i - 2];
//     }
//     return arr[n];
// }
// let cache = new Map();

// function fib(n, prev = 0, prev2 = 0){
//     if(!cache.has(n)){
//         if(n < 3){
//             cache.set(n, 1);
//             return 1;
//         }else{
//             let res =  fib(n - 1) + fib(n -2);
//             cache.set(n, res);
//             return res;
//         }
//     }else{
//         return cache.get(n);
//     }
   
// }

// console.log(fib(77));


// let list = {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null
//         }
//       }
//     }
//   };

//   function printList(list){
//     const { next, value } = list;

//         if(next){
//           printList(next);
//         }
//         console.log(value)
//   }

// //   function printList(list) {

// //     while(list) {
// //       console.log(list.value);
// //       list = list.next;
// //     }
  
// //   }

//   printList(list)