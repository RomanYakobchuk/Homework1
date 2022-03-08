// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
let click = document.getElementById('text');
let button = document.getElementById('button');
button.onclick = function () {
    click.style.display = 'none';
}


//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let btn1 = document.getElementById('btn1');
btn1.onclick = function () {
    btn1.style.display = 'none';
}


// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

document.getElementById('btn2').onclick = function () {
    let age = document.getElementById('age').value;
    if(!age){
        alert('Ви не ввели свій вік!!!');
    }
    else if (+age < 18){
        alert('Вибачте, але ви не повнолітній!!!');
    }
    else{
        alert('Вітаю, Ви повнолітній!!!');
    }
}

// - Создайте меню, которое раскрывается/сворачивается при клике

let menu = document.querySelector('.menu');
let title = menu.querySelector('.title');
title.onclick = function () {
    menu.classList.toggle('hidden');
}

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

let comments = [
    {title: 'Kiev', body: 'The capital of UKRAINE!'},
    {title: 'Lviv', body: 'A city in which inventions were invented'},
    {title: 'Khmelnytskyi', body: 'Has the most monuments to Bohdan Khmelnytsky'},
    {title: 'Odesa', body: 'Has catacombs 3 thousand km long'}
];
let divComm = document.createElement('div');
for (const item of comments) {
    let divItem = document.createElement('div');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');

    let button = document.createElement('button');

    h3.innerText = item.title;
    p.innerHTML = item.body;
    button.innerText = 'Приховати/Показати';

    button.onclick = function () {
        p.classList.toggle('pHidden');
    };
    divItem.style.margin = '5px 10px';
    divItem.style.padding = '5px 10px';
    divItem.style.border = '1px solid black';
    divItem.style.width = '300px';

    divItem.append(h3, p, button);
    divComm.append(divItem);
}
document.body.appendChild(divComm);