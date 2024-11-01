/* eslint-disable prefer-arrow-callback */
const liItems = document.querySelectorAll('li')
let pointer = null

const handler = function () {
  console.log(this.innerText)
  this.style.color = 'red'
  this.style.fontWeight = 'bold'

  if (pointer) {
    pointer.style.color = ''
    pointer.style.fontWeight = ''
  }

  pointer = this
}

liItems.forEach(function (li) {
  li.addEventListener('click', handler)
})
