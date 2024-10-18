let superLinkEl = document.getElementById('super_link');
console.log(superLinkEl);

let cardLinkText = document.querySelectorAll('.card-link');
cardLinkText.forEach(cardLinkText => {
    cardLinkText.textContent = 'ссылка';
});

let cardBodyLink = document.querySelector('.card-body  .card-link');
console.log(cardBodyLink);

const dataNumber = document.querySelector('[data-number = "50"]');
console.log(dataNumber);


const titleEl = document.querySelector('title');
console.log(titleEl);

const cardTitle = document.querySelector('.card-title');
console.log(cardTitle.parentNode); 


const cardEl = document.querySelector('.card');
let pgf1 = document.createElement('p');
pgf1.textContent = 'Hello';
cardEl.insertBefore(pgf1, cardEl.firstChild);

const h6Tag = document.querySelector('h6');
h6Tag.remove();



