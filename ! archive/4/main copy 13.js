/* eslint-disable no-use-before-define */
/* eslint-disable strict */
/* eslint-disable no-shadow */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable prefer-template */
/* eslint-disable no-extra-label */
/* eslint-disable no-labels */
/* eslint-disable no-fallthrough */
/* eslint-disable default-case */
/* eslint-disable guard-for-in */
/* eslint-disable no-new-wrappers */
/* eslint-disable object-shorthand */
/* eslint-disable vars-on-top */
/* eslint-disable eqeqeq */
/* eslint-disable no-extra-semi */
/* eslint-disable semi-style */
/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/* eslint-disable no-var */

function createUrlGenerator(tld) {
  return function (subdomin) {
    return `https://${subdomin}.${tld}`
  }
}

var comUrlGenerator = createUrlGenerator('com')
var uaUrlGenerator = createUrlGenerator('ua')

console.log(comUrlGenerator('google'))
console.log(comUrlGenerator('yahoo'))
console.log(comUrlGenerator('me'))

console.log(uaUrlGenerator('meta'))
console.log(uaUrlGenerator('i'))
