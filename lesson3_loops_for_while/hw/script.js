//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

let a = 10;
for (let i = 0; i < a; i++) {
    document.write('Hello world! ');
}
document.write('<hr>')
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 0; i < a; i++) {
    document.write(`Lorem ${i} `);
}
document.write('<hr>')
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let b = 0;
while (b < 20) {
    document.write('<h1>Today is a good day</h1>');
    b++
}
document.write('<hr>')
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

b = 0;
while (b < 20) {
    document.write(`<h1>Hey-hoy! ${b}</h1>`);
    b++
}
document.write('<hr>')
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
document.write('<ul>')
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
for (const listOfItem of listOfItems) {
    document.write(`<li>${listOfItem}</li>`)
}
document.write('</ul>')
document.write('<hr>')
//
// ШАБЛОН:
//  <ul>
//     <li>ITEM OF ARRAY</li>
//     <!--
//         і тд інші об'єкти масиву
//          ...
//          ...
//          ...
//     -->
// </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
//
// -----------------------------------------------
//
// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://www.yogi-life.com/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FnZ9c4snS4ytPRImATDfl&w=640&q=75'
    },
];

document.write('<div class="product-card">')
for (const product of products) {
    document.write(`<h3 class="product-title">${product.title}. Price - ${product.price}</h3>
                    <img src="${product.image}" alt="" class="product-image">`)
}
document.write('</div>')
document.write('<hr>')
//
// ШАБЛОН
//  <div class="product-card">
//         <h3 class="product-title">TITLE. Price - PRICE</h3>
//         <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
//
//
//
// --------------------
// є масив
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

//  за допомоги циклу вивести:
//  - користувачів зі статусом true

for (const user of users) {
    if (user.status === true) {
        document.write(`<h2>Name: ${user.name}</h2>`)
        document.write(`<h3>Age: ${user.age}</h3>`) 
        document.write(`<h4>Status: ${user.status}</h4>`)

    }
}
document.write('<hr>')
//  - користувачів зі статусом false

for (const user of users) {
    if (user.status === false) {
        document.write(`<h2>Name: ${user.name}</h2>`)
        document.write(`<h3>Age: ${user.age}</h3>`)
        document.write(`<h4>Status: ${user.status}</h4>`)

    }
}
document.write('<hr>')
//  - користувачів які старші за 30 років

for (const user of users) {
    if (user.age > 30) {
        document.write(`<h2>Name: ${user.name}</h2>`)
        document.write(`<h3>Age: ${user.age}</h3>`)
        document.write(`<h4>Status: ${user.status}</h4>`)

    }
}