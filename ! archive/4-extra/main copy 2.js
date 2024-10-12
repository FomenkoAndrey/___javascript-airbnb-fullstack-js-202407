/* eslint-disable no-loop-func */
/* eslint-disable no-use-before-define */
/* eslint-disable strict */
/* eslint-disable no-shadow */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable prefer-template */
/* eslint-disable no-extra-label */
/* eslint-disable no-labels */
/* eslint-disable no-fallthrough */
/* eslint-disable default-case */
/* eslint-disable guard-for-in */
/* eslint-disable no-new-wrappers */
/* eslint-disable object-shorthand */
/* eslint-disable vars-on-top */
/* eslint-disable eqeqeq */
/* eslint-disable no-extra-semi */
/* eslint-disable semi-style */
/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/* eslint-disable no-var */

// ! recursion
// function recursionPow(x, n) {
//   if (n !== 1) {
//     return (x *= recursionPow(x, n - 1))
//   }
//   return x
// }
// console.log(recursionPow(2, 3)) // 8

// ! KISS
// const pow = Math.pow.bind(null)
// console.log(pow(2, 3)) // 8

// ! YAGNI
// console.log(2 ** 3) // 8

// ! рекурсія з мемоізацією
function memoizedRecursionPow() {
  const cache = {}

  function recursionPow(x, n) {
    const key = `${x}-${n}`

    if (key in cache) {
      return cache[key]
    }

    if (n === 1) {
      return x
    }

    cache[key] = x * recursionPow(x, n - 1)
    return cache[key]
  }

  return recursionPow
}

const recursionPow = memoizedRecursionPow()

console.log(recursionPow(2, 3)) // 8
console.log(recursionPow(2, 4)) // 16
console.log(recursionPow(3, 3)) // 27
console.log(recursionPow(2, 3)) // 8 (взято з кешу)
