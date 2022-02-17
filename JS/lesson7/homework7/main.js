//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
}
const users = [
    new User(34, 'Roman', 'Yakobchuk', 'qwerty@gmail.com', '0981231212'),
    new User(453, 'Ivan', 'Svitskiy', 'qwerty12@gmail.com', '0981233434'),
    new User(983, 'Valeriy', 'Qwerty', 'qwerty13@gmail.com', '0981235654'),
    new User(7, 'Jonny', 'Depp', 'qwerty14@gmail.com', '0987642323'),
    new User(378, 'Bob', 'Smith', 'qwerty15@gmail.com', '0988764932'),
    new User(626, 'Serhiy', 'Vovkin', 'qwerty324@gmail.com', '0981568856'),
    new User(1234, 'Sanya', 'Pupkin', 'qwerty2422@gmail.com', '0981565442'),
    new User(985, 'Vasya', 'Pupkin', 'qwerty46722@gmail.com', '0986754352'),
    new User(9, 'Petro', 'Pupkin', 'ccrrct7867@gmail.com', '0981695492'),
    new User(760, 'Alex', 'Pupkin', 'evycm02394392@gmail.com', '0981556742')
];
console.log(users);

//- Взяти масив з User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let usersFilter = users.filter(value => value.id % 2 === 0)
console.log(usersFilter);


//- Взяти масив з User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let usersSort = users.sort((a, b) => a.id - b.id);
console.log(usersSort);


//- створити клас для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
//створити пустий масив, наповнити його 10 об'єктами Client
class Client{
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
const clients = [
    new Client(34, 'Roman', 'Yakobchuk', 'qwerty@gmail.com', '0981231212', ['phone', 'cover', 'protective glass']),
    new Client(453, 'Ivan', 'Svitskiy', 'qwerty12@gmail.com', '0981233434', ['cup', 'plate', 'forks']),
    new Client(983, 'Valeriy', 'Qwerty', 'qwerty13@gmail.com', '0981235654', ['phone', 'game', 'sneakers', 'hoody']),
    new Client(7, 'Jonny', 'Depp', 'qwerty14@gmail.com', '0987642323', ['milk', 'eggs', 'sausage', 'potato', 'tomato']),
    new Client(378, 'Bob', 'Smith', 'qwerty15@gmail.com', '0988764932', ['phone', 'book', 'game']),
    new Client(626, 'Serhiy', 'Vovkin', 'qwerty324@gmail.com', '0981568856', ['xbox x']),
    new Client(1234, 'Sanya', 'Pupkin', 'qwerty2422@gmail.com', '0981565442', ['iPhone', 'macbook', 'charger']),
    new Client(985, 'Vasya', 'Pupkin', 'qwerty46722@gmail.com', '0986754352', ['footwear', 'pants', 't-shirt', ]),
    new Client(9, 'Petro', 'Pupkin', 'ccrrct7867@gmail.com', '0981695492', ['phone', 'book', 'game', 'products']),
    new Client(760, 'Alex', 'Pupkin', 'evycm02394392@gmail.com', '0981556742', ['phone', 'book', 'game', ])
];
console.log(clients);


//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let clientsSort = clients.sort((a, b) => a.order.length - b.order.length);
console.log(clientsSort);