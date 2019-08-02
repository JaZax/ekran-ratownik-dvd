//alert('click to enable/disable fullscreen')

const canvas = document.querySelector('canvas');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let fullscreen = false;

canvas.addEventListener('click' , ()=>{
    if(fullscreen === false)
    {
        fullscreen = true
        canvas.requestFullscreen()
    }
    else if(fullscreen === true)
    {
        fullscreen = false;
        document.webkitExitFullscreen();
    }
        
})


window.addEventListener('resize' , ()=>{
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
})

const c = canvas.getContext('2d');


var image = new Image();
    image.src = 'dvd.png';
    image.height = 200

let x = Math.random() * window.innerWidth;
let y = Math.random() * window.innerHeight;

const speed = [
    3,
    -3
]

let xspeed = speed[Math.floor(Math.random()*speed.length)];
let yspeed = speed[Math.floor(Math.random()*speed.length)];

function animation()
{
    requestAnimationFrame(animation);

    console.log(x)

    c.clearRect(0 , 0 , window.innerWidth, window.innerHeight)
    c.drawImage(image, x, y);

    if(x > window.innerWidth - image.width || x < 0)
    {
        xspeed = -xspeed
    }

    if(y > window.innerHeight - image.height / 2 || y < 0)
    {   
        yspeed = -yspeed
    }

    y += yspeed
    x += xspeed
}

animation()
