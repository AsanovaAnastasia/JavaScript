let num1 = Number(prompt('Введите число num1'));
let num2 = Number(prompt('Введите число num2'));

if (num1 <= 1) {
    alert(`True`);
}
else {
    alert(`False`);
}


if (num2 >= 3) {
    alert(`True`);
}
else {
    alert(`False`);
}


let test = true;
console.log((test === true) ? `+++`: `---`);


let day = 15;
let decade;
if (day >= 1 && day <= 10) {
decade = 'первая';
} else if (day > 10 && day <= 20) {
decade = 'вторая';
} else if (day > 20 && day <= 31) {
decade = 'третья';
} else {
decade = 'некорректное число';
}
console.log(`Число ${day} попадает в ${decade} декаду месяца.`);


let number = Number(prompt('Введите число num1'));
let units = number % 10;
let tens = Math.floor((number % 100) / 10);
let hundreds = Math.floor(number / 100);
console.log(`Вчисле${number}количествосотен:${hundreds},десятков:${tens},единиц:${units}`);
