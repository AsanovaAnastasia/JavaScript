const chiefs = new Map([
    ['Victor', 'Pizza'],
    ['Olga', 'Suchi'],
    ['Dmitri', 'Desserts']
]);

const chiefsDishes = new Map([
    ['Pizza "Margarita"', 'Victor'],
    ['Pizza "Pepperoni"','Victor'],
    ['Sushi "Philadelphia"','Olga'],
    ['Sushi "California"','Olga'],
    ['Tiramisu','Dmitri'],
    ['Cheesecake','Dmitri']
]);

const orders = new Map();

function addOrder(client, dishes) {
    const clientKey = { name: client };
    orders.set(clientKey, dishes);
}

addOrder('Alexei', ['Pizza "Pepperoni"', 'Tiramisu']);
addOrder('Maria', ['Sushi "California"', 'Pizza "Margarita"']);
addOrder('Irina', ['Cheesecake']);


function displayOrder() {
    for (const [client, dishes] of orders) {
        console.log(`Client "${client.name}" ordered: ${dishes.join(', ')}`);
        dishes.forEach(dish => {
            const chief = chiefsDishes.get(dish);
            console.log(` --- ${chief} is cooking ${dish}`);
        });
    }
}

displayOrder();