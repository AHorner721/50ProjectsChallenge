// Day 4 Hidden Search

const btn = document.querySelector('.searchBtn');
const search = document.querySelector('.search');;

btn.addEventListener('click', ()=>{
    search.classList.toggle('extend');
});