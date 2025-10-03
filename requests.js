import"./assets/modulepreload-polyfill-B5Qt9EMX.js";const t={method:"GET"};fetch("https://jsonplaceholder.typicode.com/users",t).then(o=>{if(console.log("response:",o),!o.ok)throw new Error(o.status);return o.json()}).then(o=>{console.log("Отримані дані:",o)}).catch(o=>{console.log("Помилка запиту:",o)});
//# sourceMappingURL=requests.js.map
