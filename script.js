for (let i = 0; i < 11; i++) {
    if (i === 0) {
        console.log(`${i}- это ноль`);
    }

    if (i % 2 === 0 & i !== 0) {
        console.log(`${i} - это четное число`);
    }

    if (i % 2 !== 0) {
        console.log(`${i} - это нечетное число`);
    }

}

let array = [1, 2, 3, 4, 5, 6, 7];
array.splice(array.indexOf(4), 2);
// array.splice(array.indexOf(4), 1);
// array.splice(array.indexOf(5), 1);
console.log(array);

let array1 = [];
for (let i = 0; i < 5; i++) {
    array1.push(Math.round(Math.random() * 10));
}

let sum = 0 ;
for (let i = 0; i < array1.length; i++) {
    sum = sum + array1[i];
}
console.log(`Сумма равна ${sum}`);

let min = Math.min(...array1);
console.log(`Минимально число ${min}`);

for (let i = 0; i < array1.length; i++) {
    if (array1[i] === 3) {
        console.log(`В массиве есть цифра 3 под индексом ${i}`);
    }
}
console.log(array1);

for (let i = 1; i <= 20; i++) {
    console.log('x'.repeat(i));
}