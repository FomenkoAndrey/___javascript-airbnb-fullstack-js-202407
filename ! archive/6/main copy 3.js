// Основний об'єкт
const vehicle = {
  hasWheels: true,
  describe() {
    return `Це транспортний засіб з колесами: ${this.hasWheels}`
  },
}

// Створення нового об'єкта, який наслідує властивості від vehicle
const car = Object.create(vehicle)
car.hasEngine = true // Додавання нової властивості до car
car.describe = function () {
  return `${vehicle.describe.call(this)} та двигуном: ${this.hasEngine}`
}

console.log(vehicle.describe()) // "Це транспортний засіб з колесами: true"
console.log(car.describe()) // "Це транспортний засіб з колесами: true та двигуном: true"
