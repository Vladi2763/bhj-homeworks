function menu() {
    let links = document.querySelectorAll('.menu__link')

    console.log(links)

    for (let i = 0; i < links.length; i++) {
        links[i].onclick = function () {
            if (document.getElementsByClassName('menu_active')[0]) {
                document.getElementsByClassName('menu_active')[0].classList.remove('menu_active')
            }
            if (links[i].nextElementSibling.className.includes('menu_sub')) {
                links[i].nextElementSibling.classList.add('menu_active')
            }
            if (!links[i].closest('menu_sub')) {
                return false
            }
        }
    }



}

menu()