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

// ! Closure
function createCounter() {
  var count = 0

  return function (num) {
    if (num !== undefined) {
      count = num
    }
    return count++
  }
}

var counter = createCounter()

console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter(100))
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter(0))
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
