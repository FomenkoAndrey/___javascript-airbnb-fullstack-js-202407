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

var obj = { prop: 42 }
Object.freeze(obj)
obj.prop = 33 // Очікуваний вивід: TypeError (в режимі суворої строгості)
console.log(obj.prop) // Очікуваний вивід: 42
