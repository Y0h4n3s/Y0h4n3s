const submitBtn = document.querySelector('.submit-email-btn');
const emailField = document.querySelector('.email-input');
const errorMessage = document.querySelector('.invalid-email');
const errorIcon = document.querySelector('.error-img');


submitBtn.addEventListener('click', () => {
    const email = emailField.textContent;
    const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (regex.test(email)) {
        //Add logic here
    } else {
        errorMessage.style.display = 'block';
        errorIcon.style.display = 'inline-block';
    }
});

emailField.addEventListener('keyup', (event) => {
    let email = emailField.value;
    if (email === '') {
        errorMessage.style.display = 'none';
        errorIcon.style.display = 'none';
        return;
    }
    const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (regex.test(email)) {
        errorMessage.style.display = 'none';
        errorIcon.style.display = 'none';
    } else {
        console.log(event.target.value)
        errorMessage.style.display = 'block';
        errorIcon.style.display = 'inline-block';
    }
})