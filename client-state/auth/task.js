const postAuth = () => {

    document.forms.signin__form.addEventListener('submit', (event) => {
        event.preventDefault();

        const xhr = new XMLHttpRequest();

        // xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');

        const formData = new FormData(document.getElementById('signin__form'))
        
        xhr.send(formData)
        
    })
    
    
}

postAuth()