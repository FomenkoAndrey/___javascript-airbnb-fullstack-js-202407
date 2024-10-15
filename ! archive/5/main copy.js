const error = new Error('My custom error')

console.dir(error)
console.log(error.message)

error.code = 1
error.statusCode = 500

console.log(error.code)
console.log(error.statusCode)
