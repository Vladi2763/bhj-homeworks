let nextSlideButton = document.getElementsByClassName('slider__arrow_next')[0]
let previousSlideButton = document.getElementsByClassName('slider__arrow_prev')[0]
console.log(nextSlideButton)

let index = 0


function slider(index) {

    let slides = document.getElementsByClassName('slider__item')

    if (index > slides.length - 1) {
        index = 0
    }
    if (index < 0) {
        index = slides.length - 1
    }

    for (let slide of slides) {
        slide.classList.remove('slider__item_active');
    }

    slides[index].classList.add('slider__item_active')
}


nextSlideButton.onclick = function () {
    slider(index += 1)
}

previousSlideButton.onclick = function () {
    slider(index -= 1)
}







