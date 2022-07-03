const postAuth = () => {

    const formData = new FormData(document.getElementById('signin__form'))
    const welcome = document.getElementById('welcome')
    const userId = document.getElementById('user_id')
    const divError = document.createElement('div')

    if (localStorage.getItem('id')) {
        welcome.classList.add('welcome_active')
        userId.textContent = localStorage.getItem('id')
    }


    document.forms.signin__form.addEventListener('submit', (event) => {
        event.preventDefault();

        const xhr = new XMLHttpRequest();

        xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');

        xhr.send(formData)

        xhr.onreadystatechange = function () {

            let answer = JSON.parse(xhr.responseText)

            if (answer.success) {
                localStorage.setItem('id', answer.user_id)
                welcome.classList.add('welcome_active')
                userId.textContent = localStorage.getItem('id')
            } else {
                welcome.classList.remove('welcome_active')
                document.getElementById('signin__form').append(divError)
                divError.textContent = 'Неверный логин/пароль'
            }
        }

    })


}

postAuth()