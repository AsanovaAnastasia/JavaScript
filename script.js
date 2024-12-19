const listOfClasses = document.querySelector('.listOfClasses');

const description = document.createElement('div');
description.classList.add('description-block');


const descriptionHeading = document.createElement('h2');
descriptionHeading.classList.add('className');
descriptionHeading.textContent = 'Class name:';

const descriptionTime = document.createElement('h2');
descriptionTime.classList.add('className');
descriptionTime.textContent = 'Class time:';

const descriptionFreePlaces = document.createElement('h2');
descriptionFreePlaces.classList.add('className');
descriptionFreePlaces.textContent = 'Free places:';

const descriptionTotalPlaces = document.createElement('h2');
descriptionTotalPlaces.classList.add('className');
descriptionTotalPlaces.textContent = 'Total places:';


listOfClasses.append(description);
description.appendChild(descriptionHeading);
description.appendChild(descriptionTime);
description.appendChild(descriptionFreePlaces);
description.appendChild(descriptionTotalPlaces);



classData.forEach(element => {
    const classEl = document.createElement('div');
    classEl.classList.add('class');

    const className = document.createElement('h1');
    className.classList.add('className');
    className.textContent = element.name;

    const classTime = document.createElement('h1');
    classTime.classList.add('description');
    classTime.textContent = element.time;

    const freePlaces = document.createElement('h1');
    freePlaces.classList.add('description');
    freePlaces.textContent = element.freePlaces;

    const totalPlaces = document.createElement('h1');
    totalPlaces.classList.add('description');
    totalPlaces.textContent = element.totalPlaces;



    listOfClasses.append(classEl);
    classEl.appendChild(className);
    classEl.appendChild(classTime);
    classEl.appendChild(freePlaces);
    classEl.appendChild(totalPlaces);



    if (Number(element.freePlaces) < Number(element.totalPlaces)) {
        const addButton = document.createElement('button');
        addButton.classList.add('button');
        addButton.textContent = 'Записаться на занятие';
        classEl.appendChild(addButton);

        addButton.addEventListener('click', function (e) {
            element.freePlaces = Number(element.freePlaces) - 1;
            freePlaces.textContent = element.freePlaces;
            if (Number(element.freePlaces) === 0) {
                classEl.removeChild(addButton);
                const noPlacesText = document.createElement('p');
                noPlacesText.classList.add('no-placesText');
                noPlacesText.textContent = 'Свободных мест нет';
                classEl.appendChild(noPlacesText);
            }
            alert(``)
        });
    }

    const cancelButton = document.createElement('button');
    cancelButton.classList.add('button');
    cancelButton.classList.add('cancel-button');
    cancelButton.textContent = 'Отменить запись';
    classEl.appendChild(cancelButton);

    cancelButton.addEventListener('click', function (e) {
        if (Number(element.freePlaces) < 20) {
            element.freePlaces = Number(element.freePlaces) + 1;
            freePlaces.textContent = element.freePlaces;
            if (Number(element.freePlaces) === Number(element.totalPlaces)) {
                classEl.removeChild(addButton);
            }
        }
    });

});




