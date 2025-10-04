import axios from 'axios';
import '../css/axios.css';

/**
 * Додаємо та використовуємо бібліотеку https://axios-http.com/
 * Робимо рефакторинг
 * - Імпорт
 * - Запит
 * - Метод axios.get
 * - Обробка відповіді та помилки
 */

// const url = 'https://jsonplaceholder.typicode.com/todos';
// const list = document.querySelector('.todo-list');

// function createMarkup(arr) {
//   return arr
//     .map(
//       ({ title, completed }) => `
//   <li class='list-item'>
//     <input type='checkbox' ${completed && 'checked'}/>
//     <p>${title}</p>
//   </li>`
//     )
//     .join('');
// }

// fetch(url)
//   .then(res => {
//     if (!res.ok) {
//       throw new Error('Ooops');
//     }
//     return res.json();
//   })
//   .then(data => {
//     // console.log(data);
//     list.insertAdjacentHTML('beforeend', createMarkup(data));
//   })
//   .catch(err => {
//     console.log(err);
//   });

//axios

// console.log(axios(url));//Promise {<pending>}
// axios(url)
//   .then(res => {
//     console.log('res:', res);
//     console.log('res.data:', res.data);
//     list.insertAdjacentHTML('beforeend', createMarkup(res.data));
//   })
//   .catch(error => {
//     console.log(error);
//   });

// axios
//   .get(url)
//   .then(res => {
//     console.log('res:', res);
//     console.log('res.data:', res.data);
//     list.insertAdjacentHTML('beforeend', createMarkup(res.data));
//   })
//   .catch(error => {
//     console.log(error);
//   });

//Всередині функції запит, зовні обробка

// const fetchData = url => {
//   return axios(url);
// };

// fetchData(url)
//   .then(res => {
//     console.log(res);
//   })
//   .catch(error => {
//     console.log(error);
//   });
