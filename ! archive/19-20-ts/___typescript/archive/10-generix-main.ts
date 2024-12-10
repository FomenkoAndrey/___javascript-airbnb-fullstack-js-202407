function getData<T>(data: T): T {
  return data
}

console.log(getData('Hello World').toUpperCase())
console.log(getData(123).toFixed(2))
console.log(getData([123]).find((x) => x > 100))

const genericData: <T>(d: T) => T = getData

class Multiply<T extends number | string> {
  constructor(
    private a: T,
    private b: T
  ) {}

  getResult(): number {
    return +this.a * +this.b
  }
}

const multiplyNumber = new Multiply(2, 3)
const multiplyString = new Multiply('2', '3')

console.log(multiplyNumber.getResult())
console.log(multiplyString.getResult())

// const mNum: Multiply<number> = new Multiply(2, 3)
// const mNum: Multiply<number> = new Multiply<number>(2, 3)
// const mStr = new Multiply<string>('2', '3')
