
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

//   
const cartEl = document.querySelector('.cart');

const cartLeftSide = document.createElement('div');
cartLeftSide.classList.add('cart__left-side');

const cartItems = document.createElement('div');
cartItems.classList.add('cart-items')

const cartRightSide = document.createElement('div');
cartRightSide.classList.add('cart__right-side');

const btns = document.createElement('div');
btns.classList.add('cart__clear-continue')

const emptyCart = document.createElement('div');
emptyCart.classList.add('cart__empty');
emptyCart.textContent = 'The cart is empty';

const formEl = document.createElement('form');
formEl.action = '#';
formEl.classList.add('cart__form');

const formHeading = document.createElement('h2');
formHeading.classList.add('cart__heading');
formHeading.textContent = 'SHIPPING ADRESS';

const formInput = document.createElement('input');
formInput.classList.add('cart__input');
formInput.type = 'text';
formInput.placeholder = 'Bangladesh';

const formInput2 = document.createElement('input');
formInput2.classList.add('cart__input');
formInput2.type = 'text';
formInput2.placeholder = 'State';

const formInput3 = document.createElement('input');
formInput3.classList.add('cart__input');
formInput3.type = 'text';
formInput3.placeholder = 'Postcode / Zip';

const formBtn = document.createElement('button');
formBtn.classList.add('cart__button');
formBtn.textContent = 'GET A QUOTE';

const cartCount = document.createElement('div');
cartCount.classList.add('cart__count');

const countText = document.createElement('p');
countText.classList.add('cart__count-h3');
countText.textContent = 'SUB TOTAL $900';

const countText2 = document.createElement('p');
countText2.classList.add('cart__count-h1');
countText2.textContent = 'GRAND TOTAL ';

const countSpan = document.createElement('span');
countSpan.classList.add('cart__count-h1_select');
countSpan.textContent = '$900';

const countBtn = document.createElement('button');
countBtn.classList.add('cart__count_button');
countBtn.textContent = 'PROCEED TO CHECKOUT';

const clearBtn = document.createElement('button');
clearBtn.classList.add('cart__clear-button');
clearBtn.textContent = 'CLEAR SHOPPING CART';

clearBtn.addEventListener('click', function (e) {
    cartItems.innerHTML = "";
    emptyCart.textContent = 'The cart is empty';
    clearBtn.style.display = 'none';
});

cartEl.appendChild(cartLeftSide);
cartEl.appendChild(cartRightSide);
cartLeftSide.appendChild(emptyCart);
cartLeftSide.appendChild(cartItems);
cartLeftSide.appendChild(btns);
cartRightSide.appendChild(formEl);
formEl.appendChild(formHeading);
formEl.appendChild(formInput);
formEl.appendChild(formInput2);
formEl.appendChild(formInput3);
formEl.appendChild(formBtn);
cartRightSide.appendChild(cartCount);
cartCount.appendChild(countText);
cartCount.appendChild(countText2);
countText2.appendChild(countSpan);
cartCount.appendChild(countBtn);


const addButton = document.querySelectorAll('.Add-to-cart-button');



cart.forEach(element => {

    const card = document.createElement('div');
    card.classList.add('second-section__card');

    const img = document.createElement('img');
    img.src = element.url;
    img.alt = 'Image';

    const cardDarkness = document.createElement('div');
    cardDarkness.classList.add('second-section__card-darkness');

    const addToCartbtn = document.createElement('button');
    addToCartbtn.classList.add('Add-to-cart-button');
    addToCartbtn.textContent = 'Add to Cart';

    const svg = document.createElementNS('./StrokeEffect.svg', 'svg');
    const rect = document.createElementNS(svg.namespaceURI, 'rect');
    rect.setAttribute('width', '32');
    rect.setAttribute('height', '29');
    rect.setAttribute('fill', '#E8E8E8');


    addToCartbtn.addEventListener('click', function (e) {
        
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        emptyCart.textContent = '';

        const selectProductPhoto = document.createElement('img');
        selectProductPhoto.classList.add('cart-item__photo');
        selectProductPhoto.src = element.url;

        const itemContent = document.createElement('div');
        itemContent.classList.add('cart-item__content');

        const itemLink = document.createElement('a');
        itemLink.classList.add('cart-item__link');
        itemLink.textContent = element.name;

        const selectPrice = document.createElement('p');
        selectPrice.classList.add('cart-item__text');
        selectPrice.textContent = 'Price: ';

        const selectSpanPrice = document.createElement('span');
        selectSpanPrice.classList.add('cart-item__text_select');
        selectSpanPrice.textContent = element.price;

        const selectColor = document.createElement('summary');
        selectColor.classList.add('cart-item__text');
        selectColor.textContent = `Color: ${element.color}`;

        const selectSize = document.createElement('p');
        selectSize.classList.add('cart-item__text');
        selectSize.textContent = 'Size: ';

        const selectQuantity = document.createElement('p');
        selectQuantity.classList.add('cart-item__text');
        selectQuantity.classList.add('cart-item__text_quantity');
        selectQuantity.textContent = 'Quantity: ';

        const quantityInput = document.createElement('input');
        quantityInput.classList.add('cart-item__number');
        quantityInput.type = 'text';
        quantityInput.placeholder = '1';

        const closeLink = document.createElement('a');
        closeLink.classList.add('cart-item__close');

        const closeEl = document.createElement('img');
        closeEl.src = '/img/close.png';

        closeLink.addEventListener('click', function (e) {
            cartItem.innerHTML = '';
        });

        cartItems.appendChild(cartItem);
        cartItem.appendChild(selectProductPhoto);
        cartItem.appendChild(closeLink);
        closeLink.appendChild(closeEl)
        btns.appendChild(clearBtn);
        cartItem.appendChild(itemContent);
        itemContent.appendChild(itemLink);
        itemContent.appendChild(selectPrice);
        selectPrice.appendChild(selectSpanPrice);
        itemContent.appendChild(selectColor);
        itemContent.appendChild(selectSize);
        itemContent.appendChild(selectQuantity);
        selectQuantity.appendChild(quantityInput);

    });

    const cardText = document.createElement('div');
    cardText.classList.add('second-section__card-text');

    const cardH2 = document.createElement('h2');
    cardH2.textContent = element.name;

    const cardP = document.createElement('p');
    cardP.textContent = element.description;

    const price = document.createElement('h2');
    price.textContent = element.price;


    section.appendChild(card);
    card.appendChild(img);
    card.appendChild(cardDarkness);
    cardDarkness.appendChild(addToCartbtn);
    addToCartbtn.appendChild(svg);
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


const continueBtn = document.createElement('button');
continueBtn.classList.add('cart__continue-button');
continueBtn.textContent = 'CONTINUE SHOPPING';


btns.appendChild(continueBtn);

sectionEL.appendChild(mainText);
sectionEL.appendChild(section);
mainText.appendChild(textHeading);
mainText.appendChild(textHeading2);
sectionEL.appendChild(allBtndiv);
allBtndiv.appendChild(allBtn);





