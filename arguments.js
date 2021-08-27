function showName(){
    console.log(arguments)
}

showName('a','b','c', 'd')

const obj = {
    0: 'Sasha',
    1: 'Pylypenko',
    length: 2
}

// console.log([...obj])
console.log(Array.from(obj))