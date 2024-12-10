// Порівняння типів в JS та TS
function getNameJs() {
  return +'John'
}

function getAgeJs() {
  return 30 + ''
}

function getNameTs(): string {
  return 'John'
}

function getAgeTs(): number {
  return 30
}

// Функції з параметрами
function getName(name: string): string {
  return name
}

function getAge(age: number): number {
  return age
}

function getNameAge(name: string, age: number): string {
  return `${name} ${age}`
}

// Функції з параметрами за замовчуванням
function getNameAgeDefault(name: string = 'Peter', age: number = 18): string {
  return `${name} ${age}`
}

console.log(getNameAgeDefault('John', 30))
console.log(getNameAgeDefault('John'))
console.log(getNameAgeDefault())

// Функції без повернення значення
function log(str: string): void {
  console.log(str)
}

// Різні способи оголошення функцій
function sum(a: number, b: number): number {
  return a + b
}

// const sum = function (a: number, b: number): number {
//   return a + b
// }

const sum1 = (a: number, b: number): number => a + b
const sum2 = (a: number | string, b: number | string): number => +a + +b

const sum3: (a: number, b: number) => number = sum1
const sum4 = sum2
