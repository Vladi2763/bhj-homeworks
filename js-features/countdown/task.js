const clicker = () => {
    let counter = document.getElementById('timer');

    let timerId = setInterval(() => {
        counter.textContent -= 1;
        if (+counter.textContent === 0) {
            clearInterval(timerId);
            alert('Вы победили в конкурсе')
        }
    }, 1000)
}

clicker();