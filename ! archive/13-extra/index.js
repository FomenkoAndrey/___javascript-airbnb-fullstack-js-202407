// ? Vanilla JavaScript
// const header = document.querySelector('h1')
// header.innerHTML = 'Hello, DOM!'
// header.style.color = 'red'

// ! jQuery
$('h1').html('Hello, jQuery!').css('color', 'blue')

// ? Vanilla JavaScript
// const items = document.querySelectorAll('li')

// for (let i = 0; i < items.length; i++) {
//   const element = items[i]
//   console.log(element)
//   element.innerHTML = 'Hello, Vanilla!'
//   element.style.color = 'green'
// }

// ! jQuery
// $('li').html('Hello, jQuery!').css('color', 'green')

// ? Vanilla JavaScript
// const ul = document.querySelector('ul')

// function handler(e) {
//   const { target } = e
//   if (target.tagName.toLowerCase() === 'li') {
//     console.log(target)
//     target.innerHTML = 'Hello, Vanilla!'
//     target.style.color = 'red'
//   }
// }

// ul.addEventListener('click', handler)

// ! jQuery
$('ul').on('click', 'li', function () {
  this.innerHTML = 'Hello, Vanilla!'
  this.style.color = 'red'
})
