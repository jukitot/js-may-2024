//#XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let usersArr = [];
usersArr.push(new User(1, 'Alex', 'Petrov', 'alexpetrov1999@gmail.com', '09812345678'));
usersArr.push(new User(2, 'Oleg', 'Ivanov', 'olegivanov1989@gmail.com', '09712369678'));
usersArr.push(new User(3, 'Maria', 'Zaruba', 'mariazaruba1998@gmail.com', '06384545678'));
usersArr.push(new User(4, 'Daria', 'Ketova', 'dariaketova2000@gmail.com', '0705826345678'));
usersArr.push(new User(5, 'Maksim', 'Sativa', 'maksimsativa1999@gmail.com', '04458345678'));
usersArr.push(new User(6, 'Anton', 'Letov', 'antonletov2001@gmail.com', '09012345678'));
usersArr.push(new User(7, 'Denis', 'Nikitin', 'denisnikitin2003@gmail.com', '09158525678'));
usersArr.push(new User(8, 'Anastasiia', 'Oleksova', 'anastasiiaoleksova1980@gmail.com', '09975285678'));
usersArr.push(new User(9, 'Svitlana', 'Titova', 'svitlanatitova1991@gmail.com', '060551455678'));
usersArr.push(new User(10, 'David', 'Vetrov', 'davidvatrov2004@gmail.com', '09812345123'));

console.log(usersArr);

// #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filterUsersId = usersArr.filter(value => value.id % 2 === 0);
console.log(filterUsersId);

// #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortUsersId = usersArr.sort((user1, user2) => {
    return user1.id - user2.id;
})
console.log(sortUsersId);


// #nkMXISv
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
//
class Client  extends User{

    constructor(id, name, surname, email, phone, order) {
        super (id, name, surname, email, phone)
        this.order = order;
    }
}

let clientsArr = [];
clientsArr.push(new Client(11, 'Alex', 'Petrov', 'alexpetrov1999@gmail.com', '09812345678', []));
clientsArr.push(new Client(12, 'Oleg', 'Ivanov', 'olegivanov1989@gmail.com', '09712369678'));
clientsArr.push(new Client(13, 'Maria', 'Zaruba', 'mariazaruba1998@gmail.com', '06384545678'));
clientsArr.push(new Client(14, 'Daria', 'Ketova', 'dariaketova2000@gmail.com', '0705826345678'));
clientsArr.push(new Client(15, 'Maksim', 'Sativa', 'maksimsativa1999@gmail.com', '04458345678'));
clientsArr.push(new Client(16, 'Anton', 'Letov', 'antonletov2001@gmail.com', '09012345678'));
clientsArr.push(new Client(17, 'Denis', 'Nikitin', 'denisnikitin2003@gmail.com', '09158525678'));
clientsArr.push(new Client(18, 'Anastasiia', 'Oleksova', 'anastasiiaoleksova1980@gmail.com', '09975285678'));
clientsArr.push(new Client(19, 'Svitlana', 'Titova', 'svitlanatitova1991@gmail.com', '060551455678'));
clientsArr.push(new Client(20, 'David', 'Vetrov', 'davidvatrov2004@gmail.com', '09812345123'));
// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
//
// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
//
//
// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter