const Person = {
  constructor(name, age, sex) {
    this.name = name
    this.age = age
    this.sex = sex
    return this
  },
  greet() {
    console.log(`Hi, ${this.name}`)
  },
}

const person1 = Object.create(Person).constructor('John', 32, 'male')
const person2 = Object.create(Person).constructor('Bob', 25, 'male')
const person3 = Object.create(Person).constructor('Mary', 18, 'female')

console.log(person1)
console.log(person2)
console.log(person3)

// const person = {
//   name: 'John',
//   age: 32,
//   sex: 'male',
//   greet() {
//     console.log(`Hi, ${this.name}`)
//   },
// }

// const person2 = {
//   name: 'Bob',
//   age: 25,
//   sex: 'male',
//   greet() {
//     console.log(`Hi, ${this.name}`)
//   },
// }

// const person3 = {
//   name: 'Mary',
//   age: 18,
//   sex: 'female',
//   greet() {
//     console.log(`Hi, ${this.name}`)
//   },
// }
