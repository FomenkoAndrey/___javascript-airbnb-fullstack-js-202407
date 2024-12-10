class Person {
  constructor(
    public name: string,
    public age: number,
    public gender: string,
    public skills: string[]
  ) {}
}

const p = new Person('John', 30, 'male', ['JavaScript', 'TypeScript'])

console.log(p.name)
console.log(p.skills)
