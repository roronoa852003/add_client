let heart=document.querySelector('main i');
let card=document.querySelector('main');


card.addEventListener('dblclick',()=>{
    heart.style.opacity='1';
    heart.style.transform='translate(0%,0%) scale(1) rotate(0deg)'

    setTimeout(()=>{
        heart.style.transform='translate(0%,-300%) scale(1) rotate(0deg)';
    },800);
    setTimeout(()=>{
        heart.style.opacity='0';
    },1000);
    setTimeout(()=>{
        heart.style.transform='translate(0%,0%) scale(0) rotate(-60deg)';
    },1200)
})