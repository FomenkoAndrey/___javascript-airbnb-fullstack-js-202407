/* eslint-disable prefer-rest-params */
const Person = function (name, age, sex) {
  this.name = name
  this.age = age
  this.sex = sex
}

Person.prototype.print = () => console.log(`Name: ${this.name}`)
Person.prototype.greet = function () {
  console.log(`Hi, ${this.name}`)
}

// const person1 = new Person('John', 32, 'male')

const Developer = function (name, age, sex, skills) {
  Person.apply(this, arguments)
  this.skills = skills
}

Developer.prototype = Object.create(Person.prototype)
Developer.prototype.constructor = Developer

Developer.prototype.develop = function () {
  console.log('Working...')
}

const developer1 = new Developer('Pavlo', 20, 'male', [ 'HTML', 'CSS', 'JavaScript' ])

console.log(developer1)
developer1.print()
developer1.greet()
developer1.develop()
