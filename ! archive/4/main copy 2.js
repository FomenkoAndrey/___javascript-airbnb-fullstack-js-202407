/* eslint-disable prefer-arrow-callback */
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

// ? звичайни (синхронний) код
// function first() {
//   console.log('Це функція first')
// }

// function second() {
//   console.log('Це функція second')
// }

// // Виклик функцій
// first()
// second()

// ? асинхронний код, setTimeout
// setTimeout(function () {
//   console.log('Ця функція буде виконана через 5 секунду')
// }, 5000)

// ! асинхронний код не працює в порядку виклику
// function first() {
//   setTimeout(function () {
//     console.log('First function')
//   }, 5000)
// }

// function second() {
//   setTimeout(function () {
//     console.log('Second function')
//   }, 3000)
// }

// first()
// second()

// * асинхронний код з колбеком, працює в порядку виклику
// function first(callback) {
//   setTimeout(function () {
//     callback()
//     console.log('First function')
//   }, 5000)
// }

// function second() {
//   setTimeout(function () {
//     console.log('Second function')
//   }, 3000)
// }

// first(second)

// * приклад

function getUserData(callback) {
  console.log('Робимо запит на сервер...')

  setTimeout(function () {
    // Емуляція отримання даних від сервера
    var userData = {
      name: 'John',
      age: 25,
      email: 'john@mail',
    }
    console.log('Дані від сервера отримані')
    callback(userData)
  }, 2000)
}

function dispayUserData(data) {
  console.log('Дані користувача}', data)
}

getUserData(dispayUserData)
