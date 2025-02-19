const input = document.getElementById('email');
const submitBtn = document.getElementById('submitBtn');
const container = document.querySelector('.container');
const success = document.querySelector('.container--success');
const errorMsg = document.getElementById('error-msg');
const dismissBtn =  document.getElementById('dismissBtn');


const checkEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log(regex.test(email));
    return regex.test(email);
}

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(checkEmail(input.value)){
        container.style.display = 'none';
        success.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        errorMsg.classList.remove('hidden');
        input.classList.add('errorInput');
    }
});

dismissBtn.addEventListener('click', () => {
    container.style.display = 'flex';
    success.classList.add('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    errorMsg.classList.add('hidden');
    input.classList.remove('errorInput');
    input.value = null;
});
