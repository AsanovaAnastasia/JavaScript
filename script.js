const ta = document.querySelector('textarea');
const ulEl = document.querySelector('ul');
const liEl = document.querySelectorAll('ul li');






document.addEventListener("DOMContentLoaded", function () {
    console.log('Everything was loaded');
})

window.addEventListener('load', function () {
    console.log('Loaded');
})


document.body.addEventListener('click', (e) => {
    const targer = e.target;
    const className = targer.classList.contains('super_element');
    if (className) {
        console.log(`Класс "super_element" есть в элементе`);
    }
    else {
        console.log(`Класса "super_element" нет в элементе`);
    }
})


ta.addEventListener('mouseover', function () {
    console.log("Вы навели на textarea");
})

ulEl.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON');
    console.log(event.target.textContent);
})

// События добавляютс в порядке добавления, клик на список выполняется быстрее, чем кли на кнопку внутри этого списка.

liEl.forEach(li, index => {
    if (index % 2 === 1) {
        li.style.backgroundColor = 'purple';
    }
});

