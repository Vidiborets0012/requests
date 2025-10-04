import axios from 'axios';

import '../css/axios.css';

/**
 * https://thecatapi.com/
 *
 * 1) Створити сторінку яка при завантаженні робить запит на бекенд і оримує
 *  всі доступні breeds. https://api.thecatapi.com/v1/breeds
 *
 * 2) В інтерфейсі є форма пошуку з прив'язаним datalist з завантаженими breeds.
 *
 * 3) Користувач в формі вводить або обирає необхідний breed і при сабміті форми
 *  виконується GET запит за зображенням.
 *
 * 4) Після запиту під формою відображається картка з зображенням.
 *
 * 5) Під час запиту під формую відображається loader
 */

/*
live_oBTaDry7pkRad84v3pwvr0m1B26neJzMO1PUyRDKjovZ6njmlA4VSMU5DaYY8Pi4
*/

const form = document.querySelector('#search-form');
const breedInput = document.querySelector('#breed-input');
const breedsList = document.querySelector('#breeds-list');
const loader = document.querySelector('#loader');
const catCard = document.querySelector('#cat-card');

form.addEventListener('submit', handleSubmit);

fetchBreeds();

function fetchBreeds() {
  axios('https://api.thecatapi.com/v1/breeds')
    .then(res => {
      console.log(res.data);
      breedsList.insertAdjacentHTML(
        'beforeend',
        createDatalistOptions(res.data)
      );
    })
    .catch(error => {
      console.log(error);
    });
}

function createDatalistOptions(arr) {
  return arr
    .map(
      ({ id, name }) => `
  <option value="${name}" data-id="${id}"></option>`
    )
    .join('');
}

function handleSubmit(event) {
  event.preventDefault();

  const myBreed = breedInput.value;
  // console.log('myBreed:', myBreed);
  const selectedBreed = [...breedsList.options].find(
    option => option.value.toLowerCase() === myBreed.toLowerCase().trim()
  );

  // console.log('selectedBreed:', selectedBreed);
  if (!selectedBreed) {
    alert('Оберіть існуючу породу!');
    return;
  }

  const breedId = selectedBreed.dataset.id;
  console.log('breedId:', breedId);
  loader.classList.remove('hidden');
  // catCard.innerHTML = '';

  axios(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(res => {
      console.log(res);
      if (res.data.length > 0) {
        const catUrl = res.data[0].url;

        catCard.innerHTML = `
          <div class="card">
            <img src="${catUrl}" alt="${myBreed}" class="card-img"/>
            <div class="card-body">
              <h3 class="card-title">${myBreed}</h3>
            </div>
          </div>`;
      } else {
        catCard.innerHTML = `<p class="error-text">Зображення не знайдено</p>`;
      }
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      loader.classList.add('hidden');
    });
}
