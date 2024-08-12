//- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log

let hello = 'hello';
let owu = 'owu';
let com = 'com';
let ua = 'ua';
let num1 = 1;
let num2 = 10;
let num3 = -999;
let num4 = 123;
const PI = 3.14;
let num5 = 2.7;
let num6 = 16;
let bool1 = true;
let bool2 = false;
console.log(hello);
console.log(owu);
console.log(com);
console.log(ua);
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(PI);
console.log(num5);
console.log(num6);
console.log(bool1);
console.log(bool2);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Anastasiia';
let middleName = 'Romanivna';
let lastName = 'Irzhytska';
let fullName = firstName + ' ' + middleName + ' ' + lastName;
console.log(fullName);

let fullName2 = `${firstName} ${middleName} ${lastName}`
console.log(fullName2);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;

let a = 100;
let b = '100';
let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

firstName = prompt('Enter your name');
middleName = prompt('Enter your middle name');
let age = prompt('Enter your age');
console.log(`${firstName} ${middleName} ${age}`)