const person = {
  name: 'John',
  age: 32,
}

// ! for .. in
// for (const key in person) {
//   console.log(key, person[key])
// }

// ! Object.keys()
const keys = Object.keys(person)
console.log(keys)
for (const key of keys) {
  console.log(key)
  console.log(key, person[key])
}

// ! Object.values()
const values = Object.values(person)
console.log(values)
for (const value of values) {
  console.log(value)
}

// ! Object.entries()
const entries = Object.entries(person)
console.log(entries)
for (const entrie of entries) {
  console.log(entrie)
  console.log(entrie[0], entrie[1])
}
