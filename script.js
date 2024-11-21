const productEl = document.querySelector('.product');
const productList = document.querySelector('.product__list');

data.forEach(element => {
    const liEl = document.createElement('li');
    const img = document.createElement('img');
    img.classList.add('product__img');
    img.src = element.image;

    const heading = document.createElement('h1');
    heading.classList.add('product__heading');
    heading.textContent = element.title;

    const description = document.createElement('p');
    description.classList.add('product__description');
    description.textContent = element.description;

    const price = document.createElement('p');
    price.classList.add('product__price');
    price.textContent = element.price;

    const btn = document.createElement('button');
    btn.classList.add('product__button');
    btn.textContent = "Add to Cart";

    productList.appendChild(liEl);
    liEl.appendChild(img);
    liEl.appendChild(heading);
    liEl.appendChild(description);
    liEl.appendChild(price);
    liEl.appendChild(btn);

});