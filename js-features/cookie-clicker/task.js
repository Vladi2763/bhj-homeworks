let cookie = document.getElementById('cookie')
let speed = document.getElementById('speed_click')

let lastClick = 0;

cookie.onclick = function () {
    let newClick = new Date().getTime();

    let cookiesCounter = document.getElementById('clicker__counter');

    cookiesCounter.textContent = +cookiesCounter.textContent + 1;

    if(cookie.width === 200) {
        cookie.width = 230
    } else {
        cookie.width = 200
    }

    speed.textContent = 1 / (newClick - lastClick) 

    lastClick = newClick
}