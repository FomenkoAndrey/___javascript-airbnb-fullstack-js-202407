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

var person = {
  name: 'John',
  age: 25,
  gender: 'male',
}
// response
person.last = 'Doe'
person.token = '123456'
person.key1234565476 = 'value'

// known properties
// console.log(person)
// console.log(person.name)
// console.log(person.age)

for (var key in person) {
  console.log(key, ':', person[key])
  console.log()
}
