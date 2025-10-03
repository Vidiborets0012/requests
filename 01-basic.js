import"./assets/modulepreload-polyfill-B5Qt9EMX.js";const s=document.querySelector(".todo-list");function l(o){return o.map(({id:t,title:c,completed:n})=>`
  <li class='list-item' data-id='${t}'>
    <input type='checkbox' ${n&&"checked"}/>
    <p>${c}</p>
  </li>`).join("")}function e(o){return fetch(o).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}e("https://jsonplaceholder.typicode.com/todos").then(o=>{console.log("todos:",o),s.insertAdjacentHTML("beforeend",l(o))}).catch(o=>{console.log(o)});e("https://jsonplaceholder.typicode.com/posts").then(o=>{console.log("posts:",o)}).catch(o=>{console.log(o)});
//# sourceMappingURL=01-basic.js.map
