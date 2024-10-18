const fruits = new Set([ 'apple', 'banana', 'orange' ])

// Ітерація за допомогою for...of
for (const fruit of fruits) {
  console.log(fruit)
}

// Ітерація за допомогою forEach
fruits.forEach(fruit => {
  console.log(fruit)
})

// Використання методу keys()
console.log(fruits.keys())
for (const key of fruits.keys()) {
  console.log(key)
}

// Використання методу values()
console.log(fruits.values())
for (const value of fruits.values()) {
  console.log(value)
}

// Використання методу entries()
console.log(fruits.entries())
for (const entry of fruits.entries()) {
  console.log(entry)
}
