function createCounter() {
  let count = 0 // 'count' є приватною змінною
  return {
    increment() {
      count++
      return count
    },
    decrement() {
      count--
      return count
    },
    getCount() {
      return count
    },
  }
}
const counter = createCounter()
console.log(counter.increment()) // 1
console.log(counter.increment()) // 2
console.log(counter.getCount()) // 2
console.log(counter.decrement()) // 1
// Змінна 'count' залишається недоступною ззовні
// console.log(counter.count); // undefined
