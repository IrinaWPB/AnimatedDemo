const letters = document.querySelectorAll('span');

function rgbColors() {
    let r  = Math.floor(Math.random() * 256);
    let g  = Math.floor(Math.random() * 256);
    let b = 0;
    return `rgb(${r},${g},${b})`;
}

setInterval( function() {
    for (let letter of letters) {
        letter.style.color = rgbColors();
    }
}, 2000);