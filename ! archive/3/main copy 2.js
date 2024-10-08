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

var a = 10
var b = 20

a = b
console.log('🚀 ~ a:', a) // 20
console.log('🚀 ~ b:', b) // 20

a = 50
console.log('🚀 ~ a:', a) // 50
console.log('🚀 ~ b:', b) // 20

b = 90
console.log('🚀 ~ a:', a) // 50
console.log('🚀 ~ b:', b) // 90
