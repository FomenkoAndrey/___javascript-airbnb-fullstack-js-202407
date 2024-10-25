// Date.now()
console.log('Поточний час (мс від Unix епохи):', Date.now())

const d = new Date().toISOString()
console.log(d)

const d2 = new Date().toLocaleString()
console.log(d2)

const date = new Date(2019, 02, 10, 12, 30, 0);

const options = {
  era: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
  timezone: 'UTC',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
};

// воскресенье, 10 марта 2019 г. от Рождества Христова, 12:30:00
console.log(date.toLocaleString('uk', options));

// Sunday, March 10, 2019 Anno Domini, 12:30:00 PM
console.log(date.toLocaleString('en-US', options)); 
