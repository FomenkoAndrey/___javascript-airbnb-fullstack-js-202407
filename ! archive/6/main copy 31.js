function makeSound(animal) {
  animal.sound()
}

const dog = {
  sound() {
    console.log('Гав')
  },
}

const cat = {
  sound() {
    console.log('Мяу')
  },
}

makeSound(dog) // Виведе "Гав"
makeSound(cat) // Виведе "Мяу"

dog.sound()
cat.sound()
