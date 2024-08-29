//#sH8c4er
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

let block1 = document.getElementById('text')
let button = document.getElementById('button');
button.onclick = function () {
    block1.style.display = 'none';
}


// #j693ca8
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//

let inputAge = document.getElementById('input_age');
let buttonAge = document.getElementById('button_age');
let ageBlock = document.getElementById('age_block')
buttonAge.onclick = function () {
    let age = parseInt(inputAge.value)
    if (age >= 18) {
        ageBlock.innerText = 'You can watch Adult content :)'
    }
    if (age < 18) {
        ageBlock.innerText = 'Oh, no. You are so small. You can watch only cartoons :('
    } else {
        ageBlock.innerText = 'Please, enter correct value. It can be only numbers'
    }
}


// #ymAmN2xJ
// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом


let form = document.getElementById('form1');
let name = form.name;
let surname = form.surname;
let age = form.age;
let formBlock = document.getElementById('form_block')

form.onsubmit = function (ev) {
    ev.preventDefault();
    let user = {
        name: name.value,
        surname: surname.value,
        age: age.value
    }

    formBlock.innerText = `${user.name} ${user.surname} ${user.age} years`

}

// #2VaLt4vDczH
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let numBlock = document.getElementById('number');
let num = parseInt(localStorage.getItem('num')) || parseInt(numBlock.innerText);
num = num + 1;
numBlock.innerText = num
localStorage.setItem('num', num);


// #LhSfdhM3
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessionsList зберігається інформація про дату та час відвідування сторінки. Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM
//

let array = JSON.parse(localStorage.getItem('sessionList')) || [];

let dateNow = new Date();
let date = dateNow.getDate();
let month = dateNow.getMonth() + 1;
let year = dateNow.getFullYear();
let hours = dateNow.getHours();
let minutes = dateNow.getMinutes()
let seconds = dateNow.getSeconds()

let fullDate = date + '/' + month + '/' + year + ' ' + hours + ':' + minutes + ':' + seconds;

array.push(fullDate);
localStorage.setItem('sessionList', JSON.stringify(array))

//продовження в скрипті sessionsListPage.html


//
// #NKB0tgWIK1G
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
//

