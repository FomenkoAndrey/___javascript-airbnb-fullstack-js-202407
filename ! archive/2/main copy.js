/* eslint-disable no-new-wrappers */
/* eslint-disable object-shorthand */
/* eslint-disable vars-on-top */
/* eslint-disable eqeqeq */
/* eslint-disable no-extra-semi */
/* eslint-disable semi-style */
/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/* eslint-disable no-var */
/* eslint-disable semi */

var someString = 'userName'
var emptyString = ''
var newString1 = someString || 'Guest'
var newString2 = emptyString || 'Guest'

// if (someString.length > 0) {
//   newString1 = someString
// } else {
//   newString1 = 'Guest'
// }

// if (emptyString.length > 0) {
//   newString2 = emptyString
// } else {
//   newString2 = 'Guest'
// }

console.log(newString1)
console.log(newString2)
