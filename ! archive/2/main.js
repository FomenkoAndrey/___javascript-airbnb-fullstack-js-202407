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

var a = 0;
var b = 0;
var isFalse = false;
var isTrue = true

var result = isTrue && (a = 5) && (b = 10);
// if (isTrue) {
//   a = 5;
// }

console.log(a)
console.log(result)

isFalse && (b = 5);
// if (isFalse) {
//   b = 10;
// }

console.log(b)