const users = [
    {id: 1, name: "John", surname: "Doe", email: "john.doe@example.com", dateOfBirth: "1990-01-15"},
    {id: 2, name: "Jane", surname: "Smith", email: "jane.smith@example.com", dateOfBirth: "1985-02-20"},
    {id: 3, name: "Michael", surname: "Johnson", email: "michael.johnson@example.com", dateOfBirth: "1978-03-25"},
    {id: 4, name: "Emily", surname: "Williams", email: "emily.williams@example.com", dateOfBirth: "1992-04-30"},
    {id: 5, name: "Sarah", surname: "Brown", email: "sarah.brown@example.com", dateOfBirth: "1988-05-10"},
    {id: 6, name: "David", surname: "Jones", email: "david.jones@example.com", dateOfBirth: "1995-06-05"},
    {id: 7, name: "Laura", surname: "Garcia", email: "laura.garcia@example.com", dateOfBirth: "1991-07-22"},
    {id: 8, name: "James", surname: "Miller", email: "james.miller@example.com", dateOfBirth: "1983-08-18"},
    {id: 9, name: "Linda", surname: "Davis", email: "linda.davis@example.com", dateOfBirth: "1979-09-12"},
    {id: 10, name: "Robert", surname: "Rodriguez", email: "robert.rodriguez@example.com", dateOfBirth: "1994-10-08"},
    {id: 11, name: "Jessica", surname: "Martinez", email: "jessica.martinez@example.com", dateOfBirth: "1987-11-14"},
    {id: 12, name: "William", surname: "Hernandez", email: "william.hernandez@example.com", dateOfBirth: "1993-12-19"},
    {id: 13, name: "Sophia", surname: "Lopez", email: "sophia.lopez@example.com", dateOfBirth: "1996-01-25"},
    {id: 14, name: "Daniel", surname: "Gonzalez", email: "daniel.gonzalez@example.com", dateOfBirth: "1984-02-09"},
    {id: 15, name: "Olivia", surname: "Wilson", email: "olivia.wilson@example.com", dateOfBirth: "1990-03-17"},
    {id: 16, name: "Matthew", surname: "Anderson", email: "matthew.anderson@example.com", dateOfBirth: "1985-04-20"},
    {id: 17, name: "Ava", surname: "Thomas", email: "ava.thomas@example.com", dateOfBirth: "1992-05-26"},
    {id: 18, name: "Ethan", surname: "Taylor", email: "ethan.taylor@example.com", dateOfBirth: "1989-06-12"},
    {id: 19, name: "Isabella", surname: "Moore", email: "isabella.moore@example.com", dateOfBirth: "1994-07-29"},
    {id: 20, name: "Alexander", surname: "Jackson", email: "alexander.jackson@example.com", dateOfBirth: "1991-08-15"},
    {id: 21, name: "Mia", surname: "White", email: "mia.white@example.com", dateOfBirth: "1988-09-20"},
    {id: 22, name: "Noah", surname: "Clark", email: "noah.clark@example.com", dateOfBirth: "1993-10-30"},
    {id: 23, name: "Liam", surname: "Lewis", email: "liam.lewis@example.com", dateOfBirth: "1984-11-11"},
    {id: 24, name: "Charlotte", surname: "Walker", email: "charlotte.walker@example.com", dateOfBirth: "1992-12-09"},
    {id: 25, name: "Evelyn", surname: "Hall", email: "evelyn.hall@example.com", dateOfBirth: "1987-01-14"},
    {id: 26, name: "Benjamin", surname: "Young", email: "benjamin.young@example.com", dateOfBirth: "1991-02-21"},
    {id: 27, name: "Aiden", surname: "King", email: "aiden.king@example.com", dateOfBirth: "1994-03-18"},
    {id: 28, name: "Harper", surname: "Scott", email: "harper.scott@example.com", dateOfBirth: "1989-04-12"},
    {id: 29, name: "Ella", surname: "Adams", email: "ella.adams@example.com", dateOfBirth: "1993-05-26"},
    {id: 30, name: "Jack", surname: "Baker", email: "jack.baker@example.com", dateOfBirth: "1986-06-15"},
    {id: 31, name: "Amelia", surname: "Mitchell", email: "amelia.mitchell@example.com", dateOfBirth: "1995-07-20"},
    {id: 32, name: "Lucas", surname: "Carter", email: "lucas.carter@example.com", dateOfBirth: "1987-08-22"},
    {id: 33, name: "Mason", surname: "Roberts", email: "mason.roberts@example.com", dateOfBirth: "1994-09-12"},
    {id: 34, name: "Zoe", surname: "Nelson", email: "zoe.nelson@example.com", dateOfBirth: "1990-10-14"},
    {id: 35, name: "Owen", surname: "Hill", email: "owen.hill@example.com", dateOfBirth: "1989-11-30"},
    {id: 36, name: "Chloe", surname: "Collins", email: "chloe.collins@example.com", dateOfBirth: "1993-12-19"},
    {id: 37, name: "Gabriel", surname: "Stewart", email: "gabriel.stewart@example.com", dateOfBirth: "1986-01-10"},
    {id: 38, name: "Lily", surname: "Morris", email: "lily.morris@example.com", dateOfBirth: "1991-02-28"},
    {id: 39, name: "Elijah", surname: "Rogers", email: "elijah.rogers@example.com", dateOfBirth: "1992-03-17"},
    {id: 40, name: "Sofia", surname: "Reed", email: "sofia.reed@example.com", dateOfBirth: "1985-04-05"},
    {id: 41, name: "James", surname: "Cook", email: "james.cook@example.com", dateOfBirth: "1990-05-23"},
    {id: 42, name: "Avery", surname: "Morgan", email: "avery.morgan@example.com", dateOfBirth: "1994-06-12"},
    {id: 43, name: "Mila", surname: "Bell", email: "mila.bell@example.com", dateOfBirth: "1988-07-29"},
    {id: 44, name: "Wyatt", surname: "Ward", email: "wyatt.ward@example.com", dateOfBirth: "1992-08-17"},
    {id: 45, name: "Hannah", surname: "Watson", email: "hannah.watson@example.com", dateOfBirth: "1987-09-14"},
    {id: 46, name: "Ethan", surname: "Brooks", email: "ethan.brooks@example.com", dateOfBirth: "1993-10-08"},
    {id: 47, name: "Leah", surname: "Price", email: "leah.price@example.com", dateOfBirth: "1990-11-21"},
    {id: 48, name: "Jacob", surname: "Wood", email: "jacob.wood@example.com", dateOfBirth: "1985-12-03"},
    {id: 49, name: "Grace", surname: "Turner", email: "grace.turner@example.com", dateOfBirth: "1992-01-18"},
    {id: 50, name: "Daniel", surname: "Foster", email: "daniel.foster@example.com", dateOfBirth: "1994-02-20"},
    {id: 51, name: "Nora", surname: "Murray", email: "nora.murray@example.com", dateOfBirth: "1988-03-26"},
    {id: 52, name: "Jackson", surname: "Parker", email: "jackson.parker@example.com", dateOfBirth: "1993-04-10"},
    {id: 53, name: "Maya", surname: "Ward", email: "maya.ward@example.com", dateOfBirth: "1991-05-15"},
    {id: 54, name: "Ryan", surname: "Bennett", email: "ryan.bennett@example.com", dateOfBirth: "1986-06-07"},
    {id: 55, name: "Samantha", surname: "James", email: "samantha.james@example.com", dateOfBirth: "1992-07-21"},
    {id: 56, name: "Luke", surname: "Grant", email: "luke.grant@example.com", dateOfBirth: "1989-08-18"},
    {id: 57, name: "Scarlett", surname: "Phillips", email: "scarlett.phillips@example.com", dateOfBirth: "1995-09-12"},
    {id: 58, name: "Jaxon", surname: "Cruz", email: "jaxon.cruz@example.com", dateOfBirth: "1993-10-23"},
    {id: 59, name: "Victoria", surname: "Sanders", email: "victoria.sanders@example.com", dateOfBirth: "1989-11-30"},
    {id: 60, name: "Matthew", surname: "Morris", email: "matthew.morris@example.com", dateOfBirth: "1992-12-15"},
    {id: 61, name: "Addison", surname: "Price", email: "addison.price@example.com", dateOfBirth: "1988-01-20"},
    {id: 62, name: "Carter", surname: "James", email: "carter.james@example.com", dateOfBirth: "1994-02-14"},
    {id: 63, name: "Harrison", surname: "Martin", email: "harrison.martin@example.com", dateOfBirth: "1991-03-19"},
    {id: 64, name: "Ella", surname: "Bailey", email: "ella.bailey@example.com", dateOfBirth: "1986-04-09"},
    {id: 65, name: "Landon", surname: "Cooper", email: "landon.cooper@example.com", dateOfBirth: "1993-05-27"},
    {id: 66, name: "Lucy", surname: "Gray", email: "lucy.gray@example.com", dateOfBirth: "1995-06-15"},
    {id: 67, name: "Eli", surname: "Torres", email: "eli.torres@example.com", dateOfBirth: "1987-07-22"},
    {id: 68, name: "Zoe", surname: "Kelly", email: "zoe.kelly@example.com", dateOfBirth: "1992-08-18"},
    {id: 69, name: "Oliver", surname: "Morris", email: "oliver.morris@example.com", dateOfBirth: "1990-09-30"},
    {id: 70, name: "Aria", surname: "Wright", email: "aria.wright@example.com", dateOfBirth: "1989-10-12"},
    {id: 71, name: "Jack", surname: "Walker", email: "jack.walker@example.com", dateOfBirth: "1994-11-21"},
    {id: 72, name: "Riley", surname: "Roberts", email: "riley.roberts@example.com", dateOfBirth: "1991-12-15"},
    {id: 73, name: "Aiden", surname: "Young", email: "aiden.young@example.com", dateOfBirth: "1986-01-08"},
    {id: 74, name: "Layla", surname: "Nelson", email: "layla.nelson@example.com", dateOfBirth: "1993-02-28"},
    {id: 75, name: "Sebastian", surname: "Howard", email: "sebastian.howard@example.com", dateOfBirth: "1992-03-21"},
    {id: 76, name: "Maya", surname: "Ramirez", email: "maya.ramirez@example.com", dateOfBirth: "1987-04-14"},
    {id: 77, name: "Mason", surname: "Lopez", email: "mason.lopez@example.com", dateOfBirth: "1994-05-30"},
    {id: 78, name: "Ella", surname: "Rivera", email: "ella.rivera@example.com", dateOfBirth: "1990-06-25"},
    {id: 79, name: "Lucas", surname: "Hughes", email: "lucas.hughes@example.com", dateOfBirth: "1989-07-12"},
    {id: 80, name: "Sophie", surname: "Flores", email: "sophie.flores@example.com", dateOfBirth: "1992-08-18"},
    {id: 81, name: "Henry", surname: "Wright", email: "henry.wright@example.com", dateOfBirth: "1988-09-09"},
    {id: 82, name: "Chloe", surname: "Wood", email: "chloe.wood@example.com", dateOfBirth: "1993-10-15"},
    {id: 83, name: "Liam", surname: "Bennett", email: "liam.bennett@example.com", dateOfBirth: "1987-11-30"},
    {id: 84, name: "Lila", surname: "Morris", email: "lila.morris@example.com", dateOfBirth: "1992-12-10"},
    {id: 85, name: "Ryan", surname: "Ward", email: "ryan.ward@example.com", dateOfBirth: "1991-01-05"},
    {id: 86, name: "Ava", surname: "Cook", email: "ava.cook@example.com", dateOfBirth: "1990-02-22"},
    {id: 87, name: "Ella", surname: "Brooks", email: "ella.brooks@example.com", dateOfBirth: "1994-03-13"},
    {id: 88, name: "David", surname: "Gray", email: "david.gray@example.com", dateOfBirth: "1988-04-20"},
    {id: 89, name: "Nora", surname: "Wright", email: "nora.wright@example.com", dateOfBirth: "1992-05-30"},
    {id: 90, name: "Gabriel", surname: "Morris", email: "gabriel.morris@example.com", dateOfBirth: "1987-06-15"},
    {id: 91, name: "Mila", surname: "Taylor", email: "mila.taylor@example.com", dateOfBirth: "1995-07-12"},
    {id: 92, name: "James", surname: "Johnson", email: "james.johnson@example.com", dateOfBirth: "1990-08-28"},
    {id: 93, name: "Mia", surname: "Anderson", email: "mia.anderson@example.com", dateOfBirth: "1993-09-05"},
    {id: 94, name: "Ethan", surname: "Lee", email: "ethan.lee@example.com", dateOfBirth: "1989-10-12"},
    {id: 95, name: "Olivia", surname: "Parker", email: "olivia.parker@example.com", dateOfBirth: "1991-11-23"},
    {id: 96, name: "Daniel", surname: "Walker", email: "daniel.walker@example.com", dateOfBirth: "1985-12-15"},
    {id: 97, name: "Harper", surname: "Young", email: "harper.young@example.com", dateOfBirth: "1992-01-18"},
    {id: 98, name: "Sophia", surname: "Scott", email: "sophia.scott@example.com", dateOfBirth: "1988-02-25"},
    {id: 99, name: "Jackson", surname: "Wright", email: "jackson.wright@example.com", dateOfBirth: "1995-03-14"},
    {id: 100, name: "Lucas", surname: "White", email: "lucas.white@example.com", dateOfBirth: "1993-10-07"}
];

