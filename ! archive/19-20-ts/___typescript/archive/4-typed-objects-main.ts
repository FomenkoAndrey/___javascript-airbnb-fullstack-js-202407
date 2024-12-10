const personJs = {
  name: 'Bob',
  age: 30,
  gender: 'male',
  skills: ['JavaScript', 'TypeScript'],
  print() {
    console.log(this.name)
  }
}

const typedPerson: {
  name: string
  age: number
  gender: string
  skills: string[]
  print: () => void
} = {
  name: 'John',
  age: 40,
  gender: 'male',
  skills: ['JavaScript', 'TypeScript'],
  print(): void {
    console.log(this.name)
  }
}

type Person = {
  name: string
  age: number
  gender?: string
  skills: string[]
  print?: () => void
  getSkills?: () => string[]
}

const person1: Person = {
  name: 'John',
  age: 40,
  gender: 'male',
  skills: ['JavaScript', 'TypeScript'],
  print(): void {
    console.log(this.name)
  }
}
const person2: Person = {
  name: 'John',
  age: 40,
  skills: ['JavaScript', 'TypeScript']
}
const person3: Person = {
  name: 'John',
  age: 40,
  gender: 'male',
  skills: ['JavaScript', 'TypeScript'],
  print(): void {
    console.log(this.name)
  },
  getSkills(): string[] {
    return this.skills
  }
}

type Developer = {
  level: string
  experience: number
}

const seniorDeveloper: Person & Developer = {
  name: 'John',
  age: 40,
  gender: 'male',
  skills: ['JavaScript', 'TypeScript'],
  print(): void {
    console.log(this.name)
  },
  getSkills(): string[] {
    return this.skills
  },
  level: 'senior',
  experience: 10
}

type SeniorDeveloper = Person & Developer

const teamLead: SeniorDeveloper = {
  name: 'Mary',
  age: 20,
  gender: 'female',
  skills: ['JavaScript', 'TypeScript'],
  print(): void {
    console.log(this.name)
  },
  getSkills(): string[] {
    return this.skills
  },
  level: 'teamLead',
  experience: 7
}

const newHire: Partial<SeniorDeveloper> = {
  name: 'Andrii',
  level: 'senior',
  experience: 10
}
