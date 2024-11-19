// const getData = (url) =>
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => data.Search)

// getData('http://www.omdbapi.com/?apikey=18b8609f&s=batman')
//   .then((movies) => movies.forEach((movie) => console.log(movie)))
//   .catch((err) => console.log(err))

// ! C R U D

// ! CREATE => POST
// async function postData(url, data) {
//   const response = await fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
//   })
//   if (!response.ok) throw new Error(response.statusText)
//   return response.json()
// }
// postData('https://jsonplaceholder.typicode.com/posts', {
//   title: 'foo',
//   body: 'bar',
//   userId: 1
// })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err))

// ! READ => GET
// async function getData(url) {
//   const response = await fetch(url, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//   if (!response.ok) throw new Error(response.statusText)
//   return response.json()
// }
// getData('https://jsonplaceholder.typicode.com/posts')
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err))

// ! UPDATE => PUT / PATCH
// ? PUT
// async function putData(url, data) {
//   const response = await fetch(url, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
//   })
//   if (!response.ok) throw new Error(response.statusText)
//   return response.json()
// }
// putData('https://jsonplaceholder.typicode.com/posts/1', {
//   title: 'foo',
//   body: 'bar'
// })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err))

// ? PATCH
// async function patchData(url, data) {
//   const response = await fetch(url, {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
//   })
//   if (!response.ok) throw new Error(response.statusText)
//   return response.json()
// }
// patchData('https://jsonplaceholder.typicode.com/posts/3', {
//   title: 'foo',
//   body: 'bar'
// })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err))

// ! DELETE => DELETE
// async function deleteData(url) {
//   const response = await fetch(url, {
//     method: 'DELETE'
//   })
//   if (!response.ok) throw new Error(response.statusText)
//   return response.ok
// }
// deleteData('https://jsonplaceholder.typicode.com/posts/3')
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err))
