let strJs = 'Hello JS'
let strTs: string = 'Hello TS'

let numJs = 10
let numTs: number = 10

let boolJs = true
let boolTs: boolean = true

let anyType: any
anyType = 'Hello'
anyType = 10
anyType = true

let strNumType: string | number
strNumType = 'Hello'
strNumType = 10
// strNumType = true // Error
// strNumType = [1, 2, 3] // Error

let strNumBoolType: string | number | boolean
strNumBoolType = 'Hello'
strNumBoolType = 10
strNumBoolType = true
// strNumBoolType = [1, 2, 3] // Error
