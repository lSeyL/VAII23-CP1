const name = document.getElementById('name')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')
const email = document.getElementById('email')
const form = document.getElementById('form')
const err = document.getElementById('err')


form.addEventListener('submit', (e) => {
    let messages = []

    if (name.value === '' || name.value == null) {
        messages.push('Name is required')
    }
    if (password.value.length < 1) {
        messages.push('Password is required')
    }

    if (password.value.length <= 3 && password.value.length > 0) {
        messages.push('Password must be longer than 3 characters')
    }

    if (password.value.length >= 20) {
        messages.push('Password must be less than 20 characters')
    }

    if (password.value === 'password') {
        messages.push('Password cannot be password')
    }

    if (email.value === '') {
        messages.push('Email cannot be blank');
    }

    if (password.value === '' || password2.value === '') {
        messages.push('Password cannot be blank');
    }

    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!email.value.match(mailFormat))
    {
        messages.push('Email is not valid');
    }

    if (messages.length > 0) {
        e.preventDefault()
        err.innerText = messages.join(',   ')
    }

});
