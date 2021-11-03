canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
background_img="Background.jpg";
 var x= document.getElementById("song");
function add(){
    bgimg=new Image();
    bgimg.onload=uploudbg;
    bgimg.src=background_img;  
    
}

function uploudbg(){
    ctx.drawImage(bgimg,0,0, canvas.width, canvas.height);
}

function playSound() {
    x.play();
}

