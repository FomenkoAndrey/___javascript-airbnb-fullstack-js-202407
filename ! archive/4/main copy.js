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

function main(arg) {
  if (typeof arg === 'function') {
    console.log(arg())
    return
  }
  console.log(arg)
}

main('str')
main(123)
main(true)
main(null)
main({})
main([])
main(function () { console.log('innerFunc done') })

var innerFn = function () {
  console.log('innerFunc done')
}

main(innerFn)
