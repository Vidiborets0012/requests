//Найбільш типові задачі пов'язані з читанням та зміною даних за допомогою Fetch API.

/*
Хід вирішення типової задачі (GET-запит)
Визначення URL та Ендпоінту: З'ясувати, куди надсилати запит (наприклад, https://jsonplaceholder.typicode.com/posts).

Створення Проміс-ланцюжка:

Викликати fetch(url).

Перевірка відповіді (Handling HTTP Errors): Обов'язково перевірити властивість response.ok (яка є true для кодів 200-299). Якщо false, кинути помилку (throw new Error(...)), щоб ланцюжок перейшов у .catch().

Парсинг JSON: Викликати response.json() і повернути його.

Обробка даних: Використати отримані дані в наступному .then() для відображення або подальшої логіки.

Обробка Помилок: Додати .catch() в кінці ланцюжка для обробки мережевих помилок або помилок, кинутих на етапі перевірки відповіді.
*/

// Типовий шаблон GET-запиту
/*
fetch(url)
  .then(response => {
    // КРОК 1: Перевірка на помилки HTTP (404, 500 тощо)
    if (!response.ok) {
      throw new Error(response.status); // Кидаємо помилку з кодом
    }
    // КРОК 2: Парсинг тіла відповіді у формат JSON
    return response.json();
  })
  .then(data => {
    // КРОК 3: Успішна робота з даними
    console.log(data);
  })
  .catch(error => {
    // КРОК 4: Обробка будь-яких помилок
    console.error('Сталася помилка при завантаженні:', error);
  });
*/

//Отримання списку ресурсів (GET)

//Отримати список усіх постів із тестового API і вивести їх заголовки.
/*
const postsUrl = 'https://jsonplaceholder.typicode.com/posts';

function fetchPosts() {
  console.log('Початок запиту...');
  fetch(postsUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(posts => {
      console.log('Отримано заголовки постів:');
      posts.forEach(post => console.log(`- ${post.title}`));
    })
    .catch(error => {
      console.error('Неможливо завантажити пости:', error);
    });
}
*/
// fetchPosts();

//Створення нового ресурсу (POST)

//Створити новий пост і отримати його ID.
/*
const postsUrl = 'https://jsonplaceholder.typicode.com/posts';
const newPostData = {
  title: 'Мій новий пост про Fetch API',
  body: 'Це тестовий контент.',
  userId: 1,
};

function createPost() {
  fetch(postsUrl, {
    method: 'POST', // Визначаємо метод POST
    headers: {
      'Content-Type': 'application/json', // Обов'язковий заголовок для JSON
    },
    body: JSON.stringify(newPostData), // Перетворюємо об'єкт у рядок JSON
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(createdPost => {
      // Сервер має повернути об'єкт з новим ID
      console.log('✅ Пост успішно створено. ID:', createdPost.id); // Наприклад, ID: 101
      console.log('Дані:', createdPost);
    })
    .catch(error => {
      console.error('Помилка при створенні поста:', error);
    });
}
*/
// createPost();

//Оновлення частини ресурсу (PATCH)

//Оновити лише заголовок існуючого поста з ID=1.
/*
const postId = 1;
const updateUrl = `https://jsonplaceholder.typicode.com/posts/${postId}`;
const patchData = {
  title: 'Оновлений заголовок (PATCHED)',
};

function updatePost() {
  fetch(updateUrl, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(patchData),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(updatedPost => {
      console.log(`✅ Пост ID ${postId} успішно оновлено.`);
      console.log('Новий заголовок:', updatedPost.title);
    })
    .catch(error => {
      console.error('Помилка при оновленні:', error);
    });
}
*/
// updatePost();

//Видалення ресурсу (DELETE)

//Видалити пост з ID=5.
/*
const postIdToDelete = 5;
const deleteUrl = `https://jsonplaceholder.typicode.com/posts/${postIdToDelete}`;

function deletePost() {
  fetch(deleteUrl, {
    method: 'DELETE', // Використовуємо метод DELETE
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      // При успішному видаленні тіло відповіді часто порожнє
      console.log(
        `✅ Пост ID ${postIdToDelete} успішно видалено. Статус: ${response.status}`
      );
    })
    .catch(error => {
      console.error('Помилка при видаленні:', error);
    });
}
*/
// deletePost();

//Обробка помилки 404 (Not Found)

//Завантажити неіснуючий ресурс, коректно обробити помилку 404.
/*
const wrongUrl = 'https://jsonplaceholder.typicode.com/non-existent-resource';

function fetchWrongResource() {
  fetch(wrongUrl)
    .then(response => {
      // КРОК 1: ПЕРЕВІРКА response.ok
      if (!response.ok) {
        // Якщо код 404, кидаємо помилку, щоб перейти в .catch
        throw new Error(`Ресурс не знайдено! Код: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log('Отримані дані (не очікувалося):', data);
    })
    .catch(error => {
      // КРОК 2: Обробляємо кинуту нами помилку
      console.error('❌ ПОМИЛКА ОБРОБКИ:', error.message); // Виведе: Ресурс не знайдено! Код: 404
    });
}
*/
// fetchWrongResource();
