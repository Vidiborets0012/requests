//Fetch API

//fetch(url, options)

/*
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    console.log('response:', response);
  })
  .catch(error => {
    // Error handling
  });
*/

//Перевірка відповіді

/*
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    console.log('response:', response);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Data handling
    console.log('Отримані дані:', data);
  })
  .catch(error => {
    // Error handling
    console.log('Помилка запиту:', error);
  });
*/

//HTTP-методи

/*
POST — створює новий ресурс.
GET — отримує набір ресурсів або один ресурс.
PUT — оновлює існуючий ресурс або створює новий.
PATCH — частково оновлює існуючий ресурс.
DELETE — видаляє ресурс.
*/

const options = {
  method: 'GET',
};

fetch('https://jsonplaceholder.typicode.com/users', options)
  .then(response => {
    console.log('response:', response);

    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then(data => {
    // Data handling
    console.log('Отримані дані:', data);
  })
  .catch(error => {
    // Error handling
    console.log('Помилка запиту:', error);
  });

//HTTP-заголовки

/*
Accept: text/html
Content-Type: application/json
*/

//передати заголовки у fetch() =>
/*
fetch("some-url", {
	headers: {
	  "Content-Type": "application/json",
	  "X-Custom-Header": "custom value",
	}
})
*/

//Кросдоменні запити
