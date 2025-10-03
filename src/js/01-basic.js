/**
 *
 * Основи запиту
 * - Fetch API
 *
 * - URL запиту
 * - Вкладка Network
 *
 * - Обробка відповіді response (404 з fetch)
 *
 *
 * https://jsonplaceholder.typicode.com/todos
 */

// console.log(fetch(`https://jsonplaceholder.typicode.com/todos`)); //Promise {<pending>}

const list = document.querySelector('.todo-list');
const URL = 'https://jsonplaceholder.typicode.com/todos';

/*
// const params = new URLSearchParams({
//   _limit: 10,
//   _page: 2,
// });

//https://jsonplaceholder.typicode.com/todos?_limit=10&_page=2
// `${URL}?params`
fetch(`${URL}?_limit=10&_page=2`)
  .then(res => {
    // console.log(res); //Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/todos', redirected: false, status: 200, ok: true, …}
    // console.log(res.json()); //Promise {<pending>}
    if (!res.ok) {
      throw new Error(res.status);
    }

    return res.json();
  })
  .then(data => {
    console.log(data);
    list.insertAdjacentHTML('beforeend', createMarkup(data));
  })
  .catch(error => {
    console.log(error);
  });
*/

function createMarkup(arr) {
  return arr
    .map(
      ({ id, title, completed }) => `
  <li class='list-item' data-id='${id}'>
    <input type='checkbox' ${completed && 'checked'}/>
    <p>${title}</p>
  </li>`
    )
    .join('');
}

//Всередині функції запит, зовні обробка

function fetchData(url) {
  return fetch(url).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }

    return res.json();
  });
}

fetchData(`https://jsonplaceholder.typicode.com/todos`)
  .then(data => {
    console.log('todos:', data);
    list.insertAdjacentHTML('beforeend', createMarkup(data));
  })
  .catch(error => {
    console.log(error);
  });

fetchData(`https://jsonplaceholder.typicode.com/posts`)
  .then(data => {
    console.log('posts:', data);
  })
  .catch(error => {
    console.log(error);
  });
