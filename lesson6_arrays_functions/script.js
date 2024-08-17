// - Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'

let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';


console.log(str1.length);
console.log(str2.length);
console.log(str3.length);


// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'

console.log(str1.toUpperCase());
console.log(str2.toUpperCase());
console.log(str3.toUpperCase());


// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let str4 = 'HELLO WORLD';
let str5 = 'LOREM IPSUM';
let str6 = 'JAVASCRIPT IS COOL';

console.log(str4.toLowerCase());
console.log(str5.toLowerCase());
console.log(str6.toLowerCase());


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
let dirtyString = ' dirty string   '
console.log(dirtyString.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str = 'Ревуть воли як ясла повні';
let stringToArray = string => string.split(' ')
let arr = stringToArray(str);
console.log(arr);


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let nums = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let mapped = nums.map(value => `${value}`);
console.log(mapped);

// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums1 = [11, 21, 3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]


// let sortNums = (array, direction) => {
//     let sort;
//     if (direction === 'ascending') {
//         sort = array.sort((num1, num2) => {
//             return num1 - num2
//         })
//     } else if (direction === 'descending') {
//         sort = array.sort((num1, num2) => {
//             return num2 - num1
//         })
//
//     }
//     return sort;
// }

let sortNums = (array, direction) => {
    let sort;
    switch (direction) {
        case 'ascending':
            sort = array.sort((num1, num2) => {
                return num1 - num2
            })
            break;
        case 'descending':
            sort = array.sort((num1, num2) => {
                return num2 - num1
            })
            break;
    }
    return sort;
}

console.log(sortNums(nums1, 'ascending'));
console.log(sortNums(nums1, 'descending'));
// ==========================

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

//  -- відсортувати його за спаданням за monthDuration

let sortCourse = coursesAndDurationArray.sort((course1, course2) => {
    return course2.monthDuration - course1.monthDuration
})
console.log(sortCourse);

//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let filteredCourse = coursesAndDurationArray.filter((course) => {
    return course.monthDuration > 5;
})
console.log(filteredCourse);

//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let mappedCourse = coursesAndDurationArray.map((value, index) => {
    return {
        id: index + 1,
        ...value
    }
})

console.log(mappedCourse);
//  =========================
//  #bolvdlhP
//  описати колоду карт (від 6 до туза без джокерів)
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }
//

let cards = [
    {cardSuit: 'spade', value: '6', color: 'black'},
    {cardSuit: 'spade', value: '7', color: 'black'},
    {cardSuit: 'spade', value: '8', color: 'black'},
    {cardSuit: 'spade', value: '9', color: 'black'},
    {cardSuit: 'spade', value: '10', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},
    {cardSuit: 'diamond', value: '6', color: 'red'},
    {cardSuit: 'diamond', value: '7', color: 'red'},
    {cardSuit: 'diamond', value: '8', color: 'red'},
    {cardSuit: 'diamond', value: '9', color: 'red'},
    {cardSuit: 'diamond', value: '10', color: 'red'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},
    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'heart', value: '7', color: 'red'},
    {cardSuit: 'heart', value: '8', color: 'red'},
    {cardSuit: 'heart', value: '9', color: 'red'},
    {cardSuit: 'heart', value: '10', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},
    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'}
];

//  - знайти піковий туз

let spadeAce = cards.find(value => {
    return value.cardSuit === 'spade' && value.value === 'ace';
})

console.log(spadeAce);

//  - всі шістки

let sixCards = cards.filter(value => {
    return value.value === '6'
})

console.log(sixCards);

//  - всі червоні карти

let redCards = cards.filter(value => {
    return value.color === 'red'
})

console.log(redCards);

//  - всі буби

let diamondCards = cards.filter(value => {
    return value.cardSuit === 'diamond'
})

console.log(diamondCards);

//  - всі трефи від 9 та більше

let clubsCards = cards.filter(value => {
    return value.cardSuit === 'clubs' && value.value >= 9;
})

console.log(clubsCards);
// =========================
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

// let reduceCard = cards.reduce((accum, card) => {
//     if (card.cardSuit === 'spade') {
//         accum.spades.push(card)
//     } else if (card.cardSuit === 'diamond') {
//         accum.diamonds.push(card)
//     } else if (card.cardSuit === 'heart') {
//         accum.hearts.push(card)
//     } else {
//         accum.clubs.push(card)
//     }
//     return accum
// }, {
//     spades: [],
//     diamonds: [],
//     hearts: [],
//     clubs: []
// });


let reduceCard = cards.reduce((accum, card) => {
    switch (card.cardSuit) {
        case 'spade':
            accum.spades.push(card);
            break;
        case 'diamond':
            accum.diamonds.push(card);
            break;
        case 'heart':
            accum.hearts.push(card);
            break;
        case 'clubs':
            accum.clubs.push(card);
            break;
    }
    return accum
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
});
console.log(reduceCard);


// =========================

// взяти з arrays.js масив coursesArray

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// --написати пошук всіх об'єктів, в яких в modules є sass

let courseFilterSass = coursesArray.filter(value => value.modules.find(module => module === 'sass'));
console.log(courseFilterSass);

// --написати пошук всіх об'єктів, в яких в modules є docker

let courseFilterDocker = coursesArray.filter(value => value.modules.find(module => module === 'docker'));
console.log(courseFilterDocker);