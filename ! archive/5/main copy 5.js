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

Object.defineProperty(person, 'sex', {
  value: 'male',
  enumerable: false,
  writable: false,
  configurable: false,
})

// Object.defineProperty(person, 'sex', {
//   writable: true,
//   enumerable: true,
// })

console.log(person.sex)
person.sex = 'female'
console.log(person.sex)

console.log(Object.getOwnPropertyDescriptor(person, 'sex'))

console.log('direct:', person.sex)

console.log('for ... in:')

for (const key in person) {
  console.log(key, ':', person[key])
}
