/* eslint-disable prefer-destructuring */
/* eslint-disable prefer-arrow-callback */
const ul = document.querySelector('ul')
let pointer = null

const handler = function (e) {
  const target = e.target

  if (target.tagName !== 'LI') return

  target.style.color = 'red'
  target.style.fontWeight = 'bold'

  if (pointer) {
    pointer.style.color = ''
    pointer.style.fontWeight = ''
  }

  pointer = target
}

ul.addEventListener('click', handler)
