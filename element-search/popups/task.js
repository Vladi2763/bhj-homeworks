function closePopup() {
    let popups = document.getElementsByClassName('modal')
    console.log(popups)

    let arrPopups = Array.from(popups)

    arrPopups[0].classList.add('modal_active');

    let popup = document.getElementsByClassName('modal_active')[0];

    let button = document.getElementsByClassName('modal__close')[0];

    let buttonModalMain = document.getElementsByClassName('show-success')[0];

    let buttonModalSuccess = document.getElementsByClassName('btn_success')[0];
    
    let modalSuccess = document.getElementById('modal_success')

    let buttonModalSuccessClose= modalSuccess.getElementsByClassName('modal__close')[0]

    console.log(buttonModalSuccessClose)

    button.onclick = function() {
        popup.style.display = 'none';
    }

    buttonModalMain.onclick = function() {
        popup.style.display = 'none';
        arrPopups[1].classList.add('modal_active');
    }

    buttonModalSuccess.onclick = function() {
        modalSuccess.style.display = 'none'
    }

    buttonModalSuccessClose.onclick = function() {
        modalSuccess.style.display = 'none'
    }
    
}

closePopup()