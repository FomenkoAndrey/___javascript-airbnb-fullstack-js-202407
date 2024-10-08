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

const obj = {
  prop: 42,
  complexProp: {
    innerProp: 5,
  },
}
Object.freeze(obj)
obj.prop = 10 // заморожене, не змінюється
obj.complexProp.innerProp = 10 // змінюється
console.log(obj.prop) // не змінюється
console.log(obj.complexProp.innerProp) // Очікуваний вивід: 10
