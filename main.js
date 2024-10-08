/* eslint-disable prefer-template */
/* eslint-disable no-extra-label */
/* eslint-disable no-labels */
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

let j = 0
while (j < 10) {
  if (j === 9) {
    break // Припиняє цикл, коли j дорівнює 5
  }
  j++ // Збільшуємо лічильник на початку, тому що continue пропускає все після нього в циклі
  if (j % 2 === 0) {
    continue // Пропускає поточну ітерацію, якщо j є парним числом
  }
  console.log(j) // Виведе лише непарні числа до 5 (1, 3)
}
