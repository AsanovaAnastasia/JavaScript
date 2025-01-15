const container = document.querySelector('.container');

function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
let page = 1;

async function fetchPhoto() {
    try {
        const response = await fetch(`https://api.unsplash.com/photos/random/?client_id=TePf2GAV_-WC3WveOnx71qiby_8p_lGioXFm2d99js0`);
        const photos = await response.json();
        return photos;
    }
    catch (error) {
        console.error('Ошибка при загрузке фотографий', error);
        return [];
    }
}


async function createContainer() {
    const photo = await fetchPhoto();

    const imgEl = document.createElement('img');
    imgEl.src = photo.urls.small;
    container.appendChild(imgEl);

    const name = document.createElement('p');
    name.innerHTML = photo.user.name;
    name.classList.add('name-info')
    container.appendChild(name);

    const likeDiv = document.createElement('div');
    likeDiv.classList.add('like-info');
    container.appendChild(likeDiv);

    const likeBtn = document.createElement('button');
    likeBtn.textContent = 'LIKE';
    likeBtn.classList.add('like-btn');
    likeDiv.appendChild(likeBtn);

    const likeCount = document.createElement('p');
    let count = 0;
    likeCount.textContent = photo.likes;
    likeCount.classList.add('like-count');
    likeDiv.appendChild(likeCount);

    likeBtn.addEventListener('click', function () {
        count++;
        likeCount.textContent = photo.likes + count;
    });




}

createContainer();

