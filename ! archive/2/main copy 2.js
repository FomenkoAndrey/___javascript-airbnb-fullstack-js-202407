/* eslint-disable no-new-wrappers */
/* eslint-disable object-shorthand */
/* eslint-disable vars-on-top */
/* eslint-disable eqeqeq */
/* eslint-disable no-extra-semi */
/* eslint-disable semi-style */
/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/* eslint-disable no-var */
/* eslint-disable semi */

var age = 0
var defaultAge = 18

// var result = age || defaultAge
var result = age ?? defaultAge

console.log(result)

var firstName = 'Andrii'
var name2 = ''
var lastName = 'Fomenko'

var result2 = `${firstName} ${name2 ?? 'Ivanovich'} ${lastName}`

console.log(result2)
