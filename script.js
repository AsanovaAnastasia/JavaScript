const cart = JSON.parse(dataCart);

const sectionEL = document.querySelector('.section');

const mainText = document.createElement('div');
mainText.classList.add('second-section__text');

const textHeading = document.createElement('h1');
textHeading.textContent = 'Featured Items';

const textHeading2 = document.createElement('h3');
textHeading2.textContent = 'Shop for items based on what we featured in this week';

const section = document.createElement('section');
section.classList.add('second-section');
section.classList.add('container');

cart.forEach(element => {

    const card = document.createElement('div');
    card.classList.add('second-section__card');

    const img = document.createElement('img');
    img.src = element.url;
    img.alt = 'Image';

    const cardDarkness = document.createElement('div');
    cardDarkness.classList.add('second-section__card-darkness');

    const button = document.createElement('button');
    button.textContent = 'Add to Cart';

    const svg = document.createElementNS('./Stroke Effect.svg', 'svg');
    const rect = document.createElementNS(svg.namespaceURI, 'rect');
    rect.setAttribute('width', '32');
    rect.setAttribute('height', '29');
    rect.setAttribute('fill', 'white');

    const cardText = document.createElement('div');
    cardText.classList.add('second-section__card-text');

    const cardH2 = document.createElement('h2');
    cardH2.textContent = element.name;

    const cardP = document.createElement('p');
    cardP.textContent = element.description;

    const price = document.createElement('h2');
    price.textContent = element.price;


    sectionEL.appendChild(mainText);
    sectionEL.appendChild(section);
    mainText.appendChild(textHeading);
    mainText.appendChild(textHeading2);
    section.appendChild(card);
    card.appendChild(img);
    card.appendChild(cardDarkness);
    cardDarkness.appendChild(button);
    button.appendChild(svg);
    svg.appendChild(rect);
    card.appendChild(cardText);
    cardText.appendChild(cardH2);
    cardText.appendChild(cardP);
    cardText.appendChild(price);


});
const allBtndiv = document.createElement('div');
allBtndiv.classList.add('browse-all-button');

const allBtn = document.createElement('button');
allBtn.classList.add('browse-all-button__button');
allBtn.textContent = 'Browse All Product';

sectionEL.appendChild(allBtndiv);
allBtndiv.appendChild(allBtn);