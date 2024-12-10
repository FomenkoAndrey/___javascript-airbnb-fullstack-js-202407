function consoleLog(constructorFn: Function) {
  console.log(constructorFn)
}

function conditionalLog(flag: boolean = false) {
  return flag ? consoleLog : () => {}
}

// @consoleLog
@conditionalLog(true)
class Person {
  constructor(
    public name: string,
    public age: number
  ) {
    console.log('Hello from Person constructor!')
  }
}

const person = new Person('John', 30)

// -------------------------

// Цю функцію-декоратор можна декомпозувати в інший файл
function AddPrinter(constructorFn: Function) {
  console.dir(constructorFn)

  constructorFn.prototype.printer = function () {
    const p = document.createElement('p')

    p.innerHTML = `
        Developer: <br>
        ${JSON.stringify(this)}<br>
        Name: ${this.name}<br>
        Age: ${this.age}<br>
        Gender: ${this.gender}<br>
        Skills: ${this.skills.join(', ')}
      `

    document.body.appendChild(p)
  }
}

@AddPrinter
class Developer {
  constructor(
    public name: string,
    public age: number,
    public gender: string,
    public skills: string[]
  ) {}
}

const developer: any = new Developer('John', 30, 'male', ['JavaScript', 'TypeScript', 'React'])

developer.printer()



function Override(label: string) {
  // console.log(label)
  return (target: any, key: string) => {
    // console.log(target)
    // console.log(key)
    Object.defineProperty(target, key, {
      configurable: false,
      get: () => label,
      set: (_) => {}
    })
  }
}

function ReadOnly(target: any, key: string) {
  Object.defineProperty(target, key, {
    get: () => 'Read Only Property',
    set: (_) => {}
  })
}

class Test {
  // @Override('New Overrided Name')
  @ReadOnly
  name: string = 'Any string'
}

const test = new Test()
console.log(test.name)
test.name = 'New Name'
console.log(test.name)
