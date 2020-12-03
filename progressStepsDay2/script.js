// Day 2 progress steps

const nextButton = document.querySelector('#next');
const prevButton = document.querySelector('#prev');

const progressLine = document.querySelector('.progress');
const circles = Array.from(document.querySelectorAll('.circle'));
let percent = 0;
let step = 1;

nextButton.addEventListener('click', ()=>{
    if(percent === 90) return;
    prevButton.disabled = false;
    percent+= 30;
    progressLine.style.width = `${percent}%`;
    circles[step].classList.add('active');
    step++;
});

prevButton.addEventListener('click', ()=>{
    if(percent < 30) return;
    percent-= 30;
    step--;
    if(percent === 0){
        prevButton.disabled = true;
    }
    progressLine.style.width = `${percent}%`;
    circles[step].classList.remove('active');
});