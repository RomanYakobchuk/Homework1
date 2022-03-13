// є масив -
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
// створити під кожен об'єкт свій блок з кнопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву
// favorites улюблених обраних об'єктів в локальному сховищі.

let userBox = document.getElementById('users');
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
for (let user of users) {
    let userDiv = document.createElement('div');
    userDiv.innerText = user.name + ' - ';
    let button = document.createElement('button');
    button.innerHTML = 'add to favorites';
    button.onclick = function (e) {
        favorites.push(user);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    };
    userDiv.append(button);
    userBox.append(userDiv);
}
// Створити сторінку favorites.html при переході на яку потрібно вивести в документ всіх обраних на попередньому етапі.