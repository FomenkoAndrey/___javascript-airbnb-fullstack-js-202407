// ! встановлення
// Припустимо, користувач обрав темну тему
const userTheme = 'dark'

// Зберігаємо це налаштування у localStorage
localStorage.setItem('theme', userTheme)

// ! отримання
const savedTheme = localStorage.getItem('theme') || 'light'

console.log(savedTheme)

// ! видалення
// Якщо користувач вирішив скинути налаштування теми
localStorage.removeItem('theme')
