// Day 3 Rotating Navigation

const container = document.querySelector('.container');
const open_btn = document.querySelector('#open');
const close_btn = document.querySelector('#close');

open_btn.addEventListener('click', ()=>{
    container.classList.add('show-nav');
});

close_btn.addEventListener('click', ()=>{
    container.classList.remove('show-nav');
});
