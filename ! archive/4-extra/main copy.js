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
function recursionPow(x, n) {
  if (n !== 1) {
    return (x *= recursionPow(x, n - 1))
  }
  return x
}
console.log(recursionPow(2, 3)) // 8

// ! for loop
function pow(x, n) {
  let result = x
  for (let i = 1; i < n; i++) {
    result *= x
  }
  return result
}

console.log(pow(2, 3)) // 8
