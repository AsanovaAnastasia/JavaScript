let dropdownEl = document.querySelectorAll('.dropdown-item');
let btnEl = document.querySelector('.btn');
let menuEl = document.querySelector('.menu');
let dropdownDiv = document.querySelector('.dropdown');
let ddmbEl = document.getElementById("dropdownMenuButton");
let ariaEl = document.querySelector('[aria-labelledby="dropdownMenuButton"]');
let dropdownToggleEl = document.querySelector('.dropdown-toggle');


dropdownEl.forEach(elements => {
    elements.classList.add('super-dropdown')
});



if (btnEl.classList.contains('btn-secondary')) {
    btnEl.classList.remove('btn-secondary')
}
else {
    btnEl.classList.add; ('class', 'btn-secondary');
}

if (menuEl) {
    menuEl.classList.remove('dropdown-menu');
}

dropdownDiv.insertAdjacentHTML('afterend', '<a href="#">link</a>');

if (ddmbEl) {
    ddmbEl.id = 'superDropdown';
}

if (ariaEl) {
    ariaEl.dataset.dd = '3';
}

if (dropdownToggleEl) {
    dropdownToggleEl.removeAttribute('type');
}






