const person = {
  name: 'John',
  // ! accessor
  _age: 25,
  get age() {
    return this._age
  },
  set age(v) {
    this._age = v < 0 ? 0 : v > 122 ? 122 : v
  },
  // ! prop
  // age: 25,
}

// ! prop
// ! accessor
console.log(person.age)
person.age = 30
console.log(person.age)

console.log(person.age)
person.age = 1230
console.log(person.age)

console.log(person.age)
person.age = -1230
console.log(person.age)

console.log()
