// inheritance
class Person {
  constructor(
    public name: string,
    public age: number,
    public gender: string
  ) {}
}

const p = new Person('John', 30, 'male')

class Developer extends Person {
  constructor(
    name: string,
    age: number,
    gender: string,
    public skills: string[]
  ) {
    super(name, age, gender)
  }
}

const d = new Developer('John', 30, 'male', ['typescript', 'javascript'])

// console.log(d)
// console.log(d.name)
// console.log(d.age)
// console.log(d.skills)

// abstract class
abstract class Phone {
  public year: number = 2024

  public abstract price: number
  public abstract phoneMessage(msg: string): string

  constructor(public model: string) {}

  public getPhoneYear() {
    return this.year
  }
}

class Xiaomi extends Phone {
  public price = 1000

  public phoneMessage(msg: string) {
    return `${this.model} is ${msg}`
  }
}

class Samsung extends Phone {
  public price = 2000

  public phoneMessage(msg: string) {
    return `${this.model} is not ${msg}`
  }
}

const xiaomi = new Xiaomi('Redmi Note 10')
const samsung = new Samsung('Galaxy S20')

console.log(xiaomi)
console.log(xiaomi.getPhoneYear())
console.log(xiaomi.phoneMessage('Hello'))

console.log(samsung)
console.log(samsung.getPhoneYear())
console.log(samsung.phoneMessage('Hello'))
