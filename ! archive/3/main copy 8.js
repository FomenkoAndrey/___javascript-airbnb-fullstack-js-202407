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
// if (score >= 50) {
//   console.log('Ви пройшли тест.')
// } else {
//   console.log('Ви не пройшли тест.')
// }

// var score = 85
// if (score >= 90) {
//   console.log('Відмінно')
// } else if (score >= 75) {
//   console.log('Добре')
// } else {
//   console.log('Задовільно')
// }

var CityName = 'Kharkiv'
var Status

switch (CityName) {
  case 'Kharkiv':
    Status = 'City'
    break
  case 'Andreevka':
    Status = 'Village'
    break
  case 'Bezlyudovka':
    Status = 'Township'
    break
  default:
    Status = 'somewhere in Ukraine'
}

console.log(`${CityName} ${Status}`)