let currentPage = 0;
let itemsOnPage = 10;

let usersBlock = document.getElementById('users_block');
let ulUsers = document.createElement('ul');
usersBlock.append(ulUsers)

function usersPage() {
    ulUsers.innerHTML = '';

    let start = currentPage * itemsOnPage
    let end = start + itemsOnPage

    for (let i = start; i < end; i++) {
        let liUser = document.createElement('li')
        liUser.innerText = `Id: ${users[i].id} ${users[i].name} ${users[i].surname} ${users[i].email} ${users[i].dateOfBirth}`
        ulUsers.append(liUser)
    }
}

let prev = document.getElementById('btn-prev');
let next = document.getElementById('btn-next');

prev.onclick = function () {
    if (currentPage > 0) {
        currentPage--
        usersPage()
    }
}
next.onclick = function () {
    if (currentPage < (users.length / itemsOnPage) - 1) {
        currentPage++
        usersPage()
    }
}
usersPage()

// #Jg0gPO00
// створити конвертор ваги з кг в фунти. данні заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок
//

let kg = document.getElementById('kg_input');
let textResult = document.getElementById('result')

kg.oninput = function () {
    textResult.innerText = kg.value * 2.20462262;
}


// #RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void
//

localStorage.setItem('firstArray', '[]')

function addToLocalStorage(arrayName, objToAdd) {
    let findArray = localStorage.getItem(arrayName)
    let array = JSON.parse(findArray)

    if (typeof objToAdd === 'object') {
        array.push(objToAdd)
    }
    localStorage.setItem(arrayName, JSON.stringify(array))
}

addToLocalStorage('firstArray', {id: 1})

// #kUSgFqWY
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

let table = document.getElementById('generate');

let formTable = document.forms['table_form'];
formTable.onsubmit = function (ev) {
    ev.preventDefault()
    table.innerText = '';
    let rows = formTable.rows.value;
    let cells = formTable.cells.value;
    let text = formTable.table_text.value;

    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr')
        for (let j = 0; j < cells; j++) {
            let td = document.createElement('td')
            td.innerText = text;
            tr.append(td)
        }
        table.append(tr);
    }
}


// (Додатковачастина для завдання)

// #bq1zkx7WP
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//  зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//  При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається