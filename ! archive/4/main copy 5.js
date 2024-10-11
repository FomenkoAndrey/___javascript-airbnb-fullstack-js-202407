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

// ! звичайна функція
// function add(a, b) {
//   return a + b
// }

// console.log(add(1, 2))
// console.log(add(1, 3))
// console.log(add(1, 5))

// ! каррінг
function add(a) {
  return function (b) {
    return a + b
  }
}

var addToOne = add(1)
console.log(addToOne(2))
console.log(addToOne(3))
console.log(addToOne(4))

var addToTen = add(10)
console.log(addToTen(2))
