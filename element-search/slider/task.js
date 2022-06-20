let nextSlideButton = document.getElementsByClassName('slider__arrow_next')[0]
let previousSlideButton = document.getElementsByClassName('slider__arrow_prev')[0]

let indexMain = 0;


function slider(index) {

    let slides = document.getElementsByClassName('slider__item')

    
    for (let slide of slides) {
        slide.classList.remove('slider__item_active');
    }

    if (index > slides.length - 1) {
        indexMain = 0;
        slides[indexMain].classList.add('slider__item_active')
    }

    if (index < 0) {
        
        indexMain = slides.length - 1;
        slides[indexMain].classList.add('slider__item_active')
    }

    if ((index <= slides.length - 1) && index >= 0) {
        slides[index].classList.add('slider__item_active')
    }

}


nextSlideButton.onclick = function () {
    slider(indexMain = indexMain + 1)
}

previousSlideButton.onclick = function () {
    slider(indexMain = indexMain - 1)
}







