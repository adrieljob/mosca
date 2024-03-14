var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
var x = 100;
var y = 100;
dx = 2;
dy = 2;
limiteWidth = 100;
limiteHeigt = 100;

var Sanim;

function anim(){
    Sanim = requestAnimationFrame(anim);

    var randomColor = Math.floor(Math.random()*16777215).toString(16);

    c.clearRect(0,0,innerWidth,innerHeight);

x = Math.floor(Math. random() * (1000 - 10 + 1)) + 10;
y =  Math.floor(Math. random() * (1000 - 10 + 1)) + 10;

limiteWidth = Math.floor(Math. random() * (500 - 10 + 1)) + 10;
limiteHeigt = Math.floor(Math. random() * (500 - 10 + 1)) + 10;

    c.fillStyle = Math.floor(Math.random()*16777215).toString(16);

    c.fillRect(x, y,limiteWidth,limiteHeigt);


if ((x + limiteWidth >= innerWidth )||(x <= 0)){
dx=0
}



if ((y + limiteHeigt >= innerHeight )||(y <= 0)){
 dy=0
}

x += dx;
y += dy;

}

function StopAnim(){

    cancelAnimationFrame(Sanim);

}


function Velocit(value){

var speedx = parseFloat(value);
var speedy = parseFloat(value);
dx = speedx;
dy = speedy;

}

function Size(value){
var Tx =  parseFloat(value);
var Ty =  parseFloat(value);
limiteWidth = Tx;
limiteHeigt = Ty;

}



anim();