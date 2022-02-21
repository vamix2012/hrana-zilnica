var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.floor(diff / oneDay);


let date = new Date();

let d = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
let mon = date.getMonth() + 1;
let m = mon < 10 ? "0" + mon : mon;
let y = date.getFullYear();





// function init() {
//     document.getElementById("data").innerHTML = d + "." + m + "." + y;
//     document.getElementById("Dimineata").innerHTML = dimi[day - 1];
//     document.getElementById("Seara").innerHTML = seara[day - 1];
//     setMsg();
// }

// function setMsg() {
//     msg = "_*Pasajul Zilei*_\n\n*Data:*  ```" + d + "." + m + "." + y + "```\n\n*Dimineata:*  ```" + dimi[day - 1] + "```\n\n*Seara:* ```" + seara[day - 1] + "```" + "\n\n_Sursa: hrana-zilnica.info_";
// }

// function share() {
//     if (navigator.share) {
//         navigator.share({
//             title: `Mesaj`,
//             text: `${msg}`
//         })
//     }
// }

function shareVerse() {
    verse = "```" + document.getElementById("verse").innerText + "```\n\n_Sursa: hrana-zilnica.info_"
    if (navigator.share) {
        navigator.share({
            title: `Mesaj`,
            text: `${verse}`
        })
    }
}

function shareGand() {
    gand = "```" + document.getElementById("gand").innerText + "```\n\n_Sursa: hrana-zilnica.info_"
    if (navigator.share) {
        navigator.share({
            title: `Mesaj`,
            text: `${gand}`
        })
    }
}