import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{a as s}from"./assets/vendor-CWxt7QI6.js";/* empty css                     */const l=document.querySelector("#search-form"),u=document.querySelector("#breed-input"),n=document.querySelector("#breeds-list"),r=document.querySelector("#loader"),d=document.querySelector("#cat-card");l.addEventListener("submit",h);m();function m(){s("https://api.thecatapi.com/v1/breeds").then(e=>{console.log(e.data),n.insertAdjacentHTML("beforeend",p(e.data))}).catch(e=>{console.log(e)})}function p(e){return e.map(({id:o,name:a})=>`
  <option value="${a}" data-id="${o}"></option>`).join("")}function h(e){e.preventDefault();const o=u.value,a=[...n.options].find(t=>t.value.toLowerCase()===o.toLowerCase().trim());if(!a){alert("Оберіть існуючу породу!");return}const c=a.dataset.id;console.log("breedId:",c),r.classList.remove("hidden"),s(`https://api.thecatapi.com/v1/images/search?breed_ids=${c}`).then(t=>{if(console.log(t),t.data.length>0){const i=t.data[0].url;d.innerHTML=`
          <div class="card">
            <img src="${i}" alt="${o}" class="card-img"/>
            <div class="card-body">
              <h3 class="card-title">${o}</h3>
            </div>
          </div>`}else d.innerHTML='<p class="error-text">Зображення не знайдено</p>'}).catch(t=>{console.log(t)}).finally(()=>{r.classList.add("hidden")})}
//# sourceMappingURL=03_practice.js.map
