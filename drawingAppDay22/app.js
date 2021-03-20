const canvas = document.querySelector('canvas');
const decreaseBtn = document.querySelector('#decrease');
const increaseBtn = document.querySelector('#increase');
const selectSize = document.querySelector('#size');
const selectColor = document.querySelector('#colorPicker');
const clear = document.querySelector('#clear');
const ctx = canvas.getContext('2d');


let size = 10;
color = 'black';
let x, y;

canvas.addEventListener('mousedown', (evt)=>{
    isPressed = true;
    x = evt.offsetX;
    y = evt.offsetY;
});

canvas.addEventListener('mouseup', (evt)=>{
    isPressed = false;
    x = undefined;
    y = undefined;
});

canvas.addEventListener('mousemove', (evt)=>{
    if(isPressed){
        const x2 = evt.offsetX;
        const y2 = evt.offsetY;

        drawCircle(x2,y2);
        drawLine(x,y,x2,y2);

        x = x2;
        y = y2;
    }
});

function drawCircle(x,y){
    ctx.beginPath();
    ctx.arc(x,y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1,y1,x2,y2){
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}

selectColor.addEventListener('change', (evt)=>{
    color = evt.target.value; 
});

increaseBtn.addEventListener('click', ()=>{
    if(size >=50 === false){
        size += 5;
        selectSize.innerText = size;
    }
});
decreaseBtn.addEventListener('click', ()=>{
    if(size <=5 === false){
        size -= 5;
        selectSize.innerText = size;
    }
});

clear.addEventListener('click', ()=>{
    ctx.clearRect(0,0,canvas.width, canvas.height);
});