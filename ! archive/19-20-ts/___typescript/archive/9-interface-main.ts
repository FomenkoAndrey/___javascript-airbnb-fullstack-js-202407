interface LengthInterface {
  length: number
}

function getLength(data: LengthInterface): void {
  console.log(data.length)
}

const test = { name: 'Test', length: 10 }
const data = { name: 'John', age: 20 }

getLength('Hello')
getLength([1, 2, 3])
getLength(test)

// -----------------------

// interface vs type
// ! interface
// інтерфейси можна розширювати
interface A {
  x: string
}
interface B extends A {
  y: number
}
// інтерфейси можна доповнювати
interface C {
  m: boolean
}
interface C {
  n: number
}
// ! type
// union
type NumOrString = number | string
// intersection
type NumAndString = number & string
// alias
type SomeNewType = NumAndString
// generics
type ArrayOf<T> = T[]

// -----------------------

// type Person = {
//   name: string
//   age: number
//   gender: 'male' | 'female'
//   greet(msg: string): void
// }

interface PersonInterface {
  name: string
  age: number
  gender: 'male' | 'female'
  greet(msg: string): void
}

interface GetSkillsInterface {
  skills: string[]
  getSkills(): string[]
}

const person: PersonInterface = {
  name: 'John',
  age: 20,
  gender: 'male',
  greet(msg: string) {
    console.log(msg)
  }
}

class Person implements PersonInterface, GetSkillsInterface {
  name: string = 'John'
  age: number = 20
  gender: 'male' | 'female' = 'male'
  skills: string[] = ['JavaScript', 'TypeScript']

  test = 'test' // some extra property allowed

  getSkills(): string[] {
    return this.skills
  }
  greet(msg: string) {
    console.log(msg)
  }
}

const p = new Person()
console.log(p)
p.greet('Hello')

// -----------------------

interface ShapeInterface {
  name: string
  area(): number
}

class Rectangle implements ShapeInterface {
  name: string = 'Rectangle'

  constructor(
    private width: number,
    private height: number
  ) {}

  area(): number {
    return this.width * this.height
  }
}

class Circle implements ShapeInterface {
  name: string = 'Circle'

  constructor(private radius: number) {}

  area(): number {
    return Math.PI * this.radius ** 2
  }
}

const rectangle = new Rectangle(100, 200)
console.log(rectangle.area())

const circle = new Circle(70)
console.log(circle.area())

const shapes: ShapeInterface[] = []
shapes[0] = rectangle
shapes[1] = circle

shapes.forEach((shape: ShapeInterface) => console.log(shape.area()))
