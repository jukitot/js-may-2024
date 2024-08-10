//--створити масив з:
// - з 5 числових значень

let arr1 = [10, 20, 30, 40, 50]
console.log(arr1);

// - з 5 стічкових значень

let arr2 = ['Apple', 'Orange', 'Peach', 'Pear', 'Watermelon']
console.log(arr2);

// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let arr3 = ['Man', 'Woman', 31, true, false ]
console.log(arr3);


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let arr4 = []
arr4[0] = 120;
arr4[1] = true;
arr4[2] = 'today';
arr4[3] = false;
arr4[4] = 'tomorrow';
arr4[5] = 110;
arr4[6] = 'yesterday';
console.log(arr4);

// - є масив [2,17,13,6,22,31,45,66,100,-18] :

let arr5 = [2,17,13,6,22,31,45,66,100,-18];

// 1. перебрати його циклом while
let i = 0;
while (i < arr5.length) {
    document.write(`${arr5[i]} `);
    i++
}
document.write('<hr>')

// 2. перебрати його циклом for

for (const number of arr5) {
    document.write(`${number} `)
}
document.write('<hr>')

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

i = 0;
while (i < arr5.length) {
    if (i % 2 !== 0) {
        document.write(`${arr5[i]} `);
    }
    i++
}
document.write('<hr>')

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (let i  = 0; i < arr5.length; i++) {
    if (i % 2 !== 0) {
        document.write(`${arr5[i]} `)
    }
}
document.write('<hr>')

// 5. перебрати циклом while та вивести  числа тільки парні  значення

i = 0;
while (i < arr5.length) {
    if (arr5[i] % 2 === 0) {
        document.write(`${arr5[i]} `);
    }
    i++
}
document.write('<hr>')

// 6. перебрати циклом for та вивести  числа тільки парні  значення

for (let i = 0; i < arr5.length; i++) {
    if (arr5[i] % 2 === 0) {
        document.write(`${arr5[i]} `)
    }
}
document.write('<hr>')

// 7. замінити кожне число кратне 3 на слово "okten"

for (let i = 0; i < arr5.length; i++) {
    if (arr5[i] % 3 === 0) {
        arr5[i] = 'okten'
    }
    document.write(`${arr5[i]} `)
}
document.write('<hr>')
// 8. вивести масив в зворотньому порядку.

// arr5.reverse();
// document.write(`${arr5}`)

for (let i = arr5.length-1; i >=0 ; i--) {
        document.write(`${arr5[i]} `)
}
document.write('<hr>')
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

let arr5_2 = [2,17,13,6,22,31,45,66,100,-18];
document.write('Task 9: ')
document.write('<hr>')

// 1. перебрати його циклом while

i = arr5_2.length-1;
while (i >= 0) {
    document.write(`${arr5_2[i]} `);
    i--
}
document.write('<hr>')

// 2. перебрати його циклом for

for (let i = arr5_2.length - 1; i >=0 ; i--) {
    document.write(`${arr5_2[i]} `)
}
document.write('<hr>')

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

i = arr5_2.length-1;
while (i >= 0) {
    if (i % 2 !== 0) {
        document.write(`${arr5_2[i]} `);
    }
    i--
}
document.write('<hr>')

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (let i = arr5_2.length - 1; i >=0 ; i--) {

    if (i % 2 !== 0) {
        document.write(`${arr5_2[i]} `)
    }
}
document.write('<hr>')

// 5. перебрати циклом while та вивести  числа тільки парні  значення

i = arr5_2.length-1;
while (i >= 0)  {
    if (arr5_2[i] % 2 === 0) {
        document.write(`${arr5_2[i]} `);
    }
    i--
}
document.write('<hr>')

// 6. перебрати циклом for та вивести  числа тільки парні  значення

for (let i = arr5_2.length - 1; i >= 0; i--) {
    if (arr5_2[i] % 2 === 0) {
        document.write(`${arr5_2[i]} `)
    }
}
document.write('<hr>')

// 7. замінити кожне число кратне 3 на слово "okten"

for (let i = arr5_2.length - 1; i >= 0; i--) {
    if (arr5_2[i] % 3 === 0) {
        arr5_2[i] = 'okten'
    }
    document.write(`${arr5_2[i]} `)
}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let arr6 = [10, 11, 44, 89, -4, 0, 31, 60, 2, 91];
for (let i = 0; i < arr6.length ; i++) {
    console.log(arr6[i]);
}
document.write('<hr>')

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let arr7 = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Day', 'Week', 'Month']
for (let i = 0; i < arr7.length ; i++) {
    console.log(arr7[i])
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let arr8 = [12, 'Tomato', true, 9284, 'Potato', false, 123, 'Carrot', true, 111111]
for (let i = 0; i < arr8.length ; i++) {
    console.log(arr8[i]);
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

let arr9 = [true, 'Tomato', true, 4, 'Potato', false, 8923, 'Carrot', true, 111111]
for(let i = 0; i < arr9.length; i++) {
    if (typeof arr9[i] === "boolean") {
        console.log(arr9[i]);
    }
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

for(let i = 0; i < arr9.length; i++) {
    if (typeof arr9[i] === "number") {
        console.log(arr9[i]);
    }
}
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

for(let i = 0; i < arr9.length; i++) {
    if (typeof arr9[i] === "string") {
        console.log(arr9[i]);
    }
}
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

let arr10 = []
arr10[0] = 120;
arr10[1] = true;
arr10[2] = 'today';
arr10[3] = false;
arr10[4] = 'tomorrow';
arr10[5] = 110;
arr10[6] = 'yesterday';
arr10[7] = 1992;
arr10[8] = true;
arr10[9] = 'weekend'

for (let i = 0; i < arr10.length ; i++) {
    console.log(arr10[i]);
}
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 10; i++) {
    console.log(i);
    document.write(`${i} `)
}
document.write('<hr>')
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 100; i++) {
    console.log(i);
    document.write(`${i} `)
}
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
document.write('<hr>')
for (let i = 0; i < 100; i += 2) {
    console.log(i);
    document.write(`${i} `)
}

document.write('<hr>')
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
        document.write(`${i} `)
    }
}

document.write('<hr>')
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
        document.write(`${i} `)
    }
}
//
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор