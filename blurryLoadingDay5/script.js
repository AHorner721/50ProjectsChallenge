// Day 5 Blurry Loading

const percent = document.querySelector('.numbers');
const background = document.querySelector('img');

let load = 0;
let interval = setInterval(blurring, 30);

function blurring(){
    load++;
    if(load > 99){
        clearInterval(interval);
    }
    percent.innerText = `${load}%`;
    percent.style.opacity = scale(load, 0,100,1,0);
    background.style.filter = `blur(${scale(load,0,100,30,0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) =>{
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}