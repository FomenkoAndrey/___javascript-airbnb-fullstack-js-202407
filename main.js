/* eslint-disable max-classes-per-file */
class Person {
  constructor(name, age, sex) {
    this.name = name
    this.age = age
    this.sex = sex
  }

  print() {
    console.log(`Name: ${this.name}`)
  }

  greet() {
    return `Hi, ${this.name}`
  }
}

const person1 = new Person('John', 32, 'male')
console.log(person1.greet())

class Developer extends Person {
  constructor(...args) {
    super(...args)
    this.skills = args[3] || []
  }

  greet() {
    const result = super.greet()
    console.log(`${result}! You are a developer!`)
  }
}

const developer1 = new Developer('Pavlo', 20, 'male', [ 'HTML', 'CSS', 'JavaScript' ])

console.log(developer1)
developer1.print()
developer1.greet()
