let heading= document.querySelector('h2');
let btn=document.querySelector('.btn');
let anchor=document.querySelector('.btn a')
let inner=document.querySelector('.inner');
let grow=0;


btn.addEventListener('click', ()=>{
    btn.style.pointerEvents='none';
    let num=50 +Math.floor(Math.random()*50);

    let int=setInterval(()=>{
        grow++;
        heading.innerHTML=grow+'%';
        inner.style.width=grow+'%';
        
    },num)

    setTimeout(()=>{
        clearInterval(int)
        anchor.innerHTML='Downloaded'
        
    },num*100)
    
})