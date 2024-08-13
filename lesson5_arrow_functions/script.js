//Тут ті самі завдання, що і в занятті про базові функції, але зробити їх потрібно за допомоги стрілочних функцій
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let areaRectangle = (a, b) => a * b;

console.log(areaRectangle(10, 30));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

const PI = 3.14;
let areaCircle = (r) => PI * r ** 2
console.log(areaCircle(13));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let areaCylinder = (h, r) => (2 * PI * r * h) + (2 * areaCircle(r))

console.log(areaCylinder(10, 5));

// - створити функцію яка приймає масив та виводить кожен його елемент

let loopArray = (array) => {
    for (const item of array) {
        console.log(item)
    }
}
let nums = [10, 20, 30, 40, 50, 60];
loopArray(nums);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

let paragraph = (text) => document.write(`<p>${text}</p>`)
let text1 = 'Hello World!!!';
let text2 = 'Today is a good day';
paragraph(text1);
paragraph(text2);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let list1 = (text) => document.write(`<ul>
<li>${text}</li>
<li>${text}</li>
<li>${text}</li>
</ul>`)

list1(text1);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let list2 = (text, count) => {
    document.write('<ul>')
    {
        for (let i = 0; i < count; i++) {
            document.write(`<li>${text}</li>`)
        }
        document.write('</ul>')
    }
}

list2(text1, 10)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let arrayList = (array) => {
    document.write('<ul>')
    for (let i = 0; i < array.length; i++) {
        document.write(`<li>${array[i]}</li>`)
    }
    document.write('</ul>')
}

let arrayText = [10, 'hello', true, 40, 'my name', 70, false];
arrayList(arrayText);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let objList = (array) => {
    for (const item of array) {
        document.write(`<div>
        <h1>ID: ${item.id}</h1>
        <h2>Name: ${item.name}</h2>
        <h3>Age: ${item.age}</h3>
        </div>`)
    }
}

let users = [
    {id: 1, name: 'Alex', age: 32},
    {id: 2, name: 'Oleg', age: 30},
    {id: 3, name: 'Roman', age: 25},
    {id: 4, name: 'Dmitro', age: 28},
    {id: 5, name: 'David', age: 19},
    {id: 6, name: 'Kirill', age: 33},
    {id: 7, name: 'Maxim', age: 34},
    {id: 8, name: 'Egor', age: 26}
]

objList(users);

// - створити функцію яка повертає найменьше число з масиву

let minNum = (array) => {
    let min = array[0]
    for (const num of array) {
        if (num < min) {
            min = num
        }
    }
    return min
}

console.log(minNum([2, 20, 4, 110, 1]));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let sum = (arr) => {
    let result = 0;
    for (const num of arr) {
        result += num;
    }
    return result;
}
console.log(sum([10, 20, 4, 110, 2]));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let swap = (arr, index1, index2) => {
    let num1 = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = num1;
    return arr
}

console.log([10, 20, 4, 110, 2]);
console.log(swap([10, 20, 4, 110, 2], 1, 4));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let exchange = (sum, currencyValues, exchangeCurrency) => {
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            return sum / item.value
        }
    }
}

console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));
