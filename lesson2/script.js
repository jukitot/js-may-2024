//Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = ['Alex', 10, true, 'Max', 15, false, 'Daria', 12, true, 'Oleg'];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: 'The Catcher in the Rye',
    pageCount: 277,
    genre: 'Fiction, Coming-of-age'
}
let book2 = {
    title: '1984',
    pageCount: 328,
    genre: 'Dystopian, Science Fiction'
}
let book3 = {
    title: 'To Kill a Mockingbird',
    pageCount: 281,
    genre: 'Fiction, Historical'
}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book4 = {
    title: 'The Talisman',
    pageCount: 768,
    genre: 'Horror, Fantasy',
    authors: [
        {name: 'Stephen King', age: 76},
        {name: 'Peter Straub', age: 79}
    ]
}
let book5 = {
    title: 'Illuminae',
    pageCount: 608,
    genre: 'Science Fiction, Young Adult',
    authors: [
        {name: 'Amie Kaufman', age: 44},
        {name: 'Jay Kristoff', age: 50}
    ]
}
let book6 = {
    title: 'The Rule of Four',
    pageCount: 368,
    genre: 'Mystery, Thriller',
    authors: [
        {name: 'Ian Caldwell', age: 48},
        {name: 'Dustin Thomason', age: 48}
    ]
}
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {
        name: 'Oleg',
        username: 'prettyboy',
        password: 'qioipwn!398'
    },
    {
        name: 'Maxim',
        username: 'goodboy',
        password: 'xcbhwn!@123'
    },
    {
        name: 'Nikita',
        username: 'badboy',
        password: 'gdfjipwn!6768'
    },
    {
        name: 'Danil',
        username: 'justboy',
        password: 'olujipwn!98998'
    },
    {
        name: 'Alex',
        username: 'oldboy',
        password: 'q09dhwn!008'
    },
    {
        name: 'Stas',
        username: 'somethingboy',
        password: 'pl!sdj384'
    },
    {
        name: 'David',
        username: 'idontwhatboy',
        password: '12334wn!398'
    },
    {
        name: 'Ben',
        username: 'sunnyboy',
        password: '123pwn!398'
    },
    {
        name: 'Jacob',
        username: 'omgboy',
        password: '@133ipwn!398'
    },
    {
        name: 'Tom',
        username: 'woofboy',
        password: 'ipwn!3981dfdg'
    },
]

console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу

let temperature = [
    {
        morning: 15,
        day: 18,
        evening: 17
    },
    {
        morning: 10,
        day: 14,
        evening: 15
    },
    {
        morning: 13,
        day: 15,
        evening: 13
    },
    {
        morning: 15,
        day: 18,
        evening: 17
    },
    {
        morning: 18,
        day: 16,
        evening: 12
    },
    {
        morning: 14,
        day: 16,
        evening: 17
    },
    {
        morning: 16,
        day: 18,
        evening: 17
    }
];
console.log(temperature);

// Логічні розгалуження:

let x = prompt('enter your number')
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
if (+x !== 0) {
    console.log('Correct')
} else {
    console.log('Incorrect')
}


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 56;
if (time >= 0 && time <= 15) {
    console.log('1-th')
} else if (time >= 16 && time <= 30) {
    console.log('2-nd')
} else if (time >= 31 && time <= 50) {
    console.log('3-rd')
} else if (time >= 51 && time <= 59) {
    console.log('4-th')
} else {
    console.log('Incorrect')
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 5;
if (day >= 1 && day <= 10) {
    console.log('1-st')
} else if (day >= 11 && day <= 20) {
    console.log('2-nd')
} else if (day >= 21 && day <= 31) {
    console.log('3-rd')
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let d_day = prompt('enter your day');
switch (+d_day) {
    case 1:
        alert('Monday');
        break;
    case 2:
        alert('Tuesday');
        break;
    case 3:
        alert('Wednesday');
        break;
    case 4:
        alert('Thursday');
        break;
    case 5:
        alert('Friday');
        break;
    case 6:
        alert('Saturday');
        break;
    case 7:
        alert('Sunday');
        break;
    default:
        alert('Incorrect value')
}
// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

let num1 = prompt('enter number 1');
let num2 = prompt('enter number 2');
num1 = parseInt(num1);
num2 = parseInt(num2);
if (num1 > num2) {
    alert(num1);
} else if (num1 < num2) {
    alert(num2)
} else if (num1 === num2) {
    alert('num1 = num2')
} else {
    alert('incorrect values')
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//  буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

let x1 = false;
x1 = x1 || 'default'
console.log(x1);

// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Super')
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Super')
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Super')
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Super')
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Super')
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Super')
}
