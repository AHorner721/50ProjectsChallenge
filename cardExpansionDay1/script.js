// Day 1 Card Expansion

const panels = document.querySelectorAll('.panel');

panels.forEach(panel =>{
    panel.addEventListener('click', ()=>{
        let activePanel = document.querySelector('.active');
        activePanel.classList.remove('active');
        panel.classList.toggle('active');
    });
});