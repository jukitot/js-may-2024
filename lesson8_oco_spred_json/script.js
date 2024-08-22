//#AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додаки перевірки на undefined, null, NaN.
// Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.


function deepCopy(object) {
    if (object === null || typeof object !== 'object') {
        return object;
    }

    if (Array.isArray(object)) {
        return object.map(deepCopy);
    }

    const copy = { ...object };
    for (let key in copy) {
        copy[key] = deepCopy(copy[key]);
    }

    return copy;
}
let user = {
    id: 1, name: 'Alex', age: 23, foobar() {
        console.log(`hello, i'm ${this.name}`);
    },
    skills: ['html', 'js', 'css']
}
user.age = 25
user.skills.push('react')
console.log(user);


let newCopy = deepCopy(user);
newCopy.age = 21;
newCopy.skills.push('angular')
console.log(newCopy);
newCopy.foobar()
console.log(user.skills);
console.log(newCopy.skills);

console.log(deepCopy(null));
console.log(deepCopy(NaN));
console.log(deepCopy(undefined));

// #iz6emEsP2BA
// - є масив

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
// Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції

let mappedArray = coursesAndDurationArray.map((user, index) => ({
        id: index + 1,
        ...user
    }));

console.log(mappedArray);
