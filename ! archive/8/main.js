// Збереження cookie
document.cookie = `user=JohnDoe; max-age=${7 * 24 * 60 * 60}`

// Отримання значення cookie
const user = document.cookie
  .split('; ')
  .find(row => row.startsWith('user='))
  .split('=')[1]

console.log('Користувач:', user)
