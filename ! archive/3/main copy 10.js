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

// var CityName = 'Kharkiv'
// var Status

// switch (CityName) {
//   case 'Kharkiv':
//     Status = 'City'
//     break
//   case 'Andreevka':
//     Status = 'Village'
//     break
//   case 'Bezlyudovka':
//     Status = 'Township'
//     break
//   default:
//     Status = 'somewhere in Ukraine'
// }

// console.log(`${CityName} ${Status}`)

// function numToStr(n) {
//   switch (n) {
//     case 0:
//       return 'zero'
//     case 1:
//       return 'one'
//     case 2:
//       return 'two'
//     case 3:
//       return 'three'
//     case 4:
//       return 'four'
//     case 5:
//       return 'fife'
//     case 6:
//       return 'six'
//     default:
//       return 'undefined'
//   }
// }

// console.log(numToStr(-1))
// console.log(numToStr(0))
// console.log(numToStr(1))
// console.log(numToStr(2))
// console.log(numToStr(3))
// console.log(numToStr(4))
// console.log(numToStr(5))
// console.log(numToStr(6))
// console.log(numToStr(123))

// ! refetch => new version of the object
const numToStr = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'fife',
  6: 'six',
  7: 'seven',
  zero: 0,
}

console.log(numToStr[-1])
console.log(numToStr[0])
console.log(numToStr[1])
console.log(numToStr[2])
console.log(numToStr[3])
console.log(numToStr[4])
console.log(numToStr[5])
console.log(numToStr[6])
console.log(numToStr[7])

console.log(numToStr[123])

console.log(numToStr.zero) // получим 0 - число
