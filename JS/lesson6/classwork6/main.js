//- Дано список імен.
let nHP = 'Harry..Potter';
let nRW = 'Ron---Whisley';
let nHG = 'Hermione__Granger';
//Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
//let n1 = 'Harry Potter'
//let n2 = 'Ron Whisley'
//let n3 = 'Hermione Granger'
let normalName = (string) => {
    return string
        .replaceAll('.', ' ')
        .replaceAll('-', ' ')
        .replaceAll('_', ' ');
}
document.write(`<div>${normalName(nHP)}</div>`);
document.write(`<div>${normalName(nRW)}</div>`);
document.write(`<div>${normalName(nHG)}</div>`);
//

//    - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let random = (length, num) => {
    let emptyArray = [];
    for (let i = 0; i < length; i++) {
        emptyArray.push(Math.floor(Math.random() * num));
    }
    return emptyArray;
};
let result = random(10, 100);
document.write(`<div>Рандомний масив: ${result}</div>`);

//- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
document.write(`<div>Відсортований за зростанням: ${result.sort((a, b) => a - b)}</div>`);

//- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
document.write(`<div>Масив тільки з парих чисел: ${result.filter(value => value % 2 === 0)}</div>`);

//- створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
console.log(result.map(value => value.toString()));
document.write(`<div>Масив де замість number - string: ${result.map(value => value.toString())}</div>`);



//- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меншого, або навпаки в залежності від значення аргументу direction.
let sortNums = (arr, direction) => {
    if(direction === 'asc') return arr.sort((a, b) => a-b);
    else if(direction === 'des') return arr.sort((a, b) => b-a);
}
document.write(`<div>${sortNums([3, 5, 6, 453, 35, 0, -45, 45.6, 45.5], 'asc')}</div>`);
document.write(`<div>${sortNums([3, 5, 6, 453, 35, 0, -45, 45.6, 45.5], 'des')}</div>`);

//sortNums('ascending') // [3,11,21]
//sortNums('descending') // [21,11,3]
//
//
//- є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

//-- відсортувати його за спаданням за monthDuration
console.log(coursesAndDurationArray.sort((a, b) => a.monthDuration-b.monthDuration));

//-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5));

