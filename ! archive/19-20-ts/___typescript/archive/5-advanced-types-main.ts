// ! Intersection Types
type Employee = {
  name: string
  startDate: Date
}

type Workman = {
  hasBadge: boolean
}

type EmployeeWorkman = Employee & Workman

const badgedEmployee: EmployeeWorkman = {
  name: 'John',
  startDate: new Date(),
  hasBadge: true
}

// ! Partial<T>
type PartialEmployee = Partial<Employee>

const partialEmployee: PartialEmployee = {
  name: 'John'
  // startDate: new Date()
}

// ! Readonly<T>
type ReadonlyEmployee = Readonly<Employee>

const readonlyEmployee: ReadonlyEmployee = {
  name: 'John',
  startDate: new Date()
}
// readonlyEmployee.name = 'Bob'

// ! Required<T>
type RequiredEmployee = Required<PartialEmployee>

const requiredEmployee: RequiredEmployee = {
  name: 'John',
  startDate: new Date()
}

// ! Pick<T, K>
type PickEmployee = Pick<EmployeeWorkman, 'name' | 'startDate' | 'hasBadge'>

const pickEmployee: PickEmployee = {
  name: 'John',
  startDate: new Date(),
  hasBadge: true
}

// ! Record<K, T>
type EmployeeRecord = Record<string, Employee>

const employeeRecord: EmployeeRecord = {
  manager: { name: 'John', startDate: new Date() },
  assistant: { name: 'Bob', startDate: new Date() }
}

console.log(employeeRecord)

// ! Exclude<T, U>
type Role = 'manager' | 'assistant' | 'intern'
type NonInternRole = Exclude<Role, 'intern'>

const employee1: NonInternRole = 'manager'
const employee2: NonInternRole = 'assistant'
// const employee3: NonInternRole = 'intern' // error

// ! MyExclude<T, U>
type MyExclude<T, U> = T extends U ? never : T

type Colors = 'red' | 'green' | 'blue'
type ExcludeRed = MyExclude<Colors, 'red'>
const color: ExcludeRed = 'green'
// const color: ExcludeRed = 'red' // error

type ExcludeRedGreen = MyExclude<Colors, 'red' | 'green'>
const color2: ExcludeRedGreen = 'blue'
// const color2: ExcludeRedGreen = 'green' // error
