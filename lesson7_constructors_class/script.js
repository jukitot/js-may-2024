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
class Client extends User {

    constructor(id, name, surname, email, phone, order) {
        super(id, name, surname, email, phone)
        this.order = order;
    }
}

let clientsArr = [];
clientsArr.push(new Client(11, 'Alex', 'Petrov', 'alexpetrov1999@gmail.com', '09812345678', ['apple', 'carrot', 'cheese', 'milk']));
clientsArr.push(new Client(12, 'Oleg', 'Ivanov', 'olegivanov1989@gmail.com', '09712369678', ['banana', 'oats', 'carrot', 'cheese', 'milk']));
clientsArr.push(new Client(13, 'Maria', 'Zaruba', 'mariazaruba1998@gmail.com', '06384545678', ['apple', 'kiwi', 'potatoes', 'carrot', 'cheese', 'milk']));
clientsArr.push(new Client(14, 'Daria', 'Ketova', 'dariaketova2000@gmail.com', '0705826345678', ['apple', 'carrot', 'cheese', 'milk', 'cucumber', 'cherry']));
clientsArr.push(new Client(15, 'Maksim', 'Sativa', 'maksimsativa1999@gmail.com', '04458345678', ['apple', 'carrot', 'cheese', 'milk', 'orange juice', 'orange']));
clientsArr.push(new Client(16, 'Anton', 'Letov', 'antonletov2001@gmail.com', '09012345678', ['fish', 'apple', 'carrot', 'cheese', 'milk', 'coca-cola']));
clientsArr.push(new Client(17, 'Denis', 'Nikitin', 'denisnikitin2003@gmail.com', '09158525678', ['apple', 'watermelon', 'carrot', 'cheese', 'milk', 'melon']));
clientsArr.push(new Client(18, 'Anastasiia', 'Oleksova', 'anastasiiaoleksova1980@gmail.com', '09975285678', ['apple', 'carrot', 'cheese', 'milk', 'pepper', 'beer']));
clientsArr.push(new Client(19, 'Svitlana', 'Titova', 'svitlanatitova1991@gmail.com', '060551455678', ['wine', 'apple', 'carrot', 'cheese', 'milk', 'water', 'lemon']));
clientsArr.push(new Client(20, 'David', 'Vetrov', 'davidvatrov2004@gmail.com', '09812345123', ['apple', 'carrot', 'cheese', 'milk', 'pineapple', 'soda', 'chicken']));

console.log(clientsArr);
// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortClientsArr = clientsArr.sort((client1, client2) => {
    return client1.order.length - client2.order.length
});

console.log(sortClientsArr);
//
// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//

function Car(model, company, year, maxSpeed, engVolume) {
    this.model = model;
    this.company = company;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engVolume = engVolume;

    this.drive = function () {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }
    this.info = function () {
        console.log(`Модель машини - ${this.model}
Виробник - ${this.company}
Рік - ${this.year} 
Максимальна швидкість - ${this.maxSpeed} 
Об'єм двигуна - ${this.engVolume} `)
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = newSpeed
    }
    this.changeYear = function (newValue) {
        this.year = newValue
    }
    this.addDriver = function (driverInfo) {
        this.driverInfo = driverInfo;
    }
}

let car = new Car('Model 3', 'Tesla', 2017, 200, 23);
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(150)
car.changeYear(2015)
car.addDriver({name: 'Alex', surname: 'Davidov', age: 23})
console.log(car);


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
class Car2 {

    constructor(model, company, year, maxSpeed, engVolume) {
        this.model = model;
        this.company = company;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engVolume = engVolume;
    }

    drive() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }

    info() {
        console.log(`Модель машини - ${this.model}
Виробник - ${this.company}
Рік - ${this.year} 
Максимальна швидкість - ${this.maxSpeed} 
Об'єм двигуна - ${this.engVolume} `)
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = newSpeed
    }

    changeYear(newValue) {
        this.year = newValue
    }

    addDriver(driverInfo) {
        this.driverInfo = driverInfo;
    }
}

let car2 = new Car2('Model 5', 'Tesla', 2016, 170, 50);
console.log(car2);
car2.drive();
car2.info();
car2.addDriver({name: 'Oleg', surname: 'Petrenko', age: 25} )
car2.changeYear(2014)
car2.increaseMaxSpeed(180)
console.log(car2);

//
// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let cinderellaArray = [];
cinderellaArray.push(new Cinderella('Maria', 18, 36))
cinderellaArray.push(new Cinderella('Sofia', 20, 38))
cinderellaArray.push(new Cinderella('Daria', 21, 34))
cinderellaArray.push(new Cinderella('Anastasiia', 23, 37))
cinderellaArray.push(new Cinderella('Katerina', 18, 33))
cinderellaArray.push(new Cinderella('Olya', 22, 40))
cinderellaArray.push(new Cinderella('Oksana', 20, 39))
cinderellaArray.push(new Cinderella('Yanina', 19, 41))
cinderellaArray.push(new Cinderella('Evgeniia', 24, 35))
cinderellaArray.push(new Cinderella('Bella', 23, 32))

class Prince {
    constructor(name, age, foundSize) {
        this.name = name;
        this.age = age;
        this.foundSize = foundSize;
    }

    searchCinderella (cinderellaArray){
        for (const cinderella of cinderellaArray) {
            if (cinderella.footSize === this.foundSize) {
                return cinderella
            }
        }
    }
}
let prince = new Prince('Adam', 21, 40)
console.log(prince.searchCinderella(cinderellaArray));


let found2 = cinderellaArray.find(cinderella => {
   return cinderella.footSize === prince.foundSize;
})
console.log(found2);
//
// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter

Array.prototype.ForEachPersonal = function (callback) {
    for (const element of this) {
        callback(element)
    }
}

Array.prototype.FilterPersonal = function (callback) {
    let arr = [];
    for (const element of this) {
        if (callback(element)) {
            arr.push(element);
        }
    }
    return arr;
}

