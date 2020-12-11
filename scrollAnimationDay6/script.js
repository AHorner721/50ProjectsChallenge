// Day 6 Scrolling animation

const sections = document.querySelectorAll('section');

window.addEventListener('scroll', showSections);

function showSections(){
    const triggerBottom = window.innerHeight / 5 * 4;

    sections.forEach(section =>{
        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop < triggerBottom){
            section.classList.add('show');
        }else{
            section.classList.remove('show');
        }
    });
}