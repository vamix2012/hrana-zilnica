let canvas;
let ctx;
let color = "black";
let size = 32;

function initCanvas() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    canvas.width = 350;
    canvas.height = 250;

    let img = new Image();
    img.onload = function () {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 1;
        ctx.fillStyle = color;
        ctx.font = `${size}px Comic Sans MS`;
        ctx.textAlign = "center";
        ctx.fillText("Pasajul Zilei", canvas.width / 2, size);
        ctx.font = `${size - 10}px Comic Sans MS`;
        ctx.fillText(d + "." + m + "." + y, canvas.width / 2, size * 2);
        ctx.fillText("Dimineata", canvas.width / 2, size * 4);
        ctx.fillText(dimi[day - 1], canvas.width / 2, size * 5);
        ctx.fillText("Seara", canvas.width / 2, size * 6);
        ctx.fillText(seara[day - 1], canvas.width / 2, size * 7);
        ctx.textAlign = "end";
        ctx.font = `${size - 20}px Comic Sans MS`;
        ctx.fillText("hrana-zilnica.info", canvas.width - 10, size * 7.6);

    };
    img.src = '2.jpeg';



}


function download() {
    const msg = canvas.toDataURL();
    if (navigator.share) {
        navigator.share({
            title: `Mesaj`,
            text: `${msg}`
        })
    }
    // const link = document.createElement("a");
    // link.href = image;
    // link.download = `day${day - 1}.png`;
    // link.click();

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