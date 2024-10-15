/* eslint-disable no-var */
/* eslint-disable vars-on-top */
const greet = function (msg, divider) {
  console.log(this)
  console.log(`${msg}${divider} ${this.name}`)
}

const person = {
  name: 'John',
  greet,
}

const person2 = {
  name: 'Bob',
}

const person3 = {
  name: 'Mary',
  greet,
}

person3.greet.call(person, 'Hello', '!!!')
person3.greet.apply(person2, [ 'Hello', '!!!' ])
person3.greet('Hi', '!')

// const greetJohn = greet.bind(person)
// greetJohn('Hi', '!!!')

const greetJohn = greet.bind(person, 'Hi', '!')
greetJohn()
