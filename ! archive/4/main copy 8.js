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

var i = 5
console.log(i) // ! 5 global scope
var func = function () {
  i = 10 // global scope 5 -> 10
  console.log(i) // 10 global scope
  var innerFunc = function () {
    i = 15 // global scope 10 -> 15
    console.log(i) // 15 global scope
  }
  innerFunc()
  console.log(i) // ? 15 global scope
}
func()
console.log(i) // ! 15 global scope
