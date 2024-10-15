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
}

Object.defineProperty(person, '_age', {
  enumerable: false,
  configurable: false,
  writable: true,
})

console.log(person.age)
person.age = 40
console.log(person.age)
person.age = 55
console.log(person.age)
