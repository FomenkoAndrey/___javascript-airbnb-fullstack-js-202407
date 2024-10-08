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

var a = { x: 10 }
var b = { x: 20 }

a = b
console.log('🚀 ~ a.x:', a.x) // 20
console.log('🚀 ~ b.x:', b.x) // 20

a.x = 50
console.log('🚀 ~ a.x:', a.x) // 50
console.log('🚀 ~ b.x:', b.x) // ? 20
// a = 50
// console.log('🚀 ~ a:', a) // 50
// console.log('🚀 ~ b:', b) // 20

b.x = 90
console.log('🚀 ~ a.x:', a.x) // ? 50
console.log('🚀 ~ b.x:', b.x) // 90
// b = 90
// console.log('🚀 ~ a:', a) // 50
// console.log('🚀 ~ b:', b) // 90
