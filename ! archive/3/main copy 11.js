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

// var score = 75
// var msg
// if (score >= 50) {
//   msg = Ви пройшли тест.'
// } else {
//   msg = 'Ви не пройшли тест.'
// }
// console.log(msg)

// ! if .. else
// var score = 5
// var msg
// msg = score >= 50 ? 'Ви пройшли тест.' : 'Ви не пройшли тест.'
// console.log(msg)

// -----

// var score = 85
// if (score >= 90) {
//   console.log('Відмінно')
// } else if (score >= 75) {
//   console.log('Добре')
// } else {
//   console.log('Задовільно')
// }

// ! if .. else if .. else
var score = 85
var msg

msg = score >= 90
  ? 'Відмінно'
  : score >= 75
    ? 'Добре'
    : 'Задовільно'

console.log(msg)
