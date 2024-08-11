//1. Створити пустий масив та :

let arr = []
//        a. заповнити його 50 парними числами за допомоги циклу.

for (let i = 0; i < 50; i++) {
    arr[i] = (i + 1) * 2;
}
console.log(arr);

//        b. заповнити його 50 непарними числами за допомоги циклу.

for (let i = 0; i < 50; i++) {
    arr[i] = i * 2 + 1;
}
console.log(arr);

//        c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)4

arr = []
for (let i = 0; i < 20; i++) {
    arr[i] = Math.floor(Math.random() * 100);
}
console.log(arr);

//        d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
min = 8;
max = 732;
for (let i = 0; i < 20; i++) {
    arr[i] = Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(arr);
//  2. Вивести за допомогою console.log кожен третій елемен

for (let i = 2; i < arr.length; i += 3) {
    console.log(arr[i])
}
console.log('-------------------')
//  3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (let i = 2; i < arr.length; i += 3) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i])
    }
}
console.log('-------------------')
//  4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
let newArr = []
for (let i = 2; i < arr.length; i += 3) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i])
        newArr.push(arr[i]);
    }
}
console.log(newArr);

//  5. Вивести кожен елемент масиву, сусід справа якого є парним
//   EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

console.log(arr);
for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] % 2 === 0) {
        console.log(arr[i]);
    }
}

//  6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

let arrPrice = [100, 250, 50, 168, 120, 345, 188];
let result = 0;
for (let i = 0; i < arrPrice.length; i++) {
    result += arrPrice[i];
    console.log(result);
}
result = result / arrPrice.length - 1
console.log(result);
//  7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

console.log('------------------')
let arrRandom = []
let newArrRandom = []
for (let i = 0; i < 20; i++) {
    arrRandom[i] = Math.floor(Math.random() * 100);
    console.log(arrRandom[i]);
    arrRandom[i] *= 5;
    newArrRandom.push(arrRandom[i])
}
console.log(newArrRandom);

//  8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

let arr1 = [12, 'Tomato', true, 9284, 'Potato', false, 123, 'Carrot', true, 111111]
let arr2 = [];
for (let i = 0; i < arr1.length; i++) {
    if (typeof arr1[i] === 'number') {
        arr2.push(arr1[i])
    }
}
console.log(arr2);
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Example:
// let usersWithCities = [
//     {
//         id: 1, // <===
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {
//             user_id: 1, // <===
//             country: 'Ukraine',
//             city: 'Ternopil'
//         }
//     },
//     // TO BE CONTINUED .....
// ]
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
let usersWithCities = [];
for (const user of usersWithId) {
    for (const city of citiesWithId) {
        if (city.user_id === user.id) {
            let userInfo = {
                id: user.id,
                name: user.name,
                age: user.age,
                status: user.status,
                address: {
                    user_id: city.user_id,
                    country: city.country,
                    city: city.city
                }
            }
            usersWithCities.push(userInfo);
        }
    }
}
console.log(usersWithId);
console.log(usersWithCities);

//
//
//
//
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

console.log('----------------')
let arrNums = [10, 15, 3, 45, 40, 44, 85, 7, 90, 4, 77, 5]
for (const num of arrNums) {
    if (num % 2 === 0) {
        console.log(num);
    }
}
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

console.log('-------------')
let arrNum2 = [];
for (const num of arrNums) {
    arrNum2.push(num);
}
console.log(arrNums);
console.log(arrNum2);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

let arrLetter = ['a', 'b', 'c'];
let word = ''
for (let i = 0; i < arrLetter.length; i++) {
    word += arrLetter[i]
}
console.log(word);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

word = '';
let i = 0;
while (i < arrLetter.length) {
    word += arrLetter[i]
    i++
}
console.log(word);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
word = '';
for (const letter of arrLetter) {
    word += letter;
}
console.log(word);