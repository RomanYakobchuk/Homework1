//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//      -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//      -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//      -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//      -- changeYear (newValue) - змінює рік випуску на значення newValue
//      -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Cars(model, producer, graduationYear, maxSpeed, engineCapacity) {
    this.model = model;
    this.producer = producer;
    this.graduationYear = graduationYear;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };

    this.info = function () {
        for (const key in this) {
            if (typeof this[key] !== 'function') console.log(`${key} - ${this[key]}`);
        }
    };

    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
    };

    this.changeYear = function (newValue) {
        this.graduationYear = newValue;
    };

    this.addDriver = function (driver) {
        this.driver = driver;
    };
};

let addCar = new Cars('Nissan', 'Japan', 2013, 240, 1.6);
console.log(addCar);
addCar.drive();
addCar.info();
addCar.increaseMaxSpeed(10);
addCar.drive();
addCar.changeYear(2020);
addCar.info();
addCar.addDriver('Serhiy');
console.log(addCar);


//- (Те саме, тільки через клас)
//Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//      -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//      -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//      -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//      -- changeYear (newValue) - змінює рік випуску на значення newValue
//      -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Cars2 {
    constructor(model, producer, graduationYear, maxSpeed, engineCapacity) {
        this.model = model;
        this.producer = producer;
        this.graduationYear = graduationYear;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };

    info() {
        for (const key in this) {
            if (typeof this[key] !== 'function') console.log(`${key} - ${this[key]}`);
        }
    };

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
    };

    changeYear(newValue) {
        this.graduationYear = newValue;
    };

    addDriver(driver) {
        this.driver = driver;
    };
};

let addCar2 = new Cars2('Opel', 'Germany', 2008, 220, 1.4);
console.log(addCar2);
addCar2.drive();
addCar2.info();
addCar2.increaseMaxSpeed(40);
addCar2.drive();
addCar2.changeYear(2020);
addCar2.info();
addCar2.addDriver('Vasyl');
console.log(addCar2);


//-створити клас/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Popelyushka {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
const arrPopelyushka = [
    new Popelyushka('Vasyl', 30, 43),
    new Popelyushka('Anna', 20, 39),
    new Popelyushka('Vika', 36, 39),
    new Popelyushka('Nastya', 48, 38),
    new Popelyushka('Katya', 30, 40),
    new Popelyushka('Lesya', 21, 37),
    new Popelyushka('Igor', 45, 44),
    new Popelyushka('Serhiy', 35, 43),
    new Popelyushka('Marina', 33, 36),
    new Popelyushka('Kolya', 30, 41),
];

//Створити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Princ {
    constructor(name, age, shoeFound) {
        this.name = name;
        this.age = age;
        this.shoeFound = shoeFound;
    }
}

const princ = new Princ('Stepan', 28, 37);
//    За допомоги циклу знайти яка попелюшка повинна бути з принцом.
const Para = (arrPopelyushka, princ) => {
    for (let item of arrPopelyushka) {
        if(item.footSize === princ.shoeFound){
            return `Твоя попелюшка - ${item.name}`;
        }
    }
}
console.log(Para(arrPopelyushka, princ));

//    Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
console.log(arrPopelyushka.find((item) => item.footSize === princ.shoeFound));
