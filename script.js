async function getUserData(id) {
    try {
        const response = await
            fetch('https://jsonplaceholder.typicode.com/users')

        if (!response.ok) {
            throw new Error("User was not found");
        }
        const userData = await response.json()
        return userData;
    }
    catch (error) { return Promise.reject(error.message) }
}

getUserData(1)
    .then(user => console.log(user))
    .catch(error => console.error(error));





async function saveUserData(user) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', { headers: { method: "POST", headers: { 'Content-type': 'application/json' }, body: JSON.stringify(user), } });
        if (!response.ok) {
            throw new Error("User's data wasn't saved");
        }
    }
    catch (error) {
        return Promise.reject(error.message);
    }
}

const user = {
    name: 'John Smith',
    age: 30,
    email: 'john@example.com'
};
saveUserData(user)
    .then(() => {
        console.log('User data saved successfully');
    })
    .catch(error => {
        console.error(error);
    });




function changeStyleDelayed(id, delay) {
    setTimeout(() => {
        const elem = document.getElementById(id);
        if (elem) {
            elem.style.color = 'purple';
        }
    }, delay);
}

changeStyleDelayed('myElement', 2000);