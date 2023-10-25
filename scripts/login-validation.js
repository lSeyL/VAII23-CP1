const name = document.getElementById('unameLogin')
const password = document.getElementById('passwordLogin')
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
    if (messages.length > 0) {
        e.preventDefault()
        err.innerText = messages.join(',   ')
    }
});