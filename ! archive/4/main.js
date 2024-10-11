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

// ! function declaration
// function sum(a, b) {
//   return a + b
// }

// ! function definition
var sum = function () {
  var result = 0
  for (var i = 0; i < arguments.length; i++) {
    console.log(arguments[i])
    result += arguments[i]
  }

  return result
}

console.log('result:', sum(1, 2, 3, 4, 5))
