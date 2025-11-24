let sun=document.querySelector('.sun');
let moon=document.querySelector('.moon');
let bg=document.querySelector('main');
let flag=0;

sun.addEventListener('click',()=>{
    sun.style.display='none';
    moon.style.display='block';
    moon.style.color='black';
    bg.style.backgroundColor="white";
    bg.style.transition="all linear 0.8s"
    flag=1;
})

moon.addEventListener('click',()=>{
    sun.style.display='block';
    moon.style.display='none';
    bg.style.backgroundColor="#2b2b2b";
    flag=0;
})