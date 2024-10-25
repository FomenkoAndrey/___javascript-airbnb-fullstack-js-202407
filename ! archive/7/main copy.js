const arr = [ 1, 2, 15, 105, 22, 202 ]

arr.sort((a, b) => a - b)

console.log(arr) // [1, 2, 15, 22, 105, 202]

// function compareNumeric(next, prev) {
//   // prev - предыщий элемент массива
//   // next - следующий элемент массива

//   console.log(`next: ${next}, prev: ${prev}`)

//   if (next > prev) return 1 // післодовність правильна
//   if (next < prev) return -1 // послідовність змінюється
// }

// //               next
// //            prev
// const arr = [ 1, 2, 15, 105, 22, 202 ]
// //                  next
// //               prev

// arr.sort(compareNumeric)

// console.log(arr) // [1, 2, 15, 22, 105, 202]
