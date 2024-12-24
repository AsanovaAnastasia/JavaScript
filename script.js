const container = document.querySelector('.container');
const previousBtn = document.querySelector('.previous-button');
const nextBtn = document.querySelector('.next-button');
const photos = Array.from(document.querySelectorAll('.photo'));


const hideEl = document.querySelectorAll('.hide');


const changePictures = () => {
    let i = 0;

    previousBtn.addEventListener('click', function (e) {
        i = i - 1;
        photos.forEach(element => {
            element.classList.add('hide');
        });
        if (i < 0) {
            i = photos.length - 1;
            photos[i].classList.remove('hide');
        }
        else {
            photos[i].classList.remove('hide');
        }
    });
    nextBtn.addEventListener('click', function (e) {
        i = i + 1;
        photos.forEach(element => {
            element.classList.add('hide');
        });
        if (i > photos.length - 1) {
            i = 0;
            photos[i].classList.remove('hide');
        }
        else {
            photos[i].classList.remove('hide');
        }
    }); 
}

changePictures();


