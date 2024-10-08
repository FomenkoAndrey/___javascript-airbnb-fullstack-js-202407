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

var target = { a: 1, b: 2 }
var source = { b: 4, c: 5 }
Object.assign(target, source)
console.log(target) // Очікуваний вивід: Object { a: 1, b: 4, c: 5 }
