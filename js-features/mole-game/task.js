function checkHole() {

    let dead = document.getElementById('dead');
    let lost = document.getElementById('lost');

    let holes = document.getElementsByClassName('hole');

    Array.from(holes).forEach(element => {
        element.onclick = (function () {

            if (+dead.textContent === 10) {
                alert('Вы выиграли')
                return;
            }

            if (+lost.textContent === 5) {
                alert('Вы проиграли')
                return;
            }

            if (element.classList.contains('hole_has-mole')) {
                dead.textContent = +dead.textContent + 1;
            } else {
                lost.textContent = +lost.textContent + 1;
            }
        })
    });
}

checkHole()