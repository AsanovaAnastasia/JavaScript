function cube() {
    let number = Number(prompt(`Введите число`));

    number *= 3;
    console.log(number);;
}

cube();

let sum = cube() + cube();
console.log(sum);


function number () {
    let number = Number(prompt(`Введите число`));

    console.log((isNaN(number)) ? `Input not a number`: `Right`);
}

number();

function salary () {
    let salary = Number(prompt(`Введите зарплату`));
    console.log(`Размер зарплаты с вычетом налогов равен ${salary * 0.87}`);
}

salary();

function biggestNumber() {
    let number1 = Number(prompt(`Введите число 1`));
    let number2 = Number(prompt(`Введите число 2`));
    let number3 = Number(prompt(`Введите число 3`));

    if (number1 > number2 & number1 > number2) {
        console.log(`Максимальное число ${number1}`);
    }
    if (number2 > number1 & number2 > number3) {
        console.log(`Максимальное число ${number2}`);
    }
    if (number3 > number1 & number3 > number2) {
        console.log(`Максимальное число ${number3}`);
    }

}

biggestNumber();

const sum = (a, b) => a + b;
const difference = (a, b) => a - b;
const division = (a, b) => a / b;
const multiple = (a, b) => a * b;


console.log(sum(2, 3));
console.log(difference(2, 3));
console.log(division(2, 3));
console.log(multiple(2, 3));