let btn=document.querySelector('button');
let following=document.querySelector('.right span');
let followers=document.querySelector('.left span');
let flag=0;

btn.addEventListener('click',()=>{
    if(flag===0){
        btn.innerHTML='following';
        btn.style.backgroundColor='white';
        btn.style.color='black';
        btn.style.border = '1px solid black';
        following.innerHTML='1'
        flag=1;
    }
    else{
        btn.innerHTML='Follow back';
        btn.style.backgroundColor='rgb(0, 132, 255)';
        btn.style.color='white';
        btn.style.border = 'none';
        following.innerHTML='0'
        flag=0;
    }
})