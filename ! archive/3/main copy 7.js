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

const obj = { a: 1, b: { c: 2 } }
const deepCopy = JSON.parse(JSON.stringify(obj))

console.log(deepCopy) // Очікуваний вивід: { a: 1, b: { c: 2 } }
deepCopy.b.c = 3
console.log(obj.b.c) // Очікуваний вивід: 2

console.log(obj)
console.log(deepCopy)
