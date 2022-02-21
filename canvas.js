let canvas1;
let ctx1;
let color = "black";
let size = 32;

function initCanvas() {
    canvas1 = document.getElementById("canvas1");
    ctx1 = canvas1.getContext("2d");

    canvas1.width = 350;
    canvas1.height = 250;

    let img = new Image();
    img.onload = function () {
        ctx1.drawImage(img, 0, 0, canvas1.width, canvas1.height);
        ctx1.globalAlpha = 1;
        ctx1.fillStyle = color;
        ctx1.font = `${size}px Comic Sans MS`;
        ctx1.textAlign = "center";
        ctx1.fillText("Pasajul Zilei", canvas1.width / 2, size);
        ctx1.font = `${size - 10}px Comic Sans MS`;
        ctx1.fillText(d + "." + m + "." + y, canvas1.width / 2, size * 2);
        ctx1.fillText("Dimineata", canvas1.width / 2, size * 4);
        ctx1.fillText(dimi[day - 1], canvas1.width / 2, size * 5);
        ctx1.fillText("Seara", canvas1.width / 2, size * 6);
        ctx1.fillText(seara[day - 1], canvas1.width / 2, size * 7);
        ctx1.textAlign = "end";
        ctx1.font = `${size - 20}px Comic Sans MS`;
        ctx1.fillText("hrana-zilnica.info", canvas1.width - 10, size * 7.6);

    };
    img.src = '2.jpeg';



}


function download() {
    const image = canvas1.toDataURL();
    const link = document.createElement("a");
    link.href = image;
    link.download = `day${day - 1}.png`;
    link.click();

}



/**
 
function init(){
    
    document.querySelector('#text').value = txt;
    document.querySelector('#fontsize').value = size;
    canvas = document.getElementById("canvas")

ctx = canvas.getContext('2d');

 canvas.width = 350;
 canvas.height = 250;

 let img = new Image(); 
 img.onload = function() { 
     ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
     ctx.globalAlpha =1; 
 ctx.fillStyle=color; 
 ctx.font=`${size}px Comic Sans MS`; 
 ctx.textAlign = "center";
 ctx.fillText(txt,canvas.width/2,size);
 
 
 ctx.font=`${size}px Comic Sans MS`; 
 ctx.fillText(txt2,canvas.width/2,size*3);


 ctx.font=`${size}px Comic Sans MS`; 
 ctx.fillText(txt3,canvas.width/2,size*5);
 
 

 ctx.font=`${size}px Comic Sans MS`; 
 ctx.fillText(txt4,canvas.width/2,size*7);


     
 }; 
     img.src = '2.jpg';
 
 
 
}

function download() { const image = canvas.toDataURL(); 
const link = document.createElement("a"); 
link.href = image; 
link.download = "image.png"; 
link.click(); }

function setTxt(){
    let input = document.querySelector('#text').value
    
    txt= input;
    init();
}

function setColor(){
    color = document.querySelector('#color').value;
    init();
    console.log(color);
    
}

function setSize(){
    size = document.querySelector('#fontsize').value;
    init();
}


 */