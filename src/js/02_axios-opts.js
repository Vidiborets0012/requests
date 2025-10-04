import axios from 'axios';
import '../css/axios.css';

/**
 * Робимо рефакторинг авторизації запитів з ключами
 *
 * Як у Axios передавати search params та headers
 *
 * Для прикладу використовуємо https://pixabay.com/api/docs/
 *
 */

const API_KEY = '45489972-425dbd0ae29bdd8e452daca41';
const list = document.querySelector('.list');

// axios('https://jsonplaceholder.typicode.com/todos', {
//   params: {
//     _limit: 10,
//     _page: 3,
//   },
// })
//   .then(res => {
//     console.log('res:', res);
//     console.log('res.data:', res.data);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// axios('https://pixabay.com/api', {
//   params: {
//     key: API_KEY,
//     q: 'cats',
//   },
// })
//   .then(res => {
//     console.log(res);
//     list.insertAdjacentHTML('beforeend', createMarkup(res.data.hits));
//   })
//   .catch(error => {
//     console.log(error);
//   });

// function createMarkup(arr) {
//   return arr
//     .map(
//       ({ previewURL, tags }) => `
//   <li>
//     <img src='${previewURL}' alt='${tags}' width='300'>
//   </li>`
//     )
//     .join('');
// }

// axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

// axios('/users')
//   .then(res => {
//     console.log(res.data);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// axios('/todos')
//   .then(res => {
//     console.log(res.data);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// *************************
// *************************

// const instance = axios.create({
//   baseURL: 'https://jsonplaceholder.typicode.com',
// });

// const instance2 = axios.create({
//   baseURL: 'https://pixabay.com/api',
//   params: {
//     key: API_KEY,
//     q: 'cats',
//   },
// });

// instance('/users')
//   .then(res => {
//     console.log(res.data);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// instance2()
//   .then(res => {
//     console.log(res.data);
//   })
//   .catch(error => {
//     console.log(error);
//   });
