// Enums
const arr = ['html', 'css', 'js', 'typescript', 'react', 'node', 'express']

enum Skills {
  HTML,
  CSS,
  JS,
  TypeScript,
  React,
  Node,
  Express
}
console.log(Skills.HTML)
console.log(arr[Skills.HTML])

console.log(Skills.TypeScript)
console.log(arr[Skills.TypeScript])

console.log(Skills.React)
console.log(arr[Skills.React])

console.log(Skills.Node)
console.log(arr[Skills.Node])

const skillsTs = Skills.TypeScript
console.log('skillsTs:', skillsTs)

// Never

function error(message: string): never {
  throw new Error(message)
}

function fail(): never {
  error('This will never be called')
}

function infiniteLoop(): never {
  while (true) {
    console.log('infinite loop')
  }
}

// Void

function print(message: string): void {
  console.log(message)
}

// Null, Undefined

let numNullUndefined: number | null | undefined
numNullUndefined = 123
numNullUndefined = NaN
numNullUndefined = null
numNullUndefined = undefined
// numNullUndefined = true // error
// numNullUndefined = [true] //

// Unknown

function getValue(): unknown {
  return 123
}

const result: unknown = getValue()

if (typeof result === 'string') {
  console.log(result.toUpperCase()) // ok
} else if (typeof result === 'number') {
  console.log(result.toFixed(2)) // ok
} else {
  console.log('Unknown type')
}
// console.log(result.toUpperCase()) // error
// console.log(result.toFixed(2)) // error
