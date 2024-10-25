const string = 'Some string'

let newString = string.replace('string', 'new string')
newString = newString.concat(' was updated')
newString = newString.toUpperCase()
newString = newString.slice(9)

console.log(newString)
