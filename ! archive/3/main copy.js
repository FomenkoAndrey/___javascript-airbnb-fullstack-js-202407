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

var car = Object.create({
  name: 'Toyota',
  age: 25,
})

car.driver = 'John'
car.owner = 'Andrii'
car.age = '15'

console.log(car)
console.log(car.name)

console.log(car.age)
delete car.age
console.log(car.age)

console.log(car.owner)
delete car.owner
console.log(car.owner)
