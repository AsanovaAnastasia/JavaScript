const initialData = [
    {
        product: "Apple iPhone 13",
        reviews: [
            {
                id: "1",
                text: "Отличный телефон! Батарея держится долго.",
            },
            {
                id: "2",
                text: "Камера супер, фото выглядят просто потрясающе.",
            },
        ],
    },
    {
        product: "Samsung Galaxy Z Fold 3",
        reviews: [
            {
                id: "3",
                text: "Интересный дизайн, но дорогой.",
            },
        ],
    },
    {
        product: "Sony PlayStation 5",
        reviews: [
            {
                id: "4",
                text: "Люблю играть на PS5, графика на высоте.",
            },
        ],
    },
];




const productName = document.querySelector('#productName');
const input = document.querySelector('#comment');
const btn = document.querySelector('.btn');
const block = document.querySelector('.block');

btn.addEventListener('click', function (e) {
    if (productName.value === '' || input.value === '') {
        throw new Error("This field couldn't be empty")
    }
    const product = productName.value.trim();
    const comment = input.value.trim();

    try {
        addReview(product, comment);
        productName.value = '';
        input.value = '';
    } catch (error) {
        throw new Error(error.message);
    }

    console.log(initialData);



});

function addReview(productName, review) {
    try {
        (productName.length < 5 || productName.length > 100 || review.length < 50 || review.length > 500);
    } catch (error) {
        alert('Product must contain from 5 to 100 symbols. Review must contain from 50 to 500 symbols');
    }

    let product = initialData.find(item => item.product === productName);
    let id = 1;
    initialData.forEach(product => {
        id += product.reviews.length;
    });
    if (!product) {

        const newProduct = {
            product: productName,
            reviews: []
        };

        initialData.push(newProduct);
        product = newProduct;
    }



    const reviewId = id.toString();
    const newReview = {
        id: reviewId,
        text: review
    };

    product.reviews.push(newReview);
    review = newReview;

    const reviewEl = document.createElement('div');
    reviewEl.classList.add('comments')

    const newProductName = document.createElement('h3');
    newProductName.textContent = product.product;
    reviewEl.append(newProductName);

    const newComment = document.createElement('p');

    for (comment of product.reviews) {
        newComment.textContent = review.text;
    }


    reviewEl.append(newComment);
    block.append(reviewEl);
    id++;
}



initialData.forEach(element => {
    const commentBlock = document.createElement('div');
    commentBlock.classList.add('comments');
    const products = document.createElement('h3');
    products.textContent = element.product;

    const comment = document.createElement('p');
    for (const review of element.reviews) {
        comment.textContent = review.text;
    }

    block.append(commentBlock);
    commentBlock.append(products);
    commentBlock.append(comment);
});



