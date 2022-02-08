//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectangle(a, b) {
        return a * b;
}
console.log('площа прямокутника:',rectangle(2, 4));
//- створити функцію яка обчислює та повертає площу кола з радіусом r
let numberpi = 3.14;
function circleS(r) {
        return numberpi * r *r;
}
console.log('площа кола:',circleS(5));

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinder(h, r) {
        return (numberpi * r * r * 2) + (2 * r * numberpi * h);
}
console.log('площа циліндра:', cylinder(10, 5));

//- створити функцію яка приймає масив та виводить кожен його елемент
let array = [1, 3, 35, 'egtg', true, 4234];
function mas(array) {
        for (let i = 0; i < array.length; i++) {
                console.log(array[i]);
        }
}
mas(array);

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
 function texts (text) {
     document.write(`<p>${text}</p>`);
     for (let i = 1; i <= 5; i++) {
        document.write(`<p>${i} - ${text}</p>`);
     }
 }
 texts('lorem ipsum');

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function elementUl(a) {
        document.write(`<ul>`);
        document.write(`<li>${a}</li>`);
        document.write(`<li>${a}</li>`);
        document.write(`<li>${a}</li>`);
        document.write(`</ul>`);
}
elementUl('tekg6nvh tyhvjry');

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function createUl(a, b){
        document.write(`<ul>`);
        for (let i = 1; i <= b; i++) {
                document.write(`<li>${a} - ${[i]}</li>`);
        }
        document.write(`</ul>`);
}
createUl('ergecg', 5);

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let masPrimitive = [2313, 968, 0, 'ernguoen', true, false, -6575.7];
function primitive(masPrimitive){
        document.write(`<ul>`);
        for (let i = 0; i < masPrimitive.length; i++) {
                document.write(`<li>${masPrimitive[i]}</li>`);
        }
        document.write(`</ul>`);
}
primitive(masPrimitive);

//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let newArray = [
        {
                id: 111,
                name: 'Roman',
                age: 18
        },
        {
                id: 112,
                name: 'Valeriy',
                age: 68
        },
        {
                id: 113,
                name: 'Ivan',
                age: 34
        },
        {
                id: 114,
                name: 'Oleg',
                age: 33
        }
];
function masObjects(array) {
    for (const arrayElement of array) {
        document.write(`<div> id - ${arrayElement.id}; name: ${arrayElement.name} - ${arrayElement.age} y.o.</div>`);
    }
}
masObjects(newArray);