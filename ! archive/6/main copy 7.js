const Person = {
  constructor(name, age, sex) {
    this.name = name
    this.age = age
    this.sex = sex
    return this
  },
  greet() {
    console.log(`Hi, ${this.name}`)
  },
}

// const person1 = Object.create(Person).constructor('John', 32, 'male')

const Developer = Object.create(Person)

Developer.constructor = function (name, age, sex, skills) {
  Person.constructor.apply(this, arguments)
  this.skills = skills
  return this
}

Developer.develop = function () {
  console.log('Working...')
}

const developer1 = Object.create(Developer).constructor('Pavlo', 20, 'male', [ 'HTML', 'CSS', 'JavaScript' ])

console.log(developer1)
developer1.develop()
