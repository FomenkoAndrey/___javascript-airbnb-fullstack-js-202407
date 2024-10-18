const functionality = {
  greet(msg) {
    console.log(msg)
  },
  print() {
    console.log(`${this.first} ${this.last}`)
  },
}

const person = {
  first: 'John',
  last: 'Doe',
}

// person.__proto__ = functionality
Object.setPrototypeOf(person, functionality)

// console.log(person.__proto__)
console.log(Object.getPrototypeOf(person))

console.log(person)

person.greet('Hello')
person.print()
