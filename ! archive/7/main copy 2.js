const numbers = [ 1, 2, 3, 4, 5 ]
const evens = numbers.filter(number => number % 2 === 0)
console.log(evens) // [2, 4]

const odds = numbers.filter(number => number % 2 !== 0)
console.log(odds) // [1, 3, 5]
