// const fetchUsersBtn = document.querySelector('.btn');
// // console.log('fetchUsersBtn:', fetchUsersBtn);
// const userList = document.querySelector('.user-list');
// // console.log('userList:', userList);

/*
fetchUsersBtn.addEventListener('click', () => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(users => {
      // Дані від бекенда
      console.log(users);

      const markup = users
        .map(user => {
          return `<li>
	          <p><b>Name</b>: ${user.name}</p>
	          <p><b>Email</b>: ${user.email}</p>
	          <p><b>Company</b>: ${user.company.name}</p>
	        </li>`;
        })
        .join('');

      userList.insertAdjacentHTML('beforeend', markup);
    })
    .catch(error => console.log(error));
});
*/

/*
fetchUsersBtn.addEventListener('click', () => {
  fetchUsers()
    .then(users => renderUsers(users))
    .catch(error => console.log(error));
});

function fetchUsers() {
  return fetch('https://jsonplaceholder.typicode.com/users').then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function renderUsers(users) {
  const markup = users
    .map(user => {
      return `<li>
          <p><b>Name</b>: ${user.name}</p>
          <p><b>Email</b>: ${user.email}</p>
          <p><b>Company</b>: ${user.company.name}</p>
        </li>`;
    })
    .join('');
  userList.insertAdjacentHTML('beforeend', markup);
}
*/

/*
Життєвий цикл AJAX-запиту
Подія (Event): Користувач клікає на кнопку, або спрацьовує таймер.

Запит (Request): JavaScript створює та надсилає асинхронний HTTP-запит (GET, POST, PUT, DELETE) на сервер (через Fetch).

Сервер (Server): Сервер обробляє запит, взаємодіє з базою даних і готує відповідь (найчастіше у форматі JSON).

Відповідь (Response): JavaScript отримує відповідь від сервера.

Парсинг та Обробка (Parsing): JavaScript обробляє отримані дані (наприклад, перетворює JSON у JavaScript-об'єкт).

Оновлення DOM (Update): JavaScript оновлює лише потрібну частину HTML-сторінки, не перезавантажуючи її повністю.
*/

const loadBtn = document.querySelector('.btn');
const usersList = document.querySelector('.user-list');
const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

loadBtn.addEventListener('click', handleLoadUsers);

function handleLoadUsers() {
  loadBtn.disabled = true; // Вимкнути кнопку під час завантаження

  fetch(USERS_URL)
    .then(response => {
      // Крок 1: Перевірка відповіді
      if (!response.ok) {
        throw new Error(`Помилка: ${response.status}`);
      }
      // Крок 2: Парсинг JSON
      return response.json();
    })
    .then(users => {
      // Крок 3: Створення розмітки та оновлення DOM
      const markup = users
        .map(user => `<li>${user.name} (${user.email})</li>`)
        .join('');
      usersList.innerHTML = markup;
      console.log('✅ Дані успішно завантажено та відображено.');
    })
    .catch(error => {
      // Крок 4: Обробка помилок AJAX
      console.error('❌ Виникла помилка AJAX:', error);
      usersList.innerHTML = `<li>Помилка завантаження: ${error.message}</li>`;
    })
    .finally(() => {
      // Крок 5: Завжди вмикати кнопку після завершення
      loadBtn.disabled = false;
    });
}
