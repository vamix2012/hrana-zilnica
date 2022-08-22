let canvas;
let ctx1;
let color = "black";
let size = 32;
let randomNum = getRandomInt(1, 8);

function initCanvas() {
    canvas = document.getElementById("canvas");
    ctx1 = canvas.getContext("2d");

    canvas.width = 350;
    canvas.height = 250;

    let img = new Image();
    img.onload = function () {
        ctx1.drawImage(img, 0, 0, canvas.width, canvas.height);
        ctx1.globalAlpha = 1;
        ctx1.fillStyle = color;
        ctx1.font = `${size}px Comic Sans MS`;

        ctx1.textAlign = "center";
        ctx1.fillText("Pasajul Zilei", canvas.width / 2, size * 1.2);
        ctx1.font = `${size - 10}px Comic Sans MS`;
        ctx1.fillText(d + "." + m + "." + y, canvas.width / 2, size * 2.3);
        ctx1.fillText("Dimineata", canvas.width / 2, size * 3.8);
        ctx1.fillText(dimi[day - 1], canvas.width / 2, size * 4.8);
        ctx1.fillText("Seara", canvas.width / 2, size * 5.8);
        ctx1.fillText(seara[day - 1], canvas.width / 2, size * 6.8);
        ctx1.textAlign = "end";
        ctx1.font = `${size - 20}px Comic Sans MS`;
        ctx1.fillText("hrana-zilnica.info", canvas.width - 4, size * 7.7);

    };
    img.src = `./assets/${randomNum}.jpeg`;
    setMsg();
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}





// async function share() {
//     const canvas = document.getElementById('canvas');
//     const dataUrl = canvas.toDataURL();
//     const blob = await (await fetch(dataUrl)).blob();
//     const filesArray = [
//         new File(
//             [blob],
//             `ziua-${day - 1}.png`,
//             {
//                 type: blob.type,
//                 lastModified: new Date().getTime()
//             }
//         )
//     ];
//     const shareData = {
//         files: filesArray,
//     };
//     navigator.share(shareData);
// }


    // const image = canvas.toDataURL();
    // const link = document.createElement("a");
    // link.href = image;
    // link.download = `ziua-${day - 1}.png`;
    // link.click();





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