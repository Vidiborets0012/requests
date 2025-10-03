/**
 * Авторизація запитів з ключами
 * Які бувають:
 * - у query string
 * - у хедерах
 *
 * Для прикладу використовуємо https://pixabay.com/api/docs/
 */

// const API_KEY = '45489972-425dbd0ae29bdd8e452daca41';
/*
const params = new URLSearchParams({
  key: '45489972-425dbd0ae29bdd8e452daca41',
  q: 'cats',
});
const list = document.querySelector('.list');

//`https://pixabay.com/api/?key=${API_KEY}&q=cats`
fetch(`https://pixabay.com/api/?${params}`)
  .then(res => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }

    return res.json();
  })
  .then(data => {
    console.log(data);
    list.insertAdjacentHTML('beforeend', createMarkup(data.hits));
  })
  .catch(error => {
    console.log(error);
  });

function createMarkup(arr) {
  return arr
    .map(
      ({ previewURL, tags, id }) => `
  <li class='list-item' data-id='${id}'>
    <img src='${previewURL}' alt='${tags}' width='300'>

  </li>`
    )
    .join('');
}
*/
