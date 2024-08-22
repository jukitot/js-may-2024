//#AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додаки перевірки на undefined, null, NaN.
// Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.


function deepCopy(object) {
    if ({object}) {
        return {...object}
    } else {
        console.log('invalid');
    }
}

let newCopy = deepCopy({
    id: 1, name: 'Alex', age: 23, foobar() {
        console.log(`hello, i'm ${this.name}`);
    },
    skills: ['html', 'js', 'css']
});
console.log(newCopy);
newCopy.foobar()
//
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
