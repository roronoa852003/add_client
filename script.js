let cursor=document.querySelector('img');
let main=document.querySelector('main');

main.addEventListener('mousemove',(dets)=>{
    cursor.style.left=dets.x+'px';
    cursor.style.top=dets.y+'px';
})