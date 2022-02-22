// Все робити за допомоги js.
// - створити блок,
let div = document.createElement('div');

//     - додати йому класи wrap, collapse, alpha, beta
div.classList.add('wrap');
div.classList.add('collapse');
div.classList.add('alpha');
div.classList.add('beta');

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
div.style.background = 'red';
div.style.color = 'blue';
div.style.fontSize = '30px';

// - додати цей блок в body.
document.body.appendChild(div);

// - клонувати його повністю, та додати клон в body.
document.body.appendChild(div.cloneNode(true));

// - Є масив:
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
let arr = ['Main','Products','About us','Contacts']
let menu = document.getElementsByClassName('menu')[0];
for (let string of arr) {
    let li1 = document.createElement('li');
    li1.append(string);
    menu.append(li1);
}


// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
for (let coursesElem of coursesAndDurationArray) {
    let divBlock1 = document.createElement('div');
    divBlock1.append(coursesElem.title, coursesElem.monthDuration);
    document.body.append(divBlock1);
}


// - Є масив
let coursesAndDurationArray2 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
for (const coursesElement2 of coursesAndDurationArray2) {
    let divBlock2 = document.createElement('div');
    divBlock2.classList.add('item');
    let h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.innerText = coursesElement2.title;
    let p = document.createElement('p');
    p.classList.add('description');
    p.innerText = coursesElement2.monthDuration;
    divBlock2.append(h1, p);
    document.body.append(divBlock2);
}