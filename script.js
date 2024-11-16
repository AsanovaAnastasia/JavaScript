const inputEl = document.querySelector('.input');
const spanEl = document.querySelector('.span');

inputEl.addEventListener('input', function () {
    spanEl.textContent = inputEl.value;
});


const msgbtn = document.querySelector('.messageBtn');
const msg = document.querySelector('.message');

msgbtn.addEventListener('click', function (e) {
    msg.classList.add('animate_animated', 'animate_fadeInLeftBig');
    msg.style.visibility = 'visible';
});


const formEl = document.querySelector('.form');
const formControlEls = document.querySelectorAll('.form-control');

formEl.addEventListener('submit', function (e) {
    let check = true;

    formControlEls.forEach(input => {
        if (input.value.trim() === '') {
            input.classList.add('error');
            check = false;
        }
    });

    if (!check) {
        e.preventDefault()
    }
});

formControlEls.forEach(input => {
    input.addEventListener('input', function () {
        if (input.value.trim() === '') {
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }

    });
});

