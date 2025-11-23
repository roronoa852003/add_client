let elem = document.querySelectorAll('.elem');


elem.forEach((val) => {
    val.addEventListener('mouseenter', function () {

        let head = val.querySelector('h2')
        let mouse = val.querySelector('img');
        head.style.fontSize = "35px"

        mouse.style.opacity=1


    })
    val.addEventListener('mouseleave', function () {
        let head = val.querySelector('h2')
        let mouse = val.querySelector('img');
        head.style.fontSize = "30px";
        mouse.style.opacity=0;

    })
    val.addEventListener('mousemove', (dets) => {
        let mouse = val.querySelector('img');

        // elem ke andar ka mouse position
        let x = dets.offsetX;
        let y = dets.offsetY;

        mouse.style.left = x + 'px';
        mouse.style.top = y + 'px';
    });

})
